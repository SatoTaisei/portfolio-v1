import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Timeline() {
    return (
        <>
            <Head>
                <title>Timeline | Sato Taisei</title>
                <meta name="description" content="Timeline" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main>
                <div>Timeline</div>
            </main>

            <Footer />
        </>
    );
}
