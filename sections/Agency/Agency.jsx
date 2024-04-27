import {
    StyledTitle,
    StyledDescription,
  } from "../Hero/elements";
import Image from "next/image";
import {StyledContainer, StyledImage, 
    StyledTitleAgencyContainer, StyledAgency, } from "./elements"

export const Agency = ({image, title, description, ...props}) => {

    return (
        <StyledAgency>
        <StyledTitleAgencyContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        </StyledTitleAgencyContainer>
        <StyledContainer>
        <StyledImage>
        <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </StyledImage>
        
        </StyledContainer>

        </StyledAgency>
    )
} 