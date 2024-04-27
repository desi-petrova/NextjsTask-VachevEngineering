import styled from "styled-components";

export const StyledAgency = styled(({ ...props }) => <div {...props} />)`
margin: 50px;
`
export const StyledTitleAgencyContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction: column;  
`;

export const StyledImage = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  margin: 30px;
`;

export const StyledContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center; 
  align-items: center;
  border: 1px solid black;
  margin-top: 40px;
  background-image: url('img/background.png');

  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;