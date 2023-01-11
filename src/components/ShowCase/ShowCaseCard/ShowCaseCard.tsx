import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import GitHubLogo from 'public/assets/images/logo/github.svg';

import styles from './ShowCaseCard.module.scss';

type Props = {
    item: {
        title: string;
        url: string;
        githubUrl: string;
    };
    className?: string;
};

export const ShowCaseCard: FC<Props> = ({ item }) => {
    return (
        <div className={styles.showcase}>
            <div className={styles.header}>
                <span className={styles.title}>{item.title}</span>
                <Link href={item.githubUrl} className={styles.github}>
                    <Image src={GitHubLogo} alt={'github'} width={30} />
                </Link>
            </div>
            <Link href={item.url} className={styles.content}>
                <div>Content</div>
            </Link>
        </div>
    );
};
