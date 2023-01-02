import classNames from 'classnames';
import { FC } from 'react';

import styles from './Timeline.module.scss';

type Props = {
    className?: string;
};

export const Timeline: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(styles.wrapper, className)}>Timeline</div>
    );
};
