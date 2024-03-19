import React from "react";
import Image from "next/image";
interface PageBannerProp {
  src: string;
}

const PageBanner: React.FC<PageBannerProp> = ({ src }) => {
  return (
    <div className="mb-[2.4rem] ">
      <Image
        src={src}
        width={1566}
        height={881}
        alt="banner"
        className="w-full h-[66rem] object-cover"
      ></Image>
    </div>
  );
};
export default PageBanner;
