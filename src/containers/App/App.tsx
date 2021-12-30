import '../styles/globals.css'
import type { AppProps } from 'next/app'

import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import history from "./utils/history";
import configureStore from "./configureStore";
import { ConnectedRouter } from "connected-react-router";


const initialState = {};
const store = configureStore(initialState, history);


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <ConnectedRouter history={history}>
    <Component {...pageProps} />
       </ConnectedRouter>
</Provider>
  
  )
}

export default MyApp
