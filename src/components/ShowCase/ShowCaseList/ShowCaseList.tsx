import { FC } from 'react';

import styles from './ShowCaseList.module.scss';

type Props = {
    className?: string;
};

export const ShowCaseList: FC<Props> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>Showcase</div>
        </div>
    );
};
