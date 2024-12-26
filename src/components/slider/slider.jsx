import styles from "./styles.module.css"

export default function Slider(){

	function right(){
		const slider = document.getElementById("slider")
		const position = slider.offsetLeft
		console.log(position);
		slider.style.right = position - 40 + "px"
	}

	return(
		<div className={styles.container}>
			{/* <div className={styles.right} onClick={right} />
			<div className={styles.left} />
			<div className={styles.slider} id="slider">	
				<div id={styles.element} className={styles.element1}></div>
				<div id={styles.element} className={styles.element2}></div>
				<div id={styles.element} className={styles.element3}></div>
				<div id={styles.element} className={styles.element4}></div>
				<div id={styles.element} className={styles.element5}></div>
			</div> */}
		</div>
	)
}