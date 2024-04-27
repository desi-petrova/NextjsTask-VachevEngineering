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
  margin: 30px;
`;

export const StyledImageCard = styled(({ ...props }) => <div {...props} />)`
  width: 20%;
  height: 20%;
  margin: 30px;
`;

export const StyledContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center; 
  align-items: center;
  margin-top: 40px;
  background-image: url('img/background.png');

  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

export const StyledCardTop = styled(({...props}) => <div { ...props } />)`
display: flex;
width: 500px;
margin: 10px;
background-color: #F9F9F9;
border-radius: 10px;
`

export const StyledCardMiddle = styled.div`
  display: flex;
  width: 550px;
  margin: 10px;
  background-color: #F4F4F4; 
  border-radius: 10px;
`

export const StyledCardBottom = styled.div`
  display: flex;
  width: 600px; 
  margin: 10px;
  background-color: #EFEFEF; 
  border: 3px solid blue;
  border-radius: 10px;
`

export const StyledContainerCard = styled(({ ...props }) => <div {...props} />)`
display: flex;
flex-direction: column;
`;

export const StyledTextCardContainer = styled(({ ...props }) => <div {...props} />)`
display: flex;
flex-direction: column;
overflow-wrap: break-word;
width: 65%;
`