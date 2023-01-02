import { FC, ReactNode } from 'react';

import styles from './Main.module.scss';

type Props = {
    children: ReactNode;
};

export const Main: FC<Props> = ({ children }) => {
    return <main className={styles.wrapper}>{children}</main>;
};
