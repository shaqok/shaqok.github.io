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
  background: linear-gradient(
    180deg,
    rgba(69, 69, 69, 1) 85%,
    rgba(128, 128, 128, 1) 90%,
    rgba(179, 179, 179, 1) 93%,
    rgba(255, 255, 255, 1) 100%
  );
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
    width: 100%;
    height: 250px;
    padding: 0 20px;
  }
`

const PorfileLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 768px) {
    width: 60%;
  }
`

const PorfileRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 55%;
  // justify-content: space-evenly;
  justify-content: flex-start;
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
    font-size: 25px;
  }
`

const IconTextWrapper = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  &:hover {
    color: rgba(143, 254, 191, 1);
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
