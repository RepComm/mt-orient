
import type { } from "@repcomm/mt-api";

//get the current modname (as defined in mod.conf)
let modname = minetest.get_current_modname();

//get the directory of our mod
let modpath = minetest.get_modpath(modname);

minetest.register_node("orient:rice_wallpaper", {
  description: "rice wallpaper pane",
  tiles: [{ name: "orient_rice_wallpaper.png", backface_culling: true }],
  // inventory_image: "orient_rice_wallpaper.png",
  drawtype: "mesh",
  mesh: "orient_rice_wallpaper.obj",
  light_source: 1,
  paramtype2: "facedir" as any,
  groups: { cracky: 3 },
  paramtype: "light",
  is_ground_content: false,
  sunlight_propagates: true,
  selection_box: {
    type: "fixed",
    fixed: [
      -0.5, -0.5, -0.05, 0.5, 0.5, 0.05
    ]
  },
  collision_box: {
    type: "fixed",
    fixed: [
      -0.5, -0.5, -0.05, 0.5, 0.5, 0.05
    ]
  }
});

minetest.register_node("orient:orient_green_roofing", {
  description: "green roofing",
  tiles: [{ name: "orient_green_roofing.png", backface_culling: true }],
  // inventory_image: "orient_green_roofing.png",
  drawtype: "mesh",
  mesh: "orient_green_roofing.obj",
  light_source: 1,
  paramtype2: "facedir",
  groups: { cracky: 3 },
  paramtype: "light",
  is_ground_content: false,
  // sunlight_propagates: true,
  selection_box: {
    type: "fixed",
    fixed: [
      -0.5, -0.5, -0.5, 0.5, 0.5, 0.5
    ]
  },
  collision_box: {
    type: "fixed",
    fixed: [
      -0.5, -0.5, -0.5, 0.5, 0.5, 0.5
    ]
  }
});

minetest.register_node("orient:orient_green_roofing_corner", {
  description: "green roofing",
  tiles: [{ name: "orient_green_roofing.png", backface_culling: true }],
  // inventory_image: "orient_green_roofing.png",
  drawtype: "mesh",
  mesh: "orient_green_roofing_corner.obj",
  light_source: 1,
  paramtype2: "facedir",
  groups: { cracky: 3 },
  paramtype: "light",
  is_ground_content: false,
  // sunlight_propagates: true,
  selection_box: {
    type: "fixed",
    fixed: [
      -0.5, -0.5, -0.5, 0.5, 0.5, 0.5
    ]
  },
  collision_box: {
    type: "fixed",
    fixed: [
      -0.5, -0.5, -0.5, 0.5, 0.5, 0.5
    ]
  }
});

minetest.register_node("orient:orient_green_roofing_edge", {
  description: "green roofing edge",
  tiles: [{ name: "orient_wood_red.png", backface_culling: true }],
  // inventory_image: "orient_wood_red.png",
  drawtype: "mesh",
  mesh: "orient_green_roofing_edge.obj",
  light_source: 1,
  paramtype2: "facedir" as any,
  groups: { cracky: 3 },
  paramtype: "light",
  is_ground_content: false,
  // sunlight_propagates: true,
  selection_box: {
    type: "fixed",
    fixed: [
      -0.5, -0.5, -0.5, 0.5, 0.5, 0.5
    ]
  },
  collision_box: {
    type: "fixed",
    fixed: [
      -0.5, -0.5, -0.5, 0.5, 0.5, 0.5
    ]
  }
});

minetest.register_node("orient:orient_rice_lantern", {
  description: "ricepaper lantern",
  tiles: [{ name: "orient_rice_lantern.png", backface_culling: true }],
  // inventory_image: "orient_rice_lantern.png",
  drawtype: "mesh",
  mesh: "orient_rice_lantern.obj",
  light_source: 12,
  paramtype2: "facedir" as any,
  groups: { cracky: 2 },
  paramtype: "light",
  is_ground_content: false,
  // sunlight_propagates: true,
  selection_box: {
    type: "fixed",
    fixed: [
      -0.5, -0.5, -0.4, 0.5, 0.4, 0.5
    ]
  },
  collision_box: {
    type: "fixed",
    fixed: [
      -0.5, -0.5, -0.4, 0.5, 0.4, 0.5
    ]
  }
});

minetest.register_node("orient:bamboo", {
  description: "bamboo",
  drawtype: "plantlike",
  use_texture_alpha: true,
  sunlight_propagates: true,
  paramtype: "light",
  walkable: false,
  floodable: true,
  tiles: [{ name: "bamboo.png" }],
  groups: { cracky: 2 }
});

minetest.register_node("orient:bonzai_baby", {
  description: "baby bonzai tree",
  drawtype: "plantlike",
  use_texture_alpha: true,
  sunlight_propagates: true,
  paramtype: "light",
  walkable: false,
  floodable: true,
  tiles: [{ name: "bonzai_baby.png" }],
  groups: { cracky: 2 }
});

minetest.register_node("orient:aspen_stair_fancy", {
  description: "fancy aspen stairs",
  tiles: [{ name: "default_aspen_wood.png", backface_culling: true }],
  // inventory_image: "orient_green_roofing.png",
  drawtype: "mesh",
  mesh: "aspen_stair_fancy.obj",
  paramtype2: "facedir",
  groups: { cracky: 3 },
  paramtype: "light",
  is_ground_content: false,
  // sunlight_propagates: true,
  selection_box: {
    type: "fixed",
    fixed: [
      [-0.5, -0.5, -0.5, 0.5, -0.16667, 0.5],
      [-0.5, -0.16667, -0.16667, 0.5, 0.16667, 0.5],
      [-0.5, 0.16667, 0.16667, 0.5, 0.5, 0.5]
    ]
  },
  collision_box: {
    type: "fixed",
    fixed: [
      [-0.5, -0.5, -0.5, 0.5, -0.16667, 0.5],
      [-0.5, -0.16667, -0.16667, 0.5, 0.16667, 0.5],
      [-0.5, 0.16667, 0.16667, 0.5, 0.5, 0.5]
    ]
  },
});

minetest.register_node("orient:aspen_trim", {
  description: "aspen trimming",
  tiles: [{ name: "default_aspen_wood.png" }],
  drawtype: "nodebox",
  node_box: {
    type: "fixed",
    fixed: [-0.5, 0.4, 0.1, 0.5, 0.5, 0.5]
  },
  groups: { cracky: 2 },
  paramtype: "light",
  paramtype2: "facedir",
  sunlight_propagates: true,
});

minetest.register_node("orient:red_painted_log", {
  tiles: ["orient_wood_red.png" ],
  description: "red painted log",
  sunlight_propagates: true,
  is_ground_content: false,
  paramtype: "light",
  drawtype: "nodebox",

  groups: {cracky: 1, wood: 1},
  // use_texture_alpha = def.use_texture_alpha and "blend" or "clip",
  node_box: {
    type: "connected",
    fixed: [-1/4, -1/2, -1/4, 1/4, 0, 1/4],
    connect_bottom: [-1/4, 0, -1/4, 1/4, 1/2, 1/4],

    connect_top: [
      [-1/3, -1/2, -1/6, 1/3, 1/2, 1/6],
      [-1/6, -1/2, -1/3, 1/6, 1/2, 1/3],
    ],

    connect_front: [[-1/4, -1/2, -1/2, 1/4, 0, 1/4]],
    connect_back: [[-1/4, -1/2, -1/4,  1/4, 0, 1/2]],

    connect_left: [[-1/2, -1/2, -1/4, -1/4, 0, 1/4]],
    connect_right: [[1/4, -1/2, -1/4, 1/2, 0, 1/4]],
  } as any,
  connects_to: ["group:stone", "group:wood"]
});
