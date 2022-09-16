import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 50px;
  padding: 0 15px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #f3f3f3;
  background-color: #0a0a0a;
  text-transform: uppercase;
  border: 1px solid #0a0a0a;
  cursor: pointer;

  &.small-btn {
    font-size: 14px;
    height: 42px;
  }

  &.google-btn {
    width: max-content;
    background-color: #2d75ea;
    color: #f3f3f3;
    border: 1px solid #2d75ea;

    .google-icon {
      display: flex;
      margin-right: 5px;
    }

    &:hover {
      background-color: #f3f3f3;
      color: #4285f4;
      border: 1px solid #2d75ea;
    }
  }

  &.inverted-btn {
    background-color: #f3f3f3;
    color: #0a0a0a;
    border: 1px solid #0a0a0a;

    &:hover {
      background-color: #0a0a0a;
      color: #f3f3f3;
      border: 1px solid #f3f3f3;
    }
  }

  &.only-text {
    background-color: transparent;
    color: #0a0a0a;
    border: none;
    
    &:hover {
      position: relative;
    }
  }

  &:hover {
    background-color: #f3f3f3;
    color: #0a0a0a;
    border: 1px solid #0a0a0a;
  }
`;