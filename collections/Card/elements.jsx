// Styled elements for the Card go here

import styled from "styled-components";


export const StyledTextCard = styled(({...props}) => <p { ...props } />)`

  font-family: Poppins;
  font-size: 1rem;
  font-weight: 400; 
  color: black;
  margin 0;
  

  strong {
    font-weight: 700; 
  }
`

export const StyleTitle = styled(({...props}) => <p { ...props } />)`
font-family: Poppins;
font-size: 1.3rem;
font-weight: 600; 
margin: 0;
margin-top: 30px
`
