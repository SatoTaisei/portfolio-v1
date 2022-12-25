import Link from 'next/link';

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <span className={styles.logo}>Sato Taisei</span>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href={'#'} className={styles.link}>
                            showcase
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={'#'} className={styles.link}>
                            timeline
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={'#'} className={styles.link}>
                            contact
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={'#'} className={styles.link}>
                            profile
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};
