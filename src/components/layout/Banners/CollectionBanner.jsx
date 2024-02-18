import React from "react";
import Image from "next/image";
const CollectionBanner = () => {

    return(<div className="mb-[2.4rem] ">
    <Image
      src="/collection-banner.png"
      width={1566}
      height={881}
      alt="banner"
      className="w-full h-[66rem] object-cover"
    ></Image>
  </div>)
}
export default CollectionBanner;