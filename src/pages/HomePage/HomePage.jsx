import React from 'react';
import TypeProduct from '../../components/TypeProducts/TypeProduct';
import { WrapperButtonMore, WrapperProducts, WrapperTypeProducts } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider_tiki_1.webp';
import slider2 from '../../assets/images/slider_tiki_1.webp';
import slider3 from '../../assets/images/slider_tiki_1.webp';
import CardComponent from '../../components/CardComponent/CardComponent';
export const HomePage = () => {
  const arrProduct = ['áo thun', 'áo sơ mi', 'áo genz'];
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
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
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
