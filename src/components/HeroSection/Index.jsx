import React from "react";
// import {
//   HeroContainer,
//   HeroBg,
//   HeroLeftContainer,
//   HeroRightContainer,
//   HeroInnerContainer,
// } from "./HeroStyles";
import { Span, SubTitle, TextLoop, Title, HeroContainer,
  HeroBg,
  HeroLeftContainer,
  HeroRightContainer,
  HeroInnerContainer, } from "./HeroStyles";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImage from '../../images/HeroImage.avif'
import HeroBgAnimation from '../HeroBgAnimation/Index'

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          {/* <HeroBgAnimation/> */}
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
            I am a
              <Span>
                <Typewriter
                  options=
                  {{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                  />
              </Span>
            </TextLoop>

            <SubTitle>{Bio.description}</SubTitle>
          </HeroLeftContainer>
          <HeroRightContainer>
            <img style={{borderRadius:'10px', boxShadow:' 5px 3px rgb(128,0,128)'}} width='450px' src={HeroImage} alt="hero"/>
            {/* <Img  src={HeroImage} alt="hero"/> */}

          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
      <br />
      <br />

    </div>
    
  );
};

export default Hero;
