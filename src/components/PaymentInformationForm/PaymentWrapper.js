import styled from 'styled-components';

export const ContainerMain = styled.main`
  h1 {
    font-size: 2.125rem;
    padding-bottom: 35px;
  }
  h2 {
    color: #8e8e8e;
    font-size: 1.25rem;
    padding-bottom: 20px;
  }
  h2 span {
    font-weight: bold;
  }
`;

export const ContainerChoices = styled.div`
  display: flex;
`;

export const ContainerOption = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ContainerAccommodation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FinishButton = styled.button`
  width: 10.125rem;
  height: 2.3125rem;
  background-color: #e0e0e0;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  color: #000000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 13px;
  cursor: pointer;
`;
