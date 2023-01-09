import classNames from 'classnames';
import { FC } from 'react';

import styles from './Heading.module.scss';

type Props = {
    title: string;
    className?: string;
};

export const Heading: FC<Props> = ({ title, className }) => {
    return <h2 className={classNames(styles.heading, className)}>{title}</h2>;
};
