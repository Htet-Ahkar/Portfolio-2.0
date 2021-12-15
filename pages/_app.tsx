//Styles
import "../styles/globals.scss";
//Layout
import { Layout } from "../components";

//Redux

//Reducers
import reducers from "../reducers";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
