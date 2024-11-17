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
                width={170}
                height={170}/>

            <Image
                src={croissant}
                alt="Croissant"
                className={styles.croissant}
                width={180}
                height={180}/>

            <div className={styles.text}>

                <h1 className={styles.title}>О нашей кофейне</h1>

                <p className={styles.paragraph}>Проект "MBC CULTURE" представляет собой современное заведение, где каждый гость может ощутить тепло и комфорт, находясь в компании друзей, коллег или единомышленников. Мы стремимся создать атмосферу, в которой люди смогут приятно проводить время и наслаждаться высококачественными напитками.</p>

                <p className={styles.paragraph}>Основная идея "MBC CULTURE" — это формирование пространства для общения и вдохновения. Мы предлагаем не только разнообразные напитки, но и свежую выпечку, десерты и легкие закуски, которые идеально дополняют моменты общения или отдыха.</p>

                <p className={styles.paragraph}>"MBC CULTURE" — это не просто место, где можно выпить кофе, а уютный уголок, где люди могут наслаждаться общением, творческими моментами и новыми впечатлениями. Мы уверены, что высококлассный сервис, качественный продукт и продуманная концепция помогут нам стать важной частью жизни наших гостей.</p>

            </div>

        </div>
    )
}