import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

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

            <Main className={styles.main}>
                <div>Showcase</div>
            </Main>

            <Footer />
        </>
    );
}
