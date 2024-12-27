import styles from './styles.module.css'

export default function Videos(){
	return(
        <div className={styles.container}>

			<iframe className={styles.video1} width="560" height="400" src="https://www.youtube.com/embed/Ap7ru9ZiDC0?si=l3xAV2rC6x0iWdq1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

			<iframe className={styles.video2} width="560" height="400" src="https://www.youtube.com/embed/_W2WqHKtgTw?si=jPMjf8qbQ_8v7rYL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </div>
    )
}