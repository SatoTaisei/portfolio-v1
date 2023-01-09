import { FC } from 'react';

import { ShowCaseItem } from '@/components/ShowCase/ShowCaseItem';

import styles from './ShowCaseList.module.scss';

type Props = {
    className?: string;
};

export const ShowCaseList: FC<Props> = () => {
    return (
        <div className={styles.container}>
            <ShowCaseItem />
        </div>
    );
};
