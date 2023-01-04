import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

import styles from './Timeline.module.scss';

export default function Timeline() {
    return (
        <>
            <Head>
                <title>Timeline | Sato Taisei</title>
                <meta name="description" content="Timeline" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Main className={styles.main}>
                <div>Timeline</div>
            </Main>

            <Footer />
        </>
    );
}
