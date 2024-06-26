import { Hero, Agency } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencyProps = {
  image: { src: "/img/video.png", alt: "", width: 1000, height: 1550 },
  title: "Managed agency selection",
  description: 'Stengthen your onboarding process',
  briefTitle: 'Brief',
  briefDescriptionStart: 'Complete ',
  briefDescriptionBold: ' brief writing or siple guidance ',
  briefDescriptionEnd: 'on what to include, we have got you covered.',
  searchTitle: 'Search',
  searchDescriptionStart: 'In-depth agency search covering; ',
  searchDescriptionBold: 'criteria matching ',
  searchDescriptionEnd: ', door knocking and due-dilligence vetting.',
  pitchTitle: 'Pitch',
  pitchDescriptionStart: 'Comprehensive ',
  pitchDescriptionBold: 'pitch management, ',
  pitchDescriptionEnd: 'including comms, diary management and pitch hosting.',
  imageBrief: { src: "/img/Brief.jpg", alt: "", width: 10, height: 10 },
  imageSearch: { src: "/img/Search.jpg", alt: "", width: 10, height: 10 },
  imagePitch: { src: "/img/pitch.jpg", alt: "", width: 10, height: 10 }
}

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        {/** Other sections */}
        <Agency {...agencyProps} />
      </div>
    </>
  );
}
