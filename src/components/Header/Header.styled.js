import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: blueviolet;
`;

export const HeaderWrapper = styled.header`
  background-color: blueviolet;

  display: flex;
  min-height: 200px;
  align-items: center;
  .img-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    border-right: 1px solid white;
    img {
      width: 200px;
      height: 150px;
      object-fit: contain;
    }
  }
  .text-wrapper {
    background-color: blueviolet;
    flex: 2;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: column;
    .input {
      justify-content: flex-start;
      width: 100%;
      height: 50px;
      font-weight: bold;
      font-size: 50px;
      border: none;
      background-color: blueviolet;
      ::placeholder {
        color: white;
        opacity: 0.4;
      }
    }
    .designation {
      margin-top: 10px;
      font-size: 20px;
      height: 20px;
      font-weight: normal;
    }
  }
`;
