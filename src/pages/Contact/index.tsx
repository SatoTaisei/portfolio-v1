import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import styles from './Contact.module.scss';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | Sato Taisei</title>
                <meta name="description" content="Contact" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header breadcrumbs={'Contact'} />

            <main className={styles.main}>
                <div>Contact</div>
            </main>

            <Footer />
        </>
    );
}
