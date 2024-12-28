import americano from "./photos/black/americano1.jpg"
import classic from './photos/black/classic.jpg'
import aeropress from "./photos/black/aeropress.jpg"
import cherry from "./photos/black/cherry.jpg"
import espresso from './photos/black/espresso.jpg'

import flat_white from "./photos/milk/flat_white.jpg"
import latte from "./photos/milk/latte.jpg"
import raf_rasp from "./photos/milk/raf_rasp.jpg"
import raf_vanila from "./photos/milk/raf_vanila.jpg"
import lolipop from "./photos/milk/lolipop.jpg"
import halva from './photos/milk/halva.jpg'
import caramel from './photos/milk/caramel.jpg'
import kapuchino from './photos/milk/kapuchino.jpg'
import tropic from './photos/milk/tropic.jpg'

import orange from './photos/other/orange.jpg'
import rasp_cocao from "./photos/other/rasp_cocao.jpg"
import cocao from "./photos/other/cocao.jpg"
import kid from "./photos/other/kid.jpg"
import hot from "./photos/other/hot.jpg"


import rasp from "./photos/tea/rasp.jpg"

import croissant from "./photos/breakfast/croissant.jpg"

const photos = {
  black: {
    americano: americano,
    classic: classic,
    aeropress: aeropress,
    cherry: cherry,
    espresso: espresso,
  },
  milk : {
	  flat_white: flat_white,
	  latte: latte,
    raf_rasp: raf_rasp,
    raf_vanila: raf_vanila,
    lolipop: lolipop,
    halva: halva,
    caramel: caramel,
    kapuchino: kapuchino,
    tropic: tropic,
  },
  other: {
    orange: orange,
    rasp_cocao: rasp_cocao,
    cocao: cocao,
    kid: kid,
    hot: hot,
  }, 
  tea: {
    rasp: rasp,
  },
  breakfast: {
    croissant: croissant,
  },
  sweet: {

  }
}

export default photos