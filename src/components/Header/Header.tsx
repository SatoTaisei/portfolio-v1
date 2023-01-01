import Link from 'next/link';

import styles from './Header.module.scss';

const MENU_LIST = [
    { name: 'showcase', url: '#' },
    { name: 'timeline', url: '#' },
    { name: 'contact', url: '#' },
    { name: 'profile', url: '#' },
];

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <span className={styles.logo}>Sato Taisei</span>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    {MENU_LIST.map((item, index) => (
                        <li className={styles.item} key={index}>
                            <Link href={item.url} className={styles.link}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};
