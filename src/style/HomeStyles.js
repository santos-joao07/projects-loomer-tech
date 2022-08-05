import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 1.8rem;
  flex: 1;
  flex-wrap: wrap;
  height: 100%;

  @media screen and (max-width: 1274px) {
    flex-direction: column;
   
  }
`;

export const Box = styled.div`
  height: 100%;
  flex: 1;
  `;

export const BoxImage = styled.img`
  width: 100%;
  height: 100%;
`;