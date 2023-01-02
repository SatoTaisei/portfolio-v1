import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | Sato Taisei</title>
                <meta name="description" content="Contact" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Main>
                <div>Contact</div>
            </Main>

            <Footer />
        </>
    );
}
