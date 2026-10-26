# Change Log

## [1.0.7](https://github.com/Voxrame/luanti-ide-helper-vscode/releases/tag/1.0.7)
 - Fix: annotations (library) were missing from packages since 1.0.2

## [1.0.6](https://github.com/Voxrame/luanti-ide-helper-vscode/releases/tag/1.0.6)
 - Update `library` submodule.
   * library 92cf1c4...ea41411 (1):
     > Annotations: `core.registered_nodes` returns `RegisteredNodeDefinition` with non-nil defaults
 - Update `library` submodule.
   * library ea41411...c9f3085 (14):
     > Move "Global objects" & "Global tables" into `core_namespace/global_objects.lua` & `core_namespace/global_tables.lua`. Relates #1.
     > Move "Misc." into `core_namespace/misc.lua`. Relates #1.
     > Move "Storage API" into `core_namespace/storage_api.lua`. Relates #1.
     > Move "HTTP Requests" into `core_namespace/http_requests.lua`. Relates #1.
     > Move "Schematics" into `core_namespace/schematics.lua`. Relates #1.
     > Move "Particles" into `core_namespace/particles.lua`. Relates #1.
     > Move "Bans" into `core_namespace/bans.lua`. Relates #1.
     > Move "Server" into `core_namespace/server.lua`. Relates #1.
     > Move "Async environment" into `core_namespace/async_environment.lua`. Relates #1.
     > Move "Timing" into `core_namespace/timing.lua`. Relates #1.
     > Move "Sounds" into `core_namespace/sounds.lua`. Relates #1.
     > Move "Defaults for the `on_punch` and `on_dig` node definition callbacks" into `core_namespace/defaults_for_nodes.lua`. Relates #1.
     > Move "Defaults for the `on_place` and `on_drop` item definition functions" into `core_namespace/defaults_for_items.lua`. Relates #1.
     > Move "Rollback" into `core_namespace/rollback.lua`. Relates #1.
 - Exclude demo gif, library changelog & `.gh-release` from VSIX.

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
