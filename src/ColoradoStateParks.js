import React from "react";
import changedTheName from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";

import { trees, wildlife, elevation } from "./parks/RockyMountain";

elevation()
wildlife()

export default function ColoradoStateParks() {
  changedTheName(); // => "42 parks!"
  console.log(trees)
  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
    </div>
  )
}


//  ColoradoStateParks;