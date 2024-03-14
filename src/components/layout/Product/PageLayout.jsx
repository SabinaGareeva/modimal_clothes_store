import React from "react";
import Navigation from "../Header/Navigation";
import Footer from "../Footer/Footer";
import PageBanner from "../Banners/PageBanner";
const PageLayout = ({ children, srcForBanner }) => {
  return (
    <div>
      <Navigation />
      {srcForBanner && <PageBanner src={srcForBanner} />}
      <main className="container">{children}</main>
      {/* <section>
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
      </section> */}
      <Footer></Footer>
    </div>
  );
};
export default PageLayout;
