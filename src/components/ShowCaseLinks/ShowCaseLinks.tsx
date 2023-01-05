import classNames from 'classnames';
import { FC } from 'react';

import styles from './ShowCaseLinks.module.scss';

type Props = {
    className?: string;
};

export const ShowCaseLinks: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(styles.wrapper, className)}>ShowCase</div>
    );
};
