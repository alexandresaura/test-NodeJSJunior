import styled, { css } from 'styled-components';

interface ContainerProps {
  type: string | undefined;
}

interface ContentProps {
  type: string | undefined;
  error: string | undefined;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  ${props =>
    props.type === 'checkbox' &&
    css`
      width: 0;
    `}
`;

export const Content = styled.div<ContentProps>`
  background: #fff;
  border-radius: 10px;
  padding: 12px;
  border: 1px solid #b7b7b7;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #69737a;
    &::placeholder {
      color: #b7b7b7;
    }
  }

  ${props =>
    props.type === 'checkbox' &&
    css`
      border: 0;
      background-color: transparent;
      width: 0;

      position: relative;

      label {
        cursor: pointer;
        position: absolute;
        height: 40px;
        width: 40px;
        left: 0;
        background: #fff;
        border: 1px solid #b7b7b7;
        border-radius: 5px;
      }

      label:after {
        opacity: 0;
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: transparent;
        top: 12px;
        left: 14px;
        border: 2px solid #b7b7b7;
        border-bottom: none;
        border-left: none;
        border-right: none;

        transform: rotate(-45deg);
      }

      label:before {
        opacity: 0;
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: transparent;
        top: 12px;
        right: 14px;
        border: 2px solid #b7b7b7;
        border-bottom: none;
        border-left: none;
        border-right: none;

        transform: rotate(45deg);
      }

      label:hover::after {
        opacity: 0.5;
      }

      label:hover::before {
        opacity: 0.5;
      }

      input {
        display: none;
      }

      input[type='checkbox']:checked + label:after {
        opacity: 1;
      }

      input[type='checkbox']:checked + label:before {
        opacity: 1;
      }
    `}

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
