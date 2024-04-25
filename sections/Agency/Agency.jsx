import {
    StyledTextContainer,
    StyledTitle,
    StyledDescription,
  } from "../Hero/elements";

export const Agency = ({image, title, description, ...props}) => {

    return (
        <>
        <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        </StyledTextContainer>
        </>
    )
} 