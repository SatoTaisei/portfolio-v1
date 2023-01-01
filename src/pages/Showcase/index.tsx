import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import styles from './Showcase.module.scss';

export default function Showcase() {
    return (
        <>
            <Head>
                <title>Showcase | Sato Taisei</title>
                <meta name="description" content="Showcase" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={styles.main}>
                <div>Showcase</div>
            </main>

            <Footer />
        </>
    );
}
