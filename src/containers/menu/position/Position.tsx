import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import Logo from "@/containers/svgElements/Logo/Logo";

interface Props {
  name: string;
  photo: StaticImageData;
  price: string;
  kpfc: string;
  description: string;
  amount: string;
}

export default function Position({
  name,
  photo,
  price,
  kpfc,
  description,
  amount,
}: Props) {
  return (
    <div key={name} className={styles.item}>
      <div className={styles.container}>
        <div className={styles.photo} unselectable="on">
          <Image
            src={photo}
            alt={name}
            loading="lazy"
            placeholder="blur"
            fill
          />
        </div>
        <div className={styles.desc} unselectable="on">
          {!!description || !!kpfc ? (
            <>
              <p>{description}</p>
              <p className={styles.kpfc}>{kpfc}</p>
            </>
          ) : (
            <Logo width={"60%"} isCentred={true} />
          )}
        </div>
      </div>
      <div className={styles.border} />
      <div className={styles.info}>
        <h2>{name}</h2>
        <p>{amount}</p>
        <p>{price} руб.</p>
      </div>
    </div>
  );
}
