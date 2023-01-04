import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Main.module.scss';

type Props = {
    className?: string;
    children?: ReactNode;
};

export const Main: FC<Props> = ({ className, children }) => {
    return (
        <main className={classNames(styles.wrapper, className)}>
            {children}
        </main>
    );
};
