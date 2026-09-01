const vscode = require('vscode');
const fs     = require('fs').promises;
const path   = require('path');


/**
 * @param {string} message
 * @param {vscode.ExtensionContext} context
 */
async function showErrorMessage(message, context) {
    const annotationsPath = context.extensionPath + '/library';

    message =
        `**${message}**\n\n` +
        'Please manually add this path to `emmylua.workspace.library` in your settings.json:\n\n' +
        `\`${annotationsPath}\``;

    const clicked = await vscode.window.showErrorMessage(message, 'Open Settings');
    if (clicked === 'Open Settings') {
        vscode.commands.executeCommand('workbench.action.openSettingsJson');
    }
}

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {

    try {
        const annotationsPath = context.extensionPath + '/library';
        const settingsPath = path.join(context.globalStorageUri.fsPath, '..', '..', '..', 'User', 'settings.json');

        let settings = {};
        try {
            const content = await fs.readFile(settingsPath, 'utf8');
            settings = JSON.parse(content);
        } catch (error) {
            if (error.code !== 'ENOENT') {
                console.error('Error reading settings file:', error);
                showErrorMessage('Cannot read settings file', context);

                return;
            }
        }

        if (!settings.emmylua)                   settings.emmylua = {};
        if (!settings.emmylua.workspace)         settings.emmylua.workspace = {};
        if (!settings.emmylua.workspace.library) settings.emmylua.workspace.library = [];
        if (!Array.isArray(settings.emmylua.workspace.library)) {
            settings.emmylua.workspace.library = [];
        }

        const libraries = settings.emmylua.workspace.library;

        // Remove stale plugin paths from old extension versions during updates,
        // but preserve the current library path and any user-added entries.
        // This ensures users upgrading from v0.0.1 → v0.0.2 don't accumulate
        // duplicate paths in their settings.
        /** @type {string[]} */
        const filteredLibraryPaths = libraries.filter(
            (/** @type {string}*/ libPath) =>
                libPath === annotationsPath || !libPath.includes('luanti-ide-helper')
        );

        const alreadyHasAnnotationsPath = libraries.includes(annotationsPath);
        const updatedLibraryPaths = filteredLibraryPaths.includes(annotationsPath)
            ? filteredLibraryPaths
            : [...filteredLibraryPaths, annotationsPath];
        const sameLibraryPathsArray = JSON.stringify(updatedLibraryPaths) === JSON.stringify(libraries);

        if (sameLibraryPathsArray) {
            return;
        }

        settings.emmylua.workspace.library = updatedLibraryPaths;
        // NOTE:
        // VS Code only allows update() for settings registered by the owning extension
        // in contributes.configuration. `emmylua.workspace.library` is owned by the
        // EmmyLua extension, not by this one, so update() fails with:
        // "is not a registered configuration".
        // Therefore we must edit the user's settings.json directly for this third-party key.
        await fs.writeFile(settingsPath, JSON.stringify(settings, null, 4));

        if (!alreadyHasAnnotationsPath) {
            // Do not call emmy.restartServer here. It can race with the language server and
            // result in "Cannot call write after a stream was destroyed".
            // A window reload is safer for the user.
            const reload = await vscode.window.showInformationMessage(
                'Library path updated. Reload window to apply changes?',
                'Reload'
            );
            if (reload === 'Reload') {
                vscode.commands.executeCommand('workbench.action.reloadWindow');
            }
        }

    } catch (error) {
        console.error('File operation error:', error);
        showErrorMessage(`Unable to update settings: ${error.message}`, context);
    }
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
    activate,
    deactivate
};
