import React from 'react';
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
  WrapperStyleTextSell,
} from './style';
import { StarFilled } from '@ant-design/icons';
const CardComponent = (props) => {
  const { _id, countInStock, description, name, price, rating, type, image, discount, sell } =
    props;
  return (
    <WrapperCardStyle
      hoverable
      styles={{ header: { width: '180px', height: '180px' } }}
      style={{ width: '240px', padding: '12px' }}
      // styles={{body:{ padding: '12px' }}}
      cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}
    >
      <StyleNameProduct>{name}</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: '4px' }}>
          <span>{rating}</span>
          <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
        </span>
        <WrapperStyleTextSell> | Đã bán {sell || 77} sản phẩm </WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{ marginRight: '8px' }}>{price}$</span>
        <WrapperDiscountText style={{ display: 'inline' }}> {discount || 5}% </WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
