import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import styles from './Timeline.module.scss';

export default function Timeline() {
    return (
        <>
            <Head>
                <title>Timeline | Sato Taisei</title>
                <meta name="description" content="Timeline" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header breadcrumbs={'Timeline'} />

            <main className={styles.main}>
                <div>Timeline</div>
            </main>

            <Footer />
        </>
    );
}
