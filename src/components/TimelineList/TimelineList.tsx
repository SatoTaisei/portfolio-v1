import classNames from 'classnames';
import { FC } from 'react';

import styles from './TimelineList.module.scss';

type Props = {
    className?: string;
};

export const TimelineList: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(styles.wrapper, className)}>Timeline</div>
    );
};
