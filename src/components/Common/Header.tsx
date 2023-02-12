import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { menuLinkType } from 'types/siteData.type'
import { Link } from 'gatsby'

type HeaderProps = {
  menuLinks: menuLinkType[]
  siteTitle: string
}

const HeaderWrapper = styled.header`
  // display: grid;
  width: 100%;
  margin: auto;
  // padding-right: 15px;
  font-size: 25px;
  text-align: center;
  line-height: 1.5;
  place-items: center end;
  background-color: rgba(69, 69, 69, 1);

  @media (max-width: 768px) {
    // font-size: 13px;
    padding-right: 20px;
  }
`

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const SiteTitleText = styled.h1`
  margin: 0;
  flex: 1;

  @media (max-width: 768px) {
    flex: 0.6;
  }
`

const Header: FunctionComponent<HeaderProps> = ({ menuLinks, siteTitle }) => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <SiteTitleText>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </SiteTitleText>
        <ul style={{ display: 'flex', flex: 1 }}>
          {menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                padding: `1rem`,
              }}
            >
              <Link style={{ color: `white` }} to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header
