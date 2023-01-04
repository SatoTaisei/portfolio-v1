import classNames from 'classnames';
import { FC } from 'react';

import styles from './Heading.module.scss';

type Props = {
    text: string;
    className?: string;
};

export const Heading: FC<Props> = ({ text, className }) => {
    return <h1 className={classNames(styles.heading, className)}>{text}</h1>;
};
