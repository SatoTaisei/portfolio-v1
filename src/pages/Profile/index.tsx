import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

export default function Profile() {
    return (
        <>
            <Head>
                <title>Profile | Sato Taisei</title>
                <meta name="description" content="Profile" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Main>
                <div>Profile</div>
            </Main>

            <Footer />
        </>
    );
}
