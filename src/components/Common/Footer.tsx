import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      <div>
        Post Thumbnail Photos by{' '}
        <a href="https://unsplash.com/@jessbaileydesigns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Jess Bailey{' '}
        </a>
        and{' '}
        <a href="https://unsplash.com/@ilyapavlov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Ilya Pavlov{' '}
        </a>
        on <a href="https://unsplash.com/">Unsplash</a>
      </div>
      <br />© 2023 Developer Daeyeon Kim, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer
