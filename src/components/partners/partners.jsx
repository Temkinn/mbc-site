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
				<Company name="Tasty Coffee" photo={TC} link="https://www.youtube.com/@tastycoffeeroasters"/>
				<Company name="THE WELDER CATHERINE" photo={Welder} link="https://www.youtube.com/@tastycoffeeroasters"/>
				<Company name="RIVER ROASTERS" photo={RiverR} link="https://www.youtube.com/@tastycoffeeroasters"/>
				<Company name="UNICAVA" photo={Unicava} link="https://www.youtube.com/@tastycoffeeroasters"/>
				<Company name="DRINKSPACE.RU" photo={Space} link="https://www.youtube.com/@tastycoffeeroasters"/>
				<Company name="DRINKSOME" photo={DS} link="https://www.youtube.com/@tastycoffeeroasters"/>
				<Company name="ТРАПЕЗА.BY" photo={Trapeza} link="https://www.youtube.com/@tastycoffeeroasters"/>
				<Company name="COFFEESTATE" photo={CoffeeState} link="https://www.youtube.com/@tastycoffeeroasters"/>
			</div>
		</div>
    )
}
