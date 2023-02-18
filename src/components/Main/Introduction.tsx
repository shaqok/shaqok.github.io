import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from './ProfileImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 768px;
  height: 350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
    height: 250px;
    padding: 0 15px;
  }
`

const PorfileLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: center;

  @media (max-width: 768px) {
    width: 50%;
  }
`

const PorfileRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 55%;
  justify-content: flex-start;
  color: rgba(255, 255, 255, 0.88);
  padding-left: 40px;
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const IconTextWrapper = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  margin-top: 15px;

  // underline animation
  position: relative;
  color: #ffffff;
  text-decoration: none;
  width: fit-content;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.88);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const IconWrapper = styled(FontAwesomeIcon)`
  margin-right: 5px;
`

const Introduction: FunctionComponent<IntroductionProps> = ({
  profileImage,
}) => {
  return (
    <Background>
      <Wrapper>
        <PorfileLeftWrapper>
          <ProfileImage profileImage={profileImage} />

          <div>
            <SubTitle>Junior Developer</SubTitle>
            <Title>Daeyeon Kim</Title>
          </div>
        </PorfileLeftWrapper>

        <PorfileRightWrapper>
          <IconTextWrapper href="mailto:shaqok8@gmail.com">
            <IconWrapper icon={faEnvelope} />
            <div>shaqok8@gmail.com</div>
          </IconTextWrapper>
          <IconTextWrapper href="https://github.com/shaqok" target="_blank">
            <IconWrapper icon={faGithub} />
            <div>shaqok</div>
          </IconTextWrapper>
          <IconTextWrapper
            href="https://www.linkedin.com/in/daniel-daeyeon-kim"
            target="_blank"
          >
            <IconWrapper icon={faLinkedin} />
            <div>Daniel Daeyeon Kim</div>
          </IconTextWrapper>
        </PorfileRightWrapper>
      </Wrapper>
    </Background>
  )
}

export default Introduction
