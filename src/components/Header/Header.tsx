import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <span className={styles.logo}>Sato Taisei</span>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}>AAA</li>
                    <li className={styles.item}>BBB</li>
                    <li className={styles.item}>CCC</li>
                    <li className={styles.item}>DDD</li>
                </ul>
            </div>
        </header>
    );
};
