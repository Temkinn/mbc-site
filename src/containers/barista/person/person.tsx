import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import Instagram from "@/containers/svgElements/icons/Instagram";
import Link from "next/link";

export default function Person({
  name,
  photo,
  link,
}: {
  name: string;
  photo: StaticImageData;
  link: string;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <Image
          src={photo}
          alt={name}
          fill
          loading="lazy"
          placeholder="blur"
          className={styles.photo}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.nickname}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.bar}>Бариста</p>
        </div>
        <Link href={link} className={styles.link} target="_blank">
          <Instagram size={24} />
        </Link>
      </div>
    </div>
  );
}
