import 'antd/dist/reset.css'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useStore } from '../store'
import { Provider } from 'mobx-react'

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialState)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
