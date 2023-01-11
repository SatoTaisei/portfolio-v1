import Link from 'next/link';
import { FC } from 'react';

import styles from './ShowCaseCard.module.scss';

type Props = {
    item: {
        title: string;
        url: string;
    };
    className?: string;
};

export const ShowCaseCard: FC<Props> = ({ item }) => {
    return (
        <Link href={item.url} className={styles.showcase}>
            <div className={styles.header}>{item.title}</div>
            <div className={styles.content}>Content</div>
        </Link>
    );
};
