import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
//Styles
import "../styles/globals.scss";

//Layout
import { Layout } from "../components";

//Next Auth
import { SessionProvider } from "next-auth/react";

//Redux
//Reducers
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function MyApp({ session, Component, pageProps }) {
  //For Header Title
  const [pathName, setPathName] = useState("You Are Awesome");
  const router = useRouter();

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        return setPathName("About");
      case "/blogs":
        return setPathName("Blogs");
      case "/projects":
        return setPathName("Projects");
      case "/admin":
        return setPathName("Admin");

      default:
        return setPathName("You Are Awesome");
    }
  }, [router.pathname]);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Head>
            <title>Htet Ahkar | {pathName} </title>
            <link rel="icon" href="/icon.jpeg" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
