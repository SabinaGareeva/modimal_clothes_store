import "@/styles/globals.css";
import React from "react";
// import { OrderProvider } from "../providers/OrderProvider";
import { Montserrat } from "next/font/google";
import { AuthProvider } from "../providers/Providers";
import { Provider } from "react-redux";
import store from "../../src/store/ProductStoreRedux"

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

/* Корневой элемент страницы */
const App = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
        <AuthProvider>
          {/* <OrderProvider> */}
          {/* <MainLayout> */}
          <Component {...pageProps} />
          {/* </MainLayout>{" "} */}
          {/* </OrderProvider> */}
        </AuthProvider>
      </Provider>
    </>
  );
};

export default App;
