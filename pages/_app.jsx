import "@/styles/globals.css";
import "@/styles/LandingPage.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate Loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
