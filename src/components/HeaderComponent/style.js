import { Row } from 'antd';
import styled from 'styled-components';
export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(26, 148, 255);
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  width: 1270px;
  padding: 10px 0;
`;

export const WrapperTextHeader = styled.span`
  top: 4px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap; 10px;
`;

export const WrapperTextHeaderSmall = styled.span`
  font-size: 16px;
  color: #fff;
  white-space: nowrap;
`;
