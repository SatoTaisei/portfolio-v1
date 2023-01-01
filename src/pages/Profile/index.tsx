import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Profile() {
    return (
        <>
            <Head>
                <title>Profile | Sato Taisei</title>
                <meta name="description" content="Profile" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main>
                <div>Profile</div>
            </main>

            <Footer />
        </>
    );
}
