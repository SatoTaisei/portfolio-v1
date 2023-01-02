import classNames from 'classnames';
import { FC } from 'react';

import styles from './Contact.module.scss';

type Props = {
    className?: string;
};

export const Contact: FC<Props> = ({ className }) => {
    return <div className={classNames(styles.wrapper, className)}>Contact</div>;
};
