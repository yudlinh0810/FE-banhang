import { Card } from 'antd';
import styled from 'styled-components';

export const WrapperCardStyle = styled(Card)`
  width: 180px !important & img {
    height: 180px !important;
    width: 180px !important;
  },
  position: relative;
`;

export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: rgb(56, 56, 62);
`;

export const WrapperReportText = styled.div`
  font-size: 12px;
  color: rgb(128, 127, 136);
  display: flex;
  align-items: center;
  margin: 6px 0 0px;
`;

export const WrapperPriceText = styled.div`
  color: rgb(256, 66, 77);
  font-size: 12px;
  font-weight: 500;
  margin: 8px 0;
`;

export const WrapperDiscountText = styled.div`
  color: rgb(255, 66, 77);
  font-size: 12px;
  font-weight: 500;
`;
export const WrapperStyleTextSell = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;
