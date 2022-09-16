import styled from 'styled-components';

import { ReactComponent as BagSvg } from '../../assets/shopping-bag.svg';

export const BagNavIcon = styled(BagSvg)`
  width: 32px;
  height: 32px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 14px;
  letter-spacing: -1px;
  bottom: 4px;
`;

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

export const Items = styled.div`
  max-height: 330px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5px 2.5px;
  font-size: 16px;
  font-weight: bold;
`;

export const TotalText = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TotalPrice = styled.span`
  font-size: 18px;
`;

export const FeeMessage = styled.span`
  font-size: 14px;
  padding: 0 5px;
  margin-bottom: 15px;
  color: #777f85;
`;
