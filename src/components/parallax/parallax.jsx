import styles from "./styles.module.css"
import Image from "next/image"

export default function Parallax(){
	return(<>
		<div className={styles.parallax}></div>
		<a href="#" className={styles.up}>
			<Image src={require("./arrows.png")} alt="up" fill />
		</a>
		</>
	)
}