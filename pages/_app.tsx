import { Component } from "react";
import { AppProps } from "next/app";
import { wrapper } from "../store";

const WrapperApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrapperApp);
