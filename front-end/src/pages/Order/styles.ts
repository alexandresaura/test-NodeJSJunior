import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  max-width: 1440px;
  height: 144px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;

  img {
    height: 50px;
  }
`;

export const Content = styled.div``;

export const SuccessMessage = styled.p`
  text-align: center;
  color: #4caf50;
  font-size: 24px;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: #f44336;
  font-size: 24px;
`;

export const InputDiv = styled.div`
  background-color: #f7f7f7;
  padding-bottom: 32px;
`;

export const InputDivContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;

  > div {
    width: calc(50% - 32px);
  }

  @media (max-width: 1280px) {
    & {
      flex-direction: column;
    }

    > div {
      width: 100%;
    }
  }

  h2 {
    padding-top: 32px;
  }
`;

export const InputGroupRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  > div {
    display: flex;
  }

  div ~ div {
    margin-left: 32px;
  }

  > div > label {
    margin-left: 40px;
    padding-left: 16px;
    font-size: 14px;
    height: 40px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 720px) {
    & {
      flex-direction: column;

      div ~ div {
        margin: 32px 0 0;
      }
    }
  }
`;

export const SubmitDiv = styled.div`
  max-width: 1440px;
  padding: 0 16px;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: flex-end;
    margin: 32px 0;

    button {
      color: #1a237a;
      font-weight: 500;
      font-size: 16px;
      background-color: #1a237a;
      color: #fff;
      padding: 12px 120px;

      border: 1px solid #1a237a;
      border-radius: 5px;
    }

    @media (max-width: 720px) {
      button {
        width: 100%;
        padding: 12px;
      }
    }
  }
`;
