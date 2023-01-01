import Link from 'next/link';

import styles from './Header.module.scss';

const MENU_LIST = [
    { name: 'showcase', url: '/Showcase' },
    { name: 'timeline', url: '/Timeline' },
    { name: 'contact', url: '/Contact' },
    { name: 'profile', url: '/Profile' },
];

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div>
                <Link href={'/'}>
                    <span className={styles.logo}>Sato Taisei</span>
                </Link>
            </div>

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
