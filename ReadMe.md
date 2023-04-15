# mt-ts-template
minimal typescript template for minetest mod creation

## usage
- run `npm run install` to install development dependencies
- edit [mod.conf](./mod.conf) and change the name and description to match your mod
- edit [init.ts](./init.ts) and start writing code!
- run `npm run build` to compile your typescript to lua<br/>
or
- run `npm run dev` to build on every file change (local file system watcher)

## dev-dependencies
- [mt-api](https://github.com/RepComm/mt-api)
- [typescript-to-lua](https://github.com/TypeScriptToLua/TypeScriptToLua)
- [lua-types](https://github.com/TypeScriptToLua/lua-types)
- [typescript](https://github.com/microsoft/TypeScript)
