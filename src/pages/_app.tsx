import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../app/store';

// import '../styles/global.css'

function MyApp({
    Component, pageProps,
}: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp