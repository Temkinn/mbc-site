import styles from "./styles.module.scss"
import Person from "./person/person"

import Ilya from "./photos/Ilya.jpg"
import Anton from "./photos/Anton.jpg"
import Anastasia from "./photos/Anastasia.jpg"
import Alena from "./photos/Alena.jpg"

export default function Barista(){
	return(
        <div className={styles.container}>
			<h2 className={styles.title}>Наши бариста</h2>
			<h3 className={styles.subtitle}>Лучшие истории рассказывают за чашечкой кофе</h3>
			<div className={styles.people}>
				<Person name="Илья Гринкевич" photo={Ilya} link="https://www.instagram.com/ilyagrink/?igsh=MXBtZTkzZWE1NmZkNw%3D%3D#"/>
				<Person name="Антон Быстрицкий" photo={Anton} link="https://www.instagram.com/tohabystricki/?igsh=aXZueGluMW5oem85"/>
				<Person name="Анастасия Русакевич" photo={Anastasia} link="https://www.instagram.com/nastya_rusakevich23?igsh=MWQxcml0bDNoaHM0dg=="/>
				<Person name="Алена Зиневич" photo={Alena} link="https://www.instagram.com/aliona_zinevich/profilecard/?igsh=MTZ0bHRneGMzbzE3MQ%3D%3D"/>
			</div>
		</div>
    )
}
