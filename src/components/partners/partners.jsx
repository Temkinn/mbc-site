import styles from "./styles.module.css"
import Company from "./company/company"

import TC from './photos/tasty_coffee.jpg'
import Welder from './photos/welder.png'
import RiverR from './photos/riverr.png'
import Unicava from './photos/unicava.png'
import Space from './photos/space.png'
import DS from './photos/ds.png'
import Trapeza from './photos/trapeza.gif'
import CoffeeState from './photos/coffeestate.jpg'

export default function Partners(){
	return(
        <div className={styles.container}>
			<div className={styles.title}>Наши партнеры и поставщики</div>
			<div className={styles.companies}>
				<Company name="Tasty Coffee" photo={TC} ratio={1} link="https://www.youtube.com/@tastycoffeeroasters"/>
				<Company name="THE WELDER CATHERINE" photo={Welder} ratio={1} link="https://www.youtube.com/@TheWelderCatherine"/>
				<Company name="RIVER ROASTERS" photo={RiverR} ratio={1.6} link="https://www.instagram.com/riverespressoclub?igsh=MWtuMWgyZmZxMHRuMQ=="/>
				<Company name="UNICAVA" photo={Unicava} ratio={1.5} link="https://www.instagram.com/unicava_ru/?hl=ru"/>
				<Company name="DRINKSPACE.RU" photo={Space} ratio={1.7} link="https://www.instagram.com/drink_space/"/>
				<Company name="DRINKSOME" photo={DS} ratio={1.17} link="https://www.youtube.com/@Drinksome"/>
				<Company name="ТРАПЕЗА.BY" photo={Trapeza} ratio={1} link="https://www.instagram.com/trapezaminsk/"/>
				<Company name="COFFEESTATE" photo={CoffeeState} ratio={1} link="https://www.youtube.com/@COFFEESTATE"/>
			</div>
		</div>
    )
}
