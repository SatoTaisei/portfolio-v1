import Link from 'next/link';
import { FC } from 'react';

import styles from './Header.module.scss';

const MENU_LIST = [
    { name: 'showcase', url: '/Showcase' },
    { name: 'timeline', url: '/Timeline' },
    { name: 'contact', url: '/Contact' },
    { name: 'profile', url: '/Profile' },
];

type Props = {
    breadcrumbs?: string;
};

export const Header: FC<Props> = ({ breadcrumbs }) => {
    return (
        <header className={styles.wrapper}>
            <div>
                <Link href={'/'} className={styles.logoWrapper}>
                    <span className={styles.logo}>Sato Taisei</span>
                </Link>
                {breadcrumbs && (
                    <span className={styles.breadcrumbs}>{breadcrumbs}</span>
                )}
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
