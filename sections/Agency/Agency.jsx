import {
    StyledTitle,
    StyledDescription,
  } from "../Hero/elements";
  import Image from "next/image";
  import {StyledContainer, 
          StyledImage,  
          StyledContainerCard,
          StyledTitleAgencyContainer, 
          StyledAgency, 
          StyledTextCardContainer,
          StyledCardBottom,
          StyledCardMiddle, 
          StyledCardTop,
          StyledImageCard} from "./elements"
  import {CardTitle, CardText} from "../../collections/Card"

export const Agency = ({image, 
    title, 
    description, 
    briefTitle, 
    briefDescriptionStart,
    briefDescriptionBold, 
    briefDescriptionEnd,
    searchTitle,
    searchDescriptionStart,
    searchDescriptionBold,
    searchDescriptionEnd,
    pitchTitle,
    pitchDescriptionStart,
    pitchDescriptionBold,
    pitchDescriptionEnd,
    imageBrief,
    imageSearch,
    imagePitch,
    ...props}) => {

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
        
        <StyledContainerCard>
        <StyledCardTop>
            <StyledImageCard>
            <Image layout="responsive" src={imageBrief.src} alt={imageBrief.alt} width={imageBrief.width} height={imageBrief.height} />
            </StyledImageCard>
        <StyledTextCardContainer>
            <CardTitle>{briefTitle}</CardTitle>
            <CardText>{briefDescriptionStart} &nbsp; <strong>{briefDescriptionBold}</strong> &nbsp; {briefDescriptionEnd}</CardText>
        </StyledTextCardContainer> 
        </StyledCardTop>

        <StyledCardMiddle>
        <StyledImageCard>
            <Image layout="responsive" src={imageSearch.src} alt={imageSearch.alt} width={imageSearch.width} height={imageSearch.height} />
        </StyledImageCard>
        <StyledTextCardContainer>
            <CardTitle>{searchTitle}</CardTitle>
            <CardText>{searchDescriptionStart} <strong>{searchDescriptionBold}</strong> {searchDescriptionEnd}</CardText>
        </StyledTextCardContainer>
        </StyledCardMiddle>
        
        <StyledCardBottom>
        <StyledImageCard>
            <Image layout="responsive" src={imagePitch.src} alt={imagePitch.alt} width={imagePitch.width} height={imagePitch.height}  />
        </StyledImageCard>
        <StyledTextCardContainer>
            <CardTitle>{pitchTitle}</CardTitle>
            <CardText>{pitchDescriptionStart} <strong>{pitchDescriptionBold}</strong> {pitchDescriptionEnd}</CardText>
        </StyledTextCardContainer>
        </StyledCardBottom>
        </StyledContainerCard>
        </StyledContainer>
        </StyledAgency>
    )
} 