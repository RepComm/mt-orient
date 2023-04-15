
import type { MtEntityDef, MtObjRef } from "@repcomm/mt-api";

//get the current modname (as defined in mod.conf)
let modname = minetest.get_current_modname();

//get the directory of our mod
let modpath = minetest.get_modpath(modname);

//run our otherscript.ts as compiled by typescript-to-lua or npm run build
dofile(`${modpath}/otherscript.lua`);

let myEntityName = `${modname}:my_entity`;

interface MyEntityProps {
  _myprop: string;
}

interface MyEntityDef extends Partial<MtEntityDef>, MyEntityProps {

}

interface MyEntityRef extends MtObjRef, MyEntityProps {
}

function myEntity_onactivate(this: MyEntityRef, sd: string, dtime: number) {
  this._myprop = "hello world";
}
function myEntity_onstep (this: MyEntityRef, dtime: number) {

}

let myEntityDef: MyEntityDef = {
  visual: "mesh",
  mesh: "model.x",
  textures: ["texture.png"],
  
  collisionbox: [-0.2, -0.45, -0.2, 0.2, 0.45, 0.2],
  physical: true,

  //@ts-expect-error - MyEntityRef inherits from MtObjRef, mt-api needs some adjustment to handle these types better, no real issue present
  on_activate: myEntity_onactivate,

  //@ts-expect-error - MyEntityRef inherits from MtObjRef, mt-api needs some adjustment to handle these types better, no real issue present
  on_step: myEntity_onstep
};

minetest.register_entity(myEntityName, myEntityDef);
