import styles from "./styles.module.css"
import Person from "./person/person"

import Ilya from "./photos/Ilya.jpg"
import Anton from "./photos/Anton.jpg"
import Daniil from "./photos/Daniil.png"
import Anastasia from "./photos/Anastasia.jpg"
import Alena from "./photos/Alena.jpg"

export default function Barista(){
	return(
        <div className={styles.container}>
			<div className={styles.title}>Наши бариста</div>
			<div className={styles.subtitle}>Лучшие истории рассказывают за чашечкой кофе</div>
			<div className={styles.people}>
				<Person name="Илья Гринкевич" photo={Ilya} link="https://www.instagram.com/ilyagrink/?igsh=MXBtZTkzZWE1NmZkNw%3D%3D#"/>
				<Person name="Антон Быстрицкий" photo={Anton} link="https://www.instagram.com/tohabystricki/?igsh=aXZueGluMW5oem85"/>
				<Person name="Даниил Котляров" photo={Daniil} link="https://www.instagram.com/daniilkatletka?igsh=Y21odWhqMGVlM3gz"/>
				<Person name="Анастасия Русакевич" photo={Anastasia} link="https://www.instagram.com/nastya_rusakevich23?igsh=MWQxcml0bDNoaHM0dg=="/>
				<Person name="Алена Зиневич" photo={Alena} link="https://www.instagram.com/aliona_zinevich/profilecard/?igsh=MTZ0bHRneGMzbzE3MQ%3D%3D"/>
			</div>
		</div>
    )
}
