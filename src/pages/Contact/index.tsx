import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | Sato Taisei</title>
                <meta name="description" content="Contact" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div>Contact</div>

            <Footer />
        </>
    );
}
