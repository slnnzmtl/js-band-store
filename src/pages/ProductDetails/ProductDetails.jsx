import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductInfo from './components/ProductInfo/ProductInfo';
import CartWidget from '../../components/CartWidget/CartWidget';
import * as actions from './store/productDetailsActions';
import reducer from './store/productDetailsSlice';
import './ProductDetails.scss';
import Loader from '../../components/Loader/Loader';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetails, isLoading } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(actions.getProductDetails(id));

    return () => dispatch(actions.resetProductDetails());
  }, [id, dispatch]);

  if (isLoading) return <Loader />;

  return (
    <div className="product-details">
      <>
        <ProductInfo data={productDetails} />
        <CartWidget data={productDetails} />
      </>
    </div>
  );
};

export { reducer, actions };

export default ProductDetails;
