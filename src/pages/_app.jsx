import "@/styles/globals.css";
import React from "react";
import MainLayout from "../authorizationLayout/MainLayout";
import { OrderProvider } from "../providers/OrderProvider";
import { Montserrat } from "next/font/google";

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
      `}</style>{" "}
      <OrderProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>{" "}
      </OrderProvider>
    </>
  );
};

export default App;
