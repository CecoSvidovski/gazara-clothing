import styled from 'styled-components';

export const IconButton = styled.span`
  width: 24px;
  height: 24px;
  color: #777f85;
  cursor: pointer;
  transition: color 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  path,
  polyline {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: #0a0a0a;
  }
`;

export const ImageContainer = styled.div`
  height: 120px;
  width: 120px;
  transition: overflow 0.8s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  margin-right: 10px;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const BagItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 150px;
  padding: 15px;
  font-size: 16px;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  &:hover {
    background-color: rgba(117, 126, 132, 0.05);

    ${ImageContainer} {
      img {
        transform: scale(1.25);
      }
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 10%;
  user-select: none;
`;

export const Name = styled.span`
  width: 30%;
`;

export const Quantity = styled(InfoWrapper)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max(12%, 80px);
`;

export const QuantityValue = styled.span`
  display: flex;
  justify-content: center;
  width: 32px;
`;

export const Price = styled(InfoWrapper)`
  position: relative;
`;

export const TotalPrice = styled(InfoWrapper)`
  font-weight: bold;
`;

export const RemoveButton = styled(IconButton)`
  justify-content: flex-end;
`;

export const Multiplied = styled.span`
  position: relative;
  right: 4px;
  bottom: 1px;
`;
