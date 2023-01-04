import classNames from 'classnames';
import { FC } from 'react';

import styles from './ShortTimeline.module.scss';

type Props = {
    className?: string;
};

export const ShortTimeline: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(styles.wrapper, className)}>Timeline</div>
    );
};
