import styled from 'styled-components';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
export const WrapperTypeProducts = styled.div`
  display: flex !important;
  align-item: center !important;
  gap: 24px !important;
  justify-content: flex-start !important;
  height: 44px;
`;

export const WrapperProducts = styled.div`
  display: flex;
  // justify-content: center;
  margin-top: 20px;
  gap: 14px;
  flex-wrap: wrap;
`;
export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff !important;
    background: rgb(13, 92, 182);
  }
`;
