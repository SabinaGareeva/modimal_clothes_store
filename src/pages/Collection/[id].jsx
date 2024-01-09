import React, { useState, useEffect } from "react";
import CardDetailsPage from "../../components/cardDetails/CardDetailsPage";

// const Product = ({ productId }) => {
//   const [product, setProduct] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/products/${product.id}`
//         );
//         const data = await response.json();
//         setProductDetails(data);
//       } catch (error) {
//         console.log(`Error fetching data: `, error);
//       }
//     };
//     fetchData();
//   }, [productId]);
//   //   const [products, setProducts] = useState([]);
//   //   // Получение данных с сервера
//   //   useEffect(() => {
//   //     const fetchData = async () => {
//   //       try {
//   //         const response = await fetch(`http://localhost:3000/products/${product.id}`);
//   //         const data = await response.json();
//   //         setProducts(data);
//   //       } catch (error) {
//   //         console.log(`Error fetching data: `, error);
//   //       }
//   //     };
//   //     fetchData();
//   //   }, []);
//   return (
//     <div>
//       <title>Мой товар</title>
//       <CardDetailsPage data={product}></CardDetailsPage>
//     </div>
//   );
// };

// export default Product;
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
      <title>More information</title>
      <CardDetailsPage product={product}></CardDetailsPage>
    </div>
  );
};

export default Product;
