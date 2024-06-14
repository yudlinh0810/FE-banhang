import React from 'react';
import TypeProduct from '../../components/TypeProducts/TypeProduct';
import { WrapperButtonMore, WrapperProducts, WrapperTypeProducts } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider_tiki_1.webp';
import slider2 from '../../assets/images/slider_tiki_1.webp';
import slider3 from '../../assets/images/slider_tiki_1.webp';
import CardComponent from '../../components/CardComponent/CardComponent';
import { useQuery } from '@tanstack/react-query';
import * as ProductService from '../../service/ProductService';
export const HomePage = () => {
  const arrProduct = ['áo thun', 'áo sơ mi', 'áo genz'];
  const fetchProductAll = async () => {
    const res = await ProductService.getAllProduct();
    return res;
  };
  const { isPending, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProductAll,
    retry: 3,
    retryDelay: 1500,
  });
  console.log('data:', products);
  return (
    <>
      <div style={{ width: '1270px', margin: '0 auto' }}>
        <WrapperTypeProducts>
          {arrProduct.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProducts>
      </div>
      <div className='body' style={{ width: '100%', backgroundColor: '#efefef' }}>
        <div id='container' style={{ height: '1000px', width: '1270px', margin: '0 auto' }}>
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          {/* <NavbarComponent /> */}
          <WrapperProducts>
            {products?.data?.map((product) => {
              return (
                <CardComponent
                  key={product._id}
                  countInStock={product.countInStock}
                  description={product.description}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  type={product.type}
                  image={product.image}
                  sell={product.sell}
                  discount={product.discount}
                />
              );
            })}
          </WrapperProducts>
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}
          >
            <WrapperButtonMore
              textButton='Xem them'
              type='outline'
              style={{
                border: '1px solid rgb(12, 116, 230)',
                color: 'rgb(12, 116, 230)',
                width: '240px',
                height: '38px',
                borderRadius: '4px',
                marginTop: '12px',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
