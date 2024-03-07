import React from "react";
import Link from "next/link";
import MainTitle from "../../components/UI/MainTitle";

const YourCart = () => {
    const orderTableHeaders=['Order summary','Price','Quantity','Total']
  return (
    <main>
      <div className="container">
     <Link>Back</Link>
     <MainTitle tagTitle='h2' fontSize='3.2rem' fontWeight={600} marginBottom='4rem'>Your Cart</MainTitle>
     <Link>Continue shopping</Link>
     <div>

     </div>
      </div>
    
    </main>
  );
};

export default YourCart;