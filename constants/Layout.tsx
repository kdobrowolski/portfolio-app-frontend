import React, { ReactNode } from 'react';
import Head from 'next/head';
import Footer from './Footer';

type Props = {
    children?: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className="layout">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            { children }
            <Footer />
        </div>
    )
}