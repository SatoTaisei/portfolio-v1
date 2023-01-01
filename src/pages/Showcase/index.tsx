import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Showcase() {
    return (
        <>
            <Head>
                <title>Showcase | Sato Taisei</title>
                <meta name="description" content="Showcase" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main>
                <div>Showcase</div>
            </main>

            <Footer />
        </>
    );
}
