import styles from "./styles.module.css";
import Link from "next/link";

import Subscribe from "@/containers/subs/subs/subscribeElements/Subscribe";

const monthes = [
  "ЯНВАРЬ",
  "ФЕВРАЛЬ",
  "МАРТ",
  "АПРЕЛЬ",
  "МАЙ",
  "ИЮНЬ",
  "ИЮЛЬ",
  "АВГУСТ",
  "СЕНТЯБРЬ",
  "ОКТЯБРЬ",
  "НОЯБРЬ",
  "ДЕКАБРЬ",
];

const month = new Date().getUTCMonth();

export default function Subs() {
  return (
    <div id="allSubscribes" className={styles.container}>
      <div className={styles.subscribes}>
        <Subscribe
          color="blue"
          title={`ФИЛЬТР ПОДПИСКА ${monthes[month]}`}
          price="62 BYN"
          old="70 BYN"
          way="filter"
          amount={[
            {
              first: "светлая",
              second: "FILTER",
              gramms: "250 гр.",
            },
            {
              first: "светлая",
              second: "FILTER",
              gramms: "250 гр.",
            },
          ]}
          dots={[false, true, true, true, false, false, false, false]}
        />
        <Subscribe
          color="blue"
          title={`МИКС ПОДПИСКА ${monthes[month]}`}
          price="60 BYN"
          old="68 BYN"
          way="mix"
          amount={[
            {
              first: "средняя",
              second: "ESPRESSO",
              gramms: "250 гр.",
            },
            {
              first: "светлая",
              second: "FILTER",
              gramms: "250 гр.",
            },
          ]}
          dots={[true, false, true, true, false, false, false, false]}
        />
        <Subscribe
          color="blue"
          title={`ЭСПРЕССО  ${monthes[month]}`}
          price="57 BYN"
          old="66 BYN"
          way="espresso"
          amount={[
            {
              first: "средняя",
              second: "ESPRESSO",
              gramms: "250 гр.",
            },
            {
              first: "средняя",
              second: "ESPRESSO",
              gramms: "250 гр.",
            },
          ]}
          dots={[true, true, false, false, false, false, false, false]}
        />
        <Subscribe
          color="green"
          title={`ДРИП ПОДПИСКА  ${monthes[month]}`}
          price="106 BYN"
          old="120 BYN"
          way="drip"
          amount={[
            {
              first: "средняя",
              second: "ESPRESSO",
              gramms: "250 гр.",
            },
            {
              first: "средняя",
              second: "ESPRESSO",
              gramms: "250 гр.",
            },
          ]}
          dots={[true, false, true, true, true, true, false, false]}
        />
      </div>
      <Link
        href="https://docs.google.com/forms/d/1Gx2PhXDeb8MmYds0EboKcs9T1BgHGB9QDdWEZ6sUdvg/edit"
        className={styles.button}
      >
        Подписаться
      </Link>
    </div>
  );
}
