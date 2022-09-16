import styled from 'styled-components';

import { ReactComponent as HeartIconSvg } from './assets/heart.svg';

export const RemoveButton = styled.span`
  display: inline-block;
  position: absolute;
  right: 5px;
  top: 5px;
  color: rgba(119, 127, 133, 0);;
  cursor: pointer;
  transition: color 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  position: relative;
  margin-bottom: 15px;
  transition: background-color 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  &:hover {
    background-color: rgba(119, 127, 133, 0.05);;

    ${RemoveButton} {
      color: #777f85;
      transition: color 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

      &:hover {
        color: #0a0a0a;
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100px;
  height: 100px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

export const ItemDetails = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 15px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 190px;
`;

export const Name = styled.span`
  font-size: 16px;
  padding: 2px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.span`
  font-size: 14px;
  padding: 2px 0.5px;
`;

export const HeartIcon = styled(HeartIconSvg)`
  margin-right: 4px;
  position: relative;
  color: currentColor;
  width: 14px;
  height: 14px;
  top: 0.5px;

  path {
    fill: rgba(239, 0, 12, 0);
    transition: fill 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const FavoriteButton = styled.span`
  width: fit-content;
  padding: 3px 1px 0;
  display: flex;
  align-items: center;
  color: #777f85;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  &:hover {
    color: #0a0a0a;
  }

  &.active {
    color: #ef000c;

    ${HeartIcon} {
      color: #ef000c;

      path {
        fill: #ef000c;
      }
    }
  }
`;

export const ItemTotalContainer = styled.div`
  margin: 0 0 0 5px;
`;

export const ItemTotalPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;
