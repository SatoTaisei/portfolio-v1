import { FC } from 'react';

import { ShowCaseCard } from '@/components/ShowCase/ShowCaseCard';

import styles from './ShowCaseList.module.scss';

type Props = {
    className?: string;
};

const SHOWCASE_LIST = [
    { title: 'Todo List', url: 'https://todo-firebase-rouge.vercel.app/' },
    { title: 'Menu List', url: 'https://sunrise-3012.vercel.app/' },
];

export const ShowCaseList: FC<Props> = () => {
    return (
        <div className={styles.container}>
            {SHOWCASE_LIST.map((item, index) => (
                <ShowCaseCard key={index} item={item} />
            ))}
        </div>
    );
};
