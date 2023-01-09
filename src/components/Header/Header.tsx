import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './Header.module.scss';

const MENU_LIST = [
    { name: 'showcase', url: '/Showcase' },
    { name: 'timeline', url: '/Timeline' },
    { name: 'contact', url: '/Contact' },
];

export const Header = () => {
    const [pageIndex, setPageIndex] = useState<number>();

    useEffect(() => {
        setPageIndex(MENU_LIST.findIndex((e) => e.url === location.pathname));
    }, [pageIndex]);

    return (
        <header className={styles.wrapper}>
            <div>
                <Link href={'/'}>
                    <h1 className={styles.logo}>Sato Taisei</h1>
                </Link>
            </div>

            <div className={styles.menu}>
                <ul className={styles.list}>
                    {MENU_LIST.map((item, index) => (
                        <li className={styles.item} key={index}>
                            <Link href={item.url} className={styles.link}>
                                <span data-istracking={pageIndex === index}>
                                    {item.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};
