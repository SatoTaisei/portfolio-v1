import classNames from 'classnames';
import { FC } from 'react';

import styles from './Hero.module.scss';

type Props = {
    className?: string;
};

export const Hero: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(styles.wrapper, className)}>Hero Area</div>
    );
};
