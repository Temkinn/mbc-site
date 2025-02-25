import Image from "next/image"
import styles from './styles.module.scss'

export default function Duo({ front, back, alt}) {
  return (
    <div className={styles.container}>
      <div className={styles.front}>
        <Image src={front} alt={alt} draggable="false" fill />
      </div>
      <div className={styles.back}>
        <Image src={back} alt={alt} draggable="false" fill />
      </div>
    </div>
  );
}
