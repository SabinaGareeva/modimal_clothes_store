import Head from "next/head";
import Navigation from "../Header/Navigation";
import Footer from "../Footer/Footer";
import SliderMain from "../../slider/SliderMain";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
const DefaultLayout= ({ children }:{children:ReactNode}) => {
  return (
    <div>
      <Head>
        <title>My first template</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
    <SliderMain></SliderMain>
      <main className="container">{children}</main>
      <section>
        <div className="relative">
          <Image
            src="/main-sustainability.png"
            width={842}
            height={564}
            alt="Sustainability"
            className="w-full h-[52.6rem] object-cover"
          ></Image>
          <p className="stylish-sustainability">
            Stylish Sustainability In Clothing Promotes Eco-<br></br>Friendly
            Choices For A Greater Future
          </p>
          <Link href="/" className="sustainability-main-subtitle">
            Sustainability
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};
export default DefaultLayout;
