import React from "react";
import CardDetailsPage from "../../components/cardDetailsPage/CardDetailsPage";
import MainLayout from "../../components/layout/MainLayout/MainLayout";

export const getServerSideProps = async (context) => {
  console.log(context)
  const {id}=context.params
  const response = await fetch(`http://localhost:3000/products/${id}`);
      const data = await response.json();
      return {
        props:{product: data}
      }

}


const Product = ({product}) => {

  return (
    <div>
    <MainLayout>
      <CardDetailsPage product={product}></CardDetailsPage>
      </MainLayout>
    </div>
  );
};

export default Product;
