import { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'src/apollo';
import { ThemeProvider } from 'styled-components';

import '../styles/index.css';
import { GlobalStyle, theme } from 'src/theme/Global';

export default function MyApp({ Component, pageProps }: AppProps) {
    const client = useApollo();

    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Home Sweet Home</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    );
}
