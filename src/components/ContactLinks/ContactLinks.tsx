import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import GmailLogo from 'public/assets/images/logo/gmail.svg';
import TwitterLogo from 'public/assets/images/logo/twitter.svg';
import ZennLogo from 'public/assets/images/logo/zenn.png';

import styles from './ContactLinks.module.scss';

type Props = {
    className?: string;
};

export const ContactLinks: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(styles.box, className)}>
            <Link
                href={'https://twitter.com/vast_sei43rm'}
                className={styles.twitter}
            >
                <Image
                    src={TwitterLogo}
                    alt={'twitter'}
                    width={50}
                    height={50}
                />
            </Link>
            <Link href={'https://zenn.dev/hosoiroji'} className={styles.zenn}>
                <Image src={ZennLogo} alt={'zenn'} width={100} />
            </Link>
            <Link href={'mailto:t.sei43rm@gmail.com'} className={styles.gmail}>
                <Image src={GmailLogo} alt={'gmail'} width={50} />
            </Link>
        </div>
    );
};
