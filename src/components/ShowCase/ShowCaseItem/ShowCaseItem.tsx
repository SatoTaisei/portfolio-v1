import Link from 'next/link';
import { FC } from 'react';

import styles from './ShowCaseItem.module.scss';

type Props = {
    className?: string;
};

export const ShowCaseItem: FC<Props> = () => {
    return (
        <Link href="#" className={styles.showcase}>
            Showcase
        </Link>
    );
};
