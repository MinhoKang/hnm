import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product-img-container" onClick={showDetail}>
      <img src={item?.img} alt="" className="product-img" />
      <div>{item?.choice ? 'Conscious Choice' : ''}</div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item?.new ? '신제품' : ''}</div>
    </div>
  );
};

export default ProductCard;
