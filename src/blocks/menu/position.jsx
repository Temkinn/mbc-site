import styles from "./position.module.scss";
import Image from "next/image";
import Logo from "../svgElements/Logo/Logo";

export default function Position({
  name,
  photo,
  price,
  kpfc,
  description,
  amount,
}) {
  return (
    <div key={name} className={styles.item}>
      <div className={styles.container}>
        <div className={styles.photo} unselectable="true">
          <Image
            src={photo}
            alt={name}
            loading="lazy"
            placeholder="blur"
            fill
          />
        </div>
        <div className={styles.desc} unselectable="true">
          {(!!description || !!kpfc) ? (
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
