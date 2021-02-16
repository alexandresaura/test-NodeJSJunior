import styled, { css } from 'styled-components';

interface ContentProps {
  error: string | undefined;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const Content = styled.div<ContentProps>`
  background: #fff;
  border-radius: 10px;
  padding: 12px;
  border: 1px solid #b7b7b7;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  select {
    cursor: pointer;
    appearance: none;
    border: 0;
    flex: 1;
    background: transparent;
    color: #69737a;
    font-size: 12px;
  }

  select:invalid {
    color: #b7b7b7;
  }

  &:after {
    content: '';
    cursor: pointer;
    position: absolute;
    width: 10px;
    height: 10px;
    background: transparent;
    top: 10px;
    right: 20px;
    border: 2px solid #1a237a;
    border-top: none;
    border-right: none;

    transform: rotate(-45deg);
  }

  ${props =>
    props.error &&
    css`
      border-color: #f44336;
    `}
`;

export const Error = styled.p`
  position: absolute;
  top: -13px;
  left: 13px;
  color: #f44336;
`;
