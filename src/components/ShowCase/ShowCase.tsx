import classNames from 'classnames';
import { FC } from 'react';

import styles from './ShowCase.module.scss';

type Props = {
    className?: string;
};

export const ShowCase: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(styles.wrapper, className)}>ShowCase</div>
    );
};
