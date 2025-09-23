import styles from './styles.module.scss'
import Regular from './regular/Regular';
import Friend from './friend/Friend';

export default function Loyalty() {
  return (
    <div id="loyalty" className={styles.container}>
        <Friend />
        <Regular />
    </div>
  );
}

