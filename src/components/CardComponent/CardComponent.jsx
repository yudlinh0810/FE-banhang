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
const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: '180px', height: '180px' }}
      style={{ width: 240 }}
      bodyStyle={{ padding: '12px' }}
      cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}
    >
      <StyleNameProduct>IP</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: '4px' }}>
          <span>4.77 </span>
          <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
        </span>
        <WrapperStyleTextSell> | Da ban hon 10 sp</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{ marginRight: '8px' }}>7usd</span>
        <WrapperDiscountText style={{ display: 'inline' }}> -6% </WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
