import Head from 'next/head';

import { ContactLinks } from '@/components/ContactLinks';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { Main } from '@/components/Main';

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
                <Heading title="Contact" className={styles.heading} />
                <ContactLinks />
            </Main>

            <Footer />
        </>
    );
}
