import { Col, Row, Image } from 'antd';
import React from 'react';
import imageProduct from '../../assets/images/w1.jpg.webp';
import imageProductSmall from '../../assets/images/imageSmall.webp';
import {
  WrapperAddressProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from './style';
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ProductDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '6px' }}>
      <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
        <Image src={imageProduct} alt='image_product' preview={false} />
        <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt='image_product_small'
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt='image_product_small'
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt='image_product_small'
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt='image_product_small'
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt='image_product_small'
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt='image_product_small'
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: '12px' }}>
        <WrapperStyleNameProduct>
          Áo phong cách thời thượng, dành cho giới trẻ
        </WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
          <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
          <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
          <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
          <WrapperStyleTextSell> | Da ban hon 10 sp</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>$700.0</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến </span>
          <span className='address'>Hòa Tiến, Hòa Vang, Đà Nẵng</span> -{' '}
          <span className='change-address'>Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div
          style={{
            margin: '16px 0 20px',
            padding: '10px 0',
            borderTop: '1px solid #e5e5e5',
            borderBottom: '1px solid #e5e5e5',
          }}
        >
          <div style={{ marginBottom: '10px' }}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: 'none', background: 'transparent' }}>
              <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
            </button>
            <WrapperInputNumber
              min={1}
              max={20}
              defaultValue={1}
              onChange={onChange}
              size='small'
            />
            <button style={{ border: 'none', background: 'transparent' }}>
              <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              height: '48px',
              width: '220px',
              border: 'none',
              borderRadius: '6px',
            }}
            textButton={'Mua'}
            styleTextButton={{ color: '#fff' }}
          />
          <ButtonComponent
            size={40}
            styleButton={{
              background: '#fff',
              height: '48px',
              width: '220px',
              border: '1px solid rgb(13, 92, 182)',
              borderRadius: '6px',
            }}
            textButton={'Mua trả sau'}
            styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
