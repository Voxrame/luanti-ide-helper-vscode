# Change Log

## [1.0.5](https://github.com/Voxrame/luanti-ide-helper-vscode/releases/tag/1.0.5)
 - Update `library` submodule.
   * library 4dafb68...d075813 (1):
     > Move "Global callbacks" into `core_namespace/registration/global.lua`. Relates #1.
 - Update `library` submodule.
   * library d075813...a5022b7 (4):
     > Move "Environment access" into `core_namespace/registration/environment_access.lua`. Relates #1.
     > Move "Chat" into `core_namespace/registration/chat.lua`. Relates #1.
     > Move "Authentication" into `core_namespace/registration/authentication.lua`. Relates #1.
     > Move "Setting-related" into `core_namespace/registration/settings.lua`. Relates #1.
 - Update `library` submodule.
   * library a5022b7...de20880 (4):
     > Move "Item handling" into `core_namespace/registration/item_handling.lua`. Relates #1.
     > Move "Formspec" into `core_namespace/registration/formspec.lua`. Relates #1.
     > Move "Inventory" into `core_namespace/registration/inventory.lua`. Relates #1.
     > Move "Mod channels" into `core_namespace/registration/mod_channels.lua`. Relates #1.
 - Update `library` submodule.
   * library de20880...92cf1c4 (1):
     > Improve `core_namespace/authentication.lua` annotations; add missed func.
 - Improve `./release` script.

## [1.0.4](https://github.com/Voxrame/luanti-ide-helper-vscode/releases/tag/1.0.4)
 - CI: add creating GH release step. VX-18.
 - CI: add `update-library.yml` wf for up submodule by event trigger (from another repo). VX-18.
 - CI: ability to manual run - for run and **wait** result from another repository wf. VX-18.
 - CI: grant permissions for built-in token in `update-library.yml`. VX-18.
 - Update `luanti-ide-helper` 3056f1e...ec2f352 (1):
    > CI: add notifing another repos about changes for update submodule. VX-18.
 - Update `luanti-ide-helper` ec2f352...51cacb4 (1):
    > CI: `notify-changes.yml`: check results every 10s instead 1m. VX-18.
 - Update `luanti-ide-helper` 51cacb4...aad23d2 (2):
    > Add space-lines between functions in `core_namespace.lua`.
    > Deprecate `minetest.` ns. Fix `NodeDefinition.after_place_node()` annotation.
 - Update `luanti-ide-helper` aad23d2...4dafb68 (1):
    > Precise `MapPosition` -> `MapVector` where it needed.

## [1.0.3](https://github.com/Voxrame/luanti-ide-helper-vscode/releases/tag/1.0.3), [1.0.2](https://github.com/Voxrame/luanti-ide-helper-vscode/releases/tag/1.0.2), [1.0.1](https://github.com/Voxrame/luanti-ide-helper-vscode/releases/tag/1.0.1), [1.0.0](https://github.com/Voxrame/luanti-ide-helper-vscode/releases/tag/1.0.0)
 - [View Changes `1.0.0` - `1.0.3`](https://github.com/Voxrame/luanti-ide-helper-vscode/commits/1.0.3)
