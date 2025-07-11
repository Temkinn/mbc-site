import photos from "./photos"

const items = {
  black: [
    {
      name: "Эспрессо",
      g: "50 мл",
      price: "6",
      description:
        "Крепкий, яркий, запоминающийся. Напиток для тех, кто по-настоящему любит кофе.",
      photo: photos.black.espresso,
      kpfc: "КБЖУ : 8/0.3/0.3/0.9",
    },
    {
      name: "Авангардный эспрессо",
      g: "80 мл",
      price: "6,5",
      description:
        "Напиток с яркой сладостью и кислотностью и включающий в себя весь потенциал зерна, обжаренного под фильтр.",
      photo: photos.black.avangespresso,
      kpfc: "",
    },
    {
      name: "Американо",
      g: "200 мл",
      price: "6,5",
      description:
        "Насыщенный черный кофе на основе эспрессо. Готовим путем смешивания горячей воды и эспрессо 1:4. Мы всегда используем зерно свежей обжарки, чтобы ваша чашка всегда оставалась стабильной и сбалансированной.",
      photo: photos.black.americano,
      kpfc: "КБЖУ: 18,8/0,022/0,032/0,301",
    },
    // {
    //   name: "Еловый Американо",
    //   g: "200 мл",
    //   price: "6",
    //   description: "Зимний, хвойный, запоминающийся.",
    //   photo: photos.black.el_americano,
    //   kpfc: "КБЖУ: 75.1/0.056/0.09/4.5",
    // },
    {
      name: "Фильтр Classic",
      g: "250 мл",
      price: "7",
      description:
        "Черный кофе без молока, сваренный на зерне более светлой обжарки, чем под эспрессо. Отличная альтернатива американо. Яркий, насыщенный, запоминающийся - сочетание традиций и современности.",
      photo: photos.black.classic,
      kpfc: "КБЖУ: 6/1/1/1",
    },
    {
      name: "Вишневый фильтр",
      g: "250 мл",
      price: "8",
      description:
        "Привычный и знакомый вкус крепкого черного кофе, дополненный ярким вкусом спелой вишни. Кисло-сладкая история для тех, кто хочет одновременно проснуться и окунуться в лето.",
      photo: photos.black.cherry,
      kpfc: "КБЖУ: 15.6/0.9/1.01/1.09",
    },
    {
      name: "AeroPress",
      g: "230 мл",
      price: "9",
      description:
        "Альтернативный метод заваривания кофе. Aeropress - черный кофе без молока. Метод заваривания, в котором встретились качество, скорость и мобильность. Отличный вариант для тех, кто отдает предпочтение более плотным текстурам напитка.",
      photo: photos.black.aeropress,
      kpfc: "КБЖУ: 4/0.1/0/0.1",
    },
  ],

  milk: [
    {
      name: "Капучино",
      g: "150 / 350 мл",
      price: "7 / 7,5",
      description:
        "Классический кофейный напиток с молоком. Идеальный баланс эспрессо, молока и молочной пены.",
      photo: photos.milk.kap,
      kpfc: "КБЖУ 150: 133.14/4.3/5.2/7.3\nКБЖУ 350: 195.1/7.2/8.7/12.05",
    },
    {
      name: "Латте Classic",
      g: "350 мл",
      price: "7",
      description:
        "Молочный кофейный напиток. Сочетание эспрессо и большого количества молока. Идеален для любого времени дня.",
      photo: photos.milk.latte,
      kpfc: "КБЖУ: 195/7,2/8,7/12",
    },
    {
      name: "Латте Карамель",
      g: "350 мл",
      price: "9",
      description:
        "Молочный кофейный напиток, дополненный вкусом домашней соленой карамели, сваренной руками наших бариста. На-ту-ра-лоч-ка для тех, кто любит помягче, послаще, понежнее.",
      photo: photos.milk.caramel_latte,
      kpfc: "КБЖУ: 201.3/7.5/9.1/12.5",
    },
    {
      name: "Латте Халва",
      g: "350 мл",
      price: "9",
      description:
        "Молочный кофейный напиток, дополненный домашним халвичным соусом. Уникальный продукт, сочетающий в себе натуральность, плотную текстуру и знакомый вкус детства.",
      photo: photos.milk.halva_latte,
      kpfc: "КБЖУ: 319.4/9.7/17.4/20.7",
    },
    // {
    //   name: "Латте Рождественский Леденец",
    //   g: "300 мл",
    //   price: "8,5",
    //   description:
    //     "Десертный сливочно-кофейный напиток со вкусом леденцовой карамели, отправляющий в то самое снежное детство.",
    //   photo: photos.milk.lolipop,
    //   kpfc: "КБЖУ: 202.7/7.54/9.1/17.4",
    // },
    {
      name: "Флэт Уайт",
      g: "200 мл",
      price: "7,5",
      description:
        "Насыщенный кофейный напиток с молоком и тонкой молочной пеной. Основа кофейной классики для любителей баланса.",
      photo: photos.milk.flat_white,
      kpfc: "КБЖУ: 133/4,3/5,2/7,3",
    },
    {
      name: "Флэт Уайт Тропический",
      g: "250 мл",
      price: "9,5",
      description:
        "Тропики в вашей чашке? А почему бы и не попробовать! Как в песне: бананы, кокосы и… двойной эспрессо.",
      photo: photos.milk.tropic_flat,
      kpfc: "КБЖУ: 91.4/1.2/1.7/8.4",
    },
    {
      name: "Раф Сlassic",
      g: "300 мл",
      price: "9,5",
      description:
        "Кофе или десерт? Сочетание - нежирные сливки, свежесваренный эспрессо и щепотка ванильного сахара. Кремовый, сладковатый  напиток с нежной текстурой. Идеален для тех, кому «послаще».",
      photo: photos.milk.raf_vanila,
      kpfc: "КБЖУ: 335.1/6.7/25/11.5",
    },
    {
      name: "Раф Малиновый",
      g: "300 мл",
      price: "10",
      description:
        "Яркое сочетание сочной малины и душистого базилика. Для основы напитка мы используем нежирные сливки и кофейный концентрат. Текстурный, плотный напиток для любителей смелых комбинаций.",
      photo: photos.milk.raf_rasp,
      kpfc: "КБЖУ: 354.9/6.6/26.7/22.5",
    },
  ],

  other: [
    {
      name: "Какао",
      g: "300 мл",
      price: "9,5",
      description:
        "Напиток на основе натурального тертого «Bean to Bar» шоколада с тростниковым сахаром и молоком. Знакомые ингредиенты в более благородной интерпретации. То, что точно стоит попробовать.",
      photo: photos.other.cocao_v,
      kpfc: "КБЖУ: 215.9/7.95/15.2/11.4",
    },
    {
      name: "Детское Какао",
      g: "250 мл",
      price: "8,5",
      description:
        "Все тот же какао на основе «Bean to Bar» шоколада, только в меньшей концентрации. Немного тростникового сахара, молоко и воздушная шапка из маршмеллоу. Мы сделали все возможное для лучшего понимания со стороны маленького гостя. Мягкое, воздушное и все еще шоколадное.",
      photo: photos.other.kid_cocao,
      kpfc: "КБЖУ: 176.2/5.9/9.4/17",
    },
    // {
    //   name: "Малиновое какао",
    //   g: "300 мл",
    //   price: "9",
    //   description:
    //     "То самое «Bean to Bar» какао, малиново-шоколадное. Уникалочка в нашем исполнении.",
    //   photo: photos.other.raspb_cocao,
    //   kpfc: "КБЖУ: 224.3/7.1/13.2/14.9",
    // },
    {
      name: "Матча-Латте",
      g: "300 мл",
      price: "9,5",
      description:
        "Напиток на основе японского перемолотого зеленого чая в сочетании со сладостью растительного молока. Яркий, насыщенный, плотный вкус с благородной горчинкой.\n*выбор альтернативного молока остается за вами\n*КБЖУ рассчитано кокосовое молоко в основе",
      photo: photos.other.matcha_latte,
      kpfc: "КБЖУ: 33.8/0.26/3.12/1.04",
    },
    {
      name: "Матча-Раф",
      g: "300 мл",
      price: "9,5",
      description:
        "Нежный молочный напиток на основе зеленой матчи со сладостью ванильного сахара и кокосового молока. Текстурный, в меру сладкий напиток с долгим послевкусием и легким телом.",
      photo: photos.other.matcha_raf,
      kpfc: "КБЖУ: 53.1/0.26/3.12/5.84",
    },
    // {
    //   name: "Матча-Мандарин",
    //   g: "300 мл",
    //   price: "9,5",
    //   description:
    //     "Сезонная матча в цитрусовом исполнении на кокосовом молоке.",
    //   photo: photos.other.matcha_orange,
    //   kpfc: "КБЖУ: 95.32/0.4/5.3/6.4",
    // },
    {
      name: "Фреш Апельсин",
      g: "250 мл",
      price: "9",
      description: "Свежевыжатый апельсиновый сок.",
      photo: photos.other.orangej,
      kpfc: "КБЖУ: 78/1.8/0.4/16.2",
    },
    // {
    //   name: "Горячий шоколад",
    //   g: "150 мл",
    //   price: "9",
    //   description:
    //     "А можно мне побольше шоколада и меньше молока? Сказано - сделано! Почти как плитка шоколада, только лучше.",
    //   photo: photos.other.hot_ch,
    //   kpfc: "КБЖУ: 185.5/6.6/13.3/9.4",
    // },
    // {
    //   name: "Глинтвейн б.а",
    //   g: "300 мл",
    //   price: "8,5",
    //   description:
    //     "Согревающий, пряный, зимний напиток с мёдом, без капли алкоголя.",
    //   photo: photos.other.glintvein_ba,
    //   kpfc: "КБЖУ: 64.4/0.2/0.02/16.7",
    // },
    {
      name: "Гранатовый колд-Брю",
      g: "400 мл",
      price: "9,5",
      description:
        "Черный кофе холодного заваривания на натуральном гранатовом соке. Насыщенный, яркий, кисло-сладкий.",
      photo: photos.other.cold_bru,
      kpfc: "",
    },
    {
      name: "Бамбл-апельсин",
      g: "350 мл",
      price: "11",
      description:
        "Холодный кофейный напиток на основе свежевыжатого апельсинового сока с кленовым сиропом и двойным эспрессо.",
      photo: photos.other.orange_bumble,
      kpfc: "",
    },
    {
      name: "Матча Бамбл",
      g: "350 мл",
      price: "11",
      description:
        "Летний Хит с матчей! Готовим из свежевыжатого сока, спелого апельсина, добавляя шот церемониальной матчи.",
      photo: photos.other.matcha_bumble,
      kpfc: "",
    },
    {
      name: "Spanish latte",
      g: "300 мл",
      price: "9,5",
      description:
        "Напиток, привезенный из ОАЭ. Молочный напиток приготовленный на двойном эспрессо с добавлением сгущеного молока. Нежный, сливочный, со сбалансированной сладостью.",
      photo: photos.special.spanish_latte,
      kpfc: "",
    },
  ],

  special: [
    //{
    //   name: "Дубайский Американо",
    //  g: "250 / 350 мл",
    //   price: "8,5",
    //   description:
    //    "Черный кофе приготовленный на основе цветочной розовой воды. Необычный вкусовой профиль привычного напитка. Привезен из ОАЭ.\n\n*можно приготовить как холодным, так и горячим",
    //  photo: photos.special.dubai_americano,
    //  kpfc: "",
    // },
    // {
    //   name: "Солнечное алоэ",
    //   g: "400 мл",
    //   price: "9,5",
    //   description:
    //    "Лимонад с натуральным сиропом цитрусовых и джемом из алое с медом. ",
    //   photo: photos.special.sun_aloe,
    //   kpfc: "",
    // },
    {
      name: "Мятно-Ягодное Облако",
      g: "400 мл",
      price: "12",
      description:
        "Холодная зеленая матча на кокосовом молоке с натуральным мятным сиропом, дополненная ягодной пеной.\nОсвежающее и нежное сочетание мяты, зеленой матчи и кокоса, дополненное ярким вкусом воздушной ягодной пены.",
      photo: photos.special.mint_berry,
      kpfc: "",
    },
    //{
    //  name: "Матча Сакура",
    //  g: "400 мл",
    //  price: "9,5",
    //  description:
    //    "Холодная зеленая матча приготовленная на основе цветочной розовой воды, дополненная ярким вкусом ягодной пены из клубники и гибискуса.",
    //  photo: photos.special.matcha_sakura,
    //  kpfc: "",
    //  },
    // {
    //   name: "ICE Латте Карамель",
    //   g: "375 мл",
    //   price: "8,5",
    //   description: "Тот самый латте с натуральной карамелью.",
    //   photo: photos.special.ice_lttcar,
    //   kpfc: "",
    // },

    {
      name: "Лимонад Balance Манго-Маракуйя с ягодной пеной",
      g: "375 мл",
      price: "12",
      description:
        "Яркий сочный манго в сочетании с маракуйей и ягодной клубничной пеной с гибискусом. Кисло-сладкий, яркий, освежающий.",
      photo: photos.special.lim_mangmar,
      kpfc: "",
    },
    {
      name: "Лимонад Balance Ананас-Кокос",
      g: "375 мл",
      price: "10",
      description:
        "Тропическая история для тех, кто хочет на море. Чем вам не телепорт на тропический остров?",
      photo: photos.special.lim_ancocs,
      kpfc: "",
    },
    {
      name: "Лимонад Balance Абрикос-Попкорн ",
      g: "375 мл",
      price: "10",
      description:
        "Сочетание спелого абрикоса и сладкого карамельного попкорна - только в стакане со льдом. Заходи попробовать.",
      photo: photos.special.lim_abrpopcorn,
      kpfc: "",
    },
    {
      name: "Лимонад Цитрусовый",
      g: "400 мл",
      price: "9,5",
      description: "Искристый, кисло-сладкий, освежающий! Как в детстве!",
      photo: photos.special.lim_zitr,
      kpfc: "",
    },
    {
      name: "Лимонад Малина-мята",
      g: "400 мл",
      price: "9,5",
      description:
        "Целая горсть свежих ягод у вас в стакане, дополненная мятой и пузырьками. Как в детстве у бабушки.",
      photo: photos.special.lim_malmt,
      kpfc: "",
    },
    {
      name: "Ванильный  Морозко с клубникой",
      g: "400 мл",
      price: "10",
      description:
        "Ванильное мороженое, молоко и свежая клубника! То что нужно для жаркого дня!",
      photo: photos.special.vanil_moroz,
      kpfc: "",
    },
    {
      name: "Ванильный  Морозко с малиной",
      g: "400 мл",
      price: "10",
      description:
        "Ванильное мороженое, молоко и свежая малина. Ягодный, освежающий - идеален для жарких дней!",
      photo: photos.special.vanil_moroz,
      kpfc: "",
    },
  ],

  tea: [
    {
      name: "Чай Листовой",
      g: "500 мл",
      price: "7",
      description: "Насыщенные и ароматные селекционные чаи на выбор.",
      photo: photos.tea.leaves,
      kpfc: "",
    },
    {
      name: "Чай Мятный",
      g: "500 мл",
      price: "9",
      description: "Освежающий и ароматный травяной чай из листьев мяты.",
      photo: photos.tea.tea_mint,
      kpfc: "КБЖУ: 7.35/0.5/0.06/1.2",
    },
    {
      name: "Чай Вишня-Алоэ",
      g: "300 / 500 мл",
      price: "9 / 10",
      description:
        "Легендарный фруктовый чай на основе вишневого отвара с алоэ и мятой.",
      photo: photos.tea.aloe,
      kpfc: "КБЖУ 300: 46.6/0.17/0.11/11.2\nКБЖУ 500: 76.5/0.28/0.19/18.4",
    },
    {
      name: "Чай Малина-Маракуйя",
      g: "300 / 500 мл",
      price: "9 / 10",
      description:
        "Горячий чайный напиток на основе сочных ягод малины и пюре маракуйи. Яркая кисло-сладкая история для тех, кто скучает по лету.",
      photo: photos.tea.raspb,
      kpfc: "КБЖУ 300: 160/0.46/0.92/26 \nКБЖУ 500: 233/0/.67/0.4/37",
    },
    // {
    //   name: "Азиатский чай с пеной, черный",
    //   g: "400 мл",
    //   price: "9,5",
    //   description:
    //     "Холодный черный чай с маракуйей, дополненный ягодной клубничной пеной с гибискусом",
    //   photo: photos.special.asian_tea,
    //   kpfc: "",
    // },
    // {
    //   name: "Азиатский чай с пеной, зеленый",
    //   g: "400 мл",
    //   price: "9,5",
    //   description:
    //     "Холодный зеленый чай с маракуйей, дополненный ягодной клубничной пеной с гибискусом",
    //   photo: photos.special.asian_tea,
    //   kpfc: "",
    // },

    // {
    //   name: "Чай Облепиховый",
    //   g: "300 / 500 мл",
    //   price: "8 / 9",
    //   description:
    //     "На основе натурального соуса облепихи, пюре маракуйи, ягодами облепихи и мёда.",
    //   photo: photos.tea.obl_tea,
    //   kpfc: "КБЖУ 300: 135.7/0.7/1.7/23/4\nКБЖУ 500: 217.3/0.8/1.6/40.1",
    // },
    // {
    //   name: "Чай Облепиховый-Баунти",
    //   g: "300 / 500 мл",
    //   price: "8,5 / 9,5",
    //   description: "Облепиховая кокосовость, для тех, кому послаще.",
    //   photo: photos.tea.obl_baunty,
    //   kpfc: "КБЖУ 300: 107.5/0.6/6/7.9\nКБЖУ 500: 190.2/1.1/9.9/13.8",
    // },
    // {
    //   name: "Имбирно-еловый чай",
    //   g: "300 / 500 мл",
    //   price: "8,5 / 9,5",
    //   description: "Пряный, медовый, согревающий с леденцовыми нотками.",
    //   photo: photos.tea.imb_el,
    //   kpfc: "КБЖУ 300: 118,2/0.8/0.2/24.2\nКБЖУ 500: 169/1.1/0.4/34.5",
    // },
  ],

  breakfast: [
    {
      name: "Сырники ванильные",
      g: "150 г",
      price: "9",
      description:
        "Ароматные сырники из натурального творога с легким оттенком ванили. Хрустящая корочка снаружи и нежная воздушная текстура внутри. Рекомендуем с малиной или клубникой.",
      photo: photos.breakfast.vanil_sir,
      kpfc: "КБЖУ: 569.9/32.7/41.3/15.5",
    },
    // {
    //   name: "Сырные сырники с сезонным джемом",
    //   g: "190 г",
    //   price: "12",
    //   description:
    //     "Нежные сырники из творога с моцареллой и сулугуни внутри. Дополняется джемом из сезонных ягод или сметаной на выбор.\n*КБЖУ рассчитан только на сырные сырники.",
    //   photo: photos.breakfast.cheese_sir,
    //   kpfc: "КБЖУ: 780/29.5/69.6/8.17",
    // },
    {
      name: "Круассан классический",
      g: "90 г",
      price: "4,5",
      description:
        "Нежный, воздушный и хрустящий. Идеальное дополнение к любой чашке.",
      photo: photos.breakfast.croissant_v,
      kpfc: "КБЖУ: 306/4.9/16.2/36",
    },
    {
      name: "Круассан с красной рыбой",
      g: "190 г",
      price: "15",
      description:
        "Хрустящий круассан со сливочным сыром, листьями свежего салата и лососем домашнего посола.",
      photo: photos.breakfast.croissant_redfish,
      kpfc: "КБЖУ: 430/14/25/32",
    },
    {
      name: "Круассан с курицей",
      g: "210 г",
      price: "12",
      description:
        "Круассан С ломтиками аппетитной куриной грудки, дополненный домашним майонезом, свежим салатом и спелыми томатами.",
      photo: photos.breakfast.croissant_chick,
      kpfc: "КБЖУ: 371/34.3/24.4/2.8",
    },
    {
      name: "Сэндвич с тунцом",
      g: "220 г",
      price: "15",
      description:
        "Тунец в сочетании с творожным сыром, соусом хойсин и лимоном, дополненным яйцом, свежим огурцом и хрустящим салатом айсберг.Все это на подушке из воздушной чиабатты.",
      photo: photos.breakfast.sandwich,
      kpfc: "",
    },
    // {
    //   name: "Круассан с фундуком",
    //   g: "105 г",
    //   price: "6,5",
    //   description:
    //     "Воздушный, хрустящий круассан с фундучным кремом и легким послевкусием рома.",
    //   photo: photos.breakfast.croissant_fund,
    //   kpfc: "",
    // },
    // {
    //   name: "Круассан миндальный",
    //   g: "105 г",
    //   price: "6,5",
    //   description: "Сочетание тончайшего теста с ромом и миндальным кремом.",
    //   photo: photos.breakfast.croissant_mindal,
    //   kpfc: "",
    // },
    {
      name: "Творожная запеканка",
      g: "180 г",
      price: "13",
      description:
        "Нежная и воздушная запеканка из творога с сезонным джемом на выбор. Любимый вариант завтрака для больших и маленьких.",
      photo: photos.sweet.zapekanka,
      kpfc: "",
    },
    {
      name: "Cэндвич с цыпленком и луковым мармеладом",
      g: "220 г",
      price: "15",
      description:
        "Cэндвич на воздушной чиабатте с домашним соусом тар-тар, копченым цыпленком, салатом айсберг, луковым мармеладом  и солёным огурчиком. Дополнен тянущимся сыром сулугуни.",
      photo: photos.breakfast.snd_zipl,
      kpfc: "",
    },
    {
      name: "Мороженое",
      g: "110 г",
      price: "10",
      description: "Сливочное мороженное с натуральной карамелью.",
      photo: photos.breakfast.icecreame,
      kpfc: "",
    },
  ],

  sweet: [
    {
      name: "Кекс Банановый",
      g: "120 г",
      price: "6,5",
      description:
        "Сочный пряный кекс с грецким орехом и бананом. Рождественская история для больших и маленьких.",
      photo: photos.sweet.banana_keks,
      kpfc: "КБЖУ: 441.17/9.06/21.6/46.2",
    },
    {
      name: "Кекс Лимонный",
      g: "120 г",
      price: "6,5",
      description:
        "Влажный, ароматный, цитрусовый. Идеален для любителей кисло-сладких историй.",
      photo: photos.sweet.limon_keks,
      kpfc: "КБЖУ: 516/7.4/19.11/50.2",
    },
    {
      name: "Ириска с солью",
      g: "25 г",
      price: "3,5",
      description: "Sucré - ирис, о котором невозможно молчать.",
      photo: photos.sweet.salt_iris,
      kpfc: "КБЖУ: 93.75/0.25/4.2/13.25",
    },
    {
      name: "Ириска шоколадная",
      g: "25 г",
      price: "3,5",
      description: "Шоколадный ирис, идеальное дополнение к твоему напитку.",
      photo: photos.sweet.choco_iris,
      kpfc: "КБЖУ: 94.25/0.65/4.5/12",
    },
    {
      name: "Шведская булка с корицей",
      g: "110 г",
      price: "6,5",
      description: "Мягкая и воздушная сдобая булочка с корицей и сахаром.",
      photo: photos.sweet.swed_cinnamon,
      kpfc: "КБЖУ: 400/8,4/6,4/39",
    },
    {
      name: "Шведская булка с маком",
      g: "110 г",
      price: "6,5",
      description: "Сдобная воздушная булочка с маковой начинкой.",
      photo: photos.sweet.swed_poppy,
      kpfc: "КБЖУ: 550/8,8/22,3/77,8",
    },
  ],
}

export default items
