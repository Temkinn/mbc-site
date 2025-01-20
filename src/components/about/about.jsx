import styles from './styles.module.css'
import Image from 'next/image'
import bread from "./../../../public/bread.png"
import croissant from "./../../../public/croissant.png"

export default function About(){
	return (
        <div className={styles.container}>
            <Image
                src={bread}
                alt="Bread"
                className={styles.bread}
                loading='eager'
                width={170}
                height={170}/>

            <Image
                src={croissant}
                alt="Croissant"
                className={styles.croissant}
                loading='eager'
                width={160}
                height={160}/>

            <div className={styles.text}>

                <h1 className={styles.title}>О нашей кофейне</h1>

                <p className={styles.paragraph}>Проект "MBC CULTURE" представляет собой современное заведение, где каждый гость может ощутить тепло и комфорт, находясь в компании друзей, коллег или единомышленников. Мы стремимся создать атмосферу, в которой люди смогут приятно проводить время и наслаждаться высококачественными напитками.</p>

                <p className={styles.paragraph}>Основная идея "MBC CULTURE" — это формирование пространства для общения и вдохновения. Мы уверены, что наш продукт и трепетное отношение к каждому процессу помогут нам стать неотъемлемой частью вашей жизни.</p>

                <p className={styles.paragraph}>Мы совмещаем в себе уникальный продукт, хороший сервис и заботу о наших гостях. А также стремимся создать атмосферу, в которой люди смогут расслабиться и насладиться высоким уровнем комфорта для себя и своих близких.</p>

            </div>

        </div>
    )
}