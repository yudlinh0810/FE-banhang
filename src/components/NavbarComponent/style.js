import styled from 'styled-components';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

export const WrapperLabelText = styled.h4`
  color: rgb(56, 57, 62);
  font-size: 16px;
  font-weight: 500;
`;

export const WrapperTextValue = styled.span`
  color: rgb(56, 57, 62);
  font-size: 14px;
  font-weight: 400;
`;

export const WrapperContent = styled.div`
  display: flex;
  // align-items: center;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff !important;
    background: rgb(12, 92, 182) !important;
  }
`;
