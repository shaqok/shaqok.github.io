import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { menuLinkType } from 'types/siteData.type'
import { Link } from 'gatsby'
import ThemeChanger from './ThemeChanger'

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
  // background-color: rgba(69, 69, 69, 1);
  // background-color: var(--bg);

  @media (max-width: 768px) {
    // font-size: 13px;
    padding-right: 20px;
  }
`

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  width: 768px;
  margin: auto;
  align-items: center;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 13px;
    width: 100%;
  }
`

const SiteTitleText = styled.h1`
  margin: 0;
  flex: 1;
  text-align: justify;

  @media (max-width: 768px) {
    flex: 0.6;
    text-align: unset;
  }
`

const MenuLinksList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  color: rgba(255, 255, 255, 0.88);
`

const HeaderMenuLink = styled(Link)`
  color: rgba(255, 255, 255, 0.88);

  // underline animation
  position: relative;
  color: #ffffff;
  text-decoration: none;
  width: fit-content;

  @media (max-width: 768px) {
    font-size: 14px;
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
        <MenuLinksList>
          {menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                padding: `1rem`,
              }}
            >
              <HeaderMenuLink to={link.link}>{link.name}</HeaderMenuLink>
            </li>
          ))}
          <ThemeChanger />
        </MenuLinksList>
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header
