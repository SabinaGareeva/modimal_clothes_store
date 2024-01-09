import React from 'react';
import Image from 'next/image';


const CardDetailsPage = ({product}) => {
  if (!product) {
    return <h3>No product data available</h3>;
  }

  const {name, description,price,imgPath,category,size,fabric} = product;




  return (
    <div className='container'>
      
      <Image
          alt={name}
          src={imgPath}
          width={392}
          height={438}
          className="card-image"
        ></Image>
          <h2>Name products</h2>
      <h2>{name}</h2>
      <p>Description</p>
      <p>{description}</p>
      <p>Price</p>
      <p>{price}</p>
      <p>Category</p>
      <p>{category}</p>
      <p>Fabric</p>
      <p>{category}</p>
      {/* Отображение детальной информации о карточке */}
    </div>
  );
};

export default CardDetailsPage;