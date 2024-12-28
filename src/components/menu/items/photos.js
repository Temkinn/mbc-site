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
import halva_latte from "./photos/milk/halva_latte.jpg"
import caramel_latte from './photos/milk/caramel_latte.jpg'
import kap from './photos/milk/kap.jpg'
import tropic_flat from './photos/milk/tropic_flat.jpg'

import orangej from './photos/other/orangej.jpg'
import raspb_cocao from "./photos/other/raspb_cocao.jpg"
import cocao_v from "./photos/other/cocao_v.jpg"
import kid_cocao from "./photos/other/kid_cocao.jpg"
import hot_ch from "./photos/other/hot_ch.jpg"


import raspb from "./photos/tea/raspb.jpg"

import croissant_v from "./photos/breakfast/croissant_v.jpg"

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
    halva_latte: halva_latte,
    caramel_latte: caramel_latte,
    kap: kap,
    tropic_flat: tropic_flat,
  },
  other: {
    orangej: orangej,
    raspb_cocao: raspb_cocao,
    cocao_v: cocao_v,
    kid_cocao: kid_cocao,
    hot_ch: hot_ch,
  }, 
  tea: {
    raspb: raspb,
  },
  breakfast: {
    croissant_v: croissant_v,
  },
  sweet: {

  }
}

export default photos