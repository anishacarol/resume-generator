import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  min-height: 200px;
  align-items: center;
  .img-wrapper {
    flex: 1;

    border-right: 1px solid white;
    img {
      width: 200px;
      height: 150px;
      object-fit: contain;
    }
  }
  .text-wrapper {
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
    }
    .designation {
      margin-top: 10px;
      font-size: 20px;
      height: 20px;
      font-weight: normal;
    }
  }
`;
