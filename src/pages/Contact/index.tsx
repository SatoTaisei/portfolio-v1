import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { Main } from '@/components/Main';

import GmailLogo from '../../../public/assets/images/gmail_logo.svg';
import TwitterLogo from '../../../public/assets/images/twitter_logo.svg';

import styles from './Contact.module.scss';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | Sato Taisei</title>
                <meta name="description" content="Contact" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Main className={styles.main}>
                <Heading text="Contact" className={styles.heading} />
                <div className={styles.box}>
                    <Link
                        href={'mailto:t.sei43rm@gmail.com'}
                        className={styles.gmail}
                    >
                        <Image
                            src={GmailLogo}
                            alt={'gmail'}
                            width={50}
                            height={50}
                        />
                        <span className={styles.gmail_address}>
                            t.sei43rm@gmail.com
                        </span>
                    </Link>
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
                        <div className={styles.twitter_id}>@vast_sei43rm</div>
                    </Link>
                </div>
            </Main>

            <Footer />
        </>
    );
}
