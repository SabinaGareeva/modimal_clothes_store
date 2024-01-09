import "@/styles/globals.css";
import React from "react";
import MainLayout from "../Layouts/MainLayout";
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '700','900'],
  style: ['normal'],
  subsets: ['latin'],
})

/* Корневой элемент страницы */
const App = ({ Component, pageProps }) => {
  return ( 
    <>
    <style jsx global>{`
      html {
        font-family: ${montserrat.style.fontFamily};
      }
    `}</style>
    <MainLayout >
      <Component {...pageProps} />
    </MainLayout>
    </>
  );
};

export default App;

