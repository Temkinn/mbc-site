"use client"
import styles from "./styles.module.css"
import Image from "next/image"
import { useState } from "react"

import photo1 from './photos/1.jpg'
import photo2 from './photos/2.jpg'
import photo3 from './photos/3.jpg'
import photo4 from './photos/4.jpg'
import photo5 from './photos/5.jpg'
import photo6 from './photos/6.jpg'

export default function Slider(){


	const slides = [
		{
			name: '1',
			photo: photo1,
		},
		{
			name: '2',
			photo: photo2,
		},
		{
			name: '3',
			photo: photo3,
		},
		{
			name: '4',
			photo: photo4,
		},
		{
			name: '5',
			photo: photo5,
		},
		{
			name: '6',
			photo: photo6,
		},
	]

	const [curr, setCurr] = useState(0)

	const prev = () => {
		setCurr(curr => curr === 0 ? slides.length - 1 : curr - 1)
	}

	const next = () => {
		setCurr(curr => curr === slides.length - 1 ? 0 : curr + 1)
	}

	return(
		<div className={styles.container}>
			<div className={styles.right} onClick={next} id={styles.button} />
			<div className={styles.left} onClick={prev} id={styles.button} />
			<div className={styles.sliderContainer}>
				<div className={styles.slider} id="slider" style={{
					transform: `translateX(-${curr * 100}%)`,
					transition: 'transform .5s ease-in-out',
				}}>	
					{slides.map(
						(image) => {
							return (
								<div id={styles.element} key={image.name} className={styles.element}>
									<Image src={image.photo} alt="kawda" className={styles.photo} fill={true} />
								</div>
							)
						}
					)}
				</div>
			</div>
		</div>
	)
}