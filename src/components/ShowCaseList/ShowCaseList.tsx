import classNames from 'classnames';
import { FC } from 'react';

import styles from './ShowCaseList.module.scss';

type Props = {
    className?: string;
};

export const ShowCaseList: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(styles.wrapper, className)}>ShowCase</div>
    );
};
