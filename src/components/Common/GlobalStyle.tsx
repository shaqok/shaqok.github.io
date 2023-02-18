import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    // font-family: 'Nanum Myeongjo', serif;
    -webkit-font-smoothing: antialiased;

    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  body.light {
    --bg: white;
    --bg: rgba(69, 69, 69, 1);
    --bg1: rgba(128, 128, 128, 1);
    --bg2: rgba(179, 179, 179, 1);
    --bg3: rgba(255, 255, 255, 1);

    --text-color: #222;
    --shadow-color: rgba(0, 0, 0, 0.3);

    // --textNormal: #222;
    --textTitle: #222;
    --textLink: blue;
    --hr: hsla(0, 0%, 0%, 0.2);

    background: linear-gradient(
      to bottom,
      #454545 0%,
      rgba(69, 69, 69, 1) 91%,
      rgba(97, 97, 97, 1) 93%,
      rgba(128, 128, 128, 1) 94%,
      rgba(179, 179, 179, 1) 96%,
      rgba(212, 212, 212, 1) 98%,
      rgba(255, 255, 255, 1) 100%
    );
    background-size: 100% 380px, 100%;
    background-repeat: no-repeat;
    background-position: top;

    @media (max-width: 768px) {
      background-size: 100% 300px, 100%;
    }

    // --primary-color: #381696;
    // --primary-text-color: #fff;
    // --featured-bg: #493b8a;
    // --featured-text: #fff;
    // --secondary-color: #10072b;
    // --background: #fff;
    // --site-header: var(--background);
    // --card-bg: #fff;
    // --card-bdr: #eee;
    // --card-shadow: #d5d5d5;
    // --btn-bg: var(--background);
    // --btn-bdr: #d3d6e7;
    // --btn-text-color: #868892;
    // --btn-hover-bg: var(--btn-bdr);
    // --btn-hover-text-color: #00062b;
    // --contact-bg: #f7f8fe;
    // --contact-bdr: #d3d6e7;
    // --input-bg: var(--background);

    transition: all 1s ease-in-out;
  }

  body.dark {
    --bg: rgba(46, 46, 46, 1);
    --bg1: rgba(52, 52, 52, 1);
    --bg2: rgba(60, 60, 60, 1);
    --bg3: rgba(69, 69, 69, 1);

    --textNormal: rgba(255, 255, 255, 0.88);
    --textTitle: white;
    --textLink: yellow;
    --hr: hsla(0, 0%, 100%, 0.2);

    background: linear-gradient(
      to bottom,
      rgba(69, 69, 69, 1) 0%,
      rgba(69, 69, 69, 1) 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 100%, 100%;
    background-position: top;
    background-color: var(--bg3);

    // --primary-color: #9984d5;
    // --primary-text-color: #fff;
    // --featured-bg: #66578d;
    // --featured-text: #fff;
    // --secondary-color: #66578d;
    // --background: #0a041a;

    --text-color: rgba(255, 255, 255, 0.88);
    --shadow-color: rgba(255, 255, 255, 0.3);

    // --text-secondary-color: rgba(255, 255, 255, 0.66);
    // --site-header: var(--background);
    // --card-bg: #181326;
    // --card-bdr: #181326;
    // --card-shadow: #020204;
    // --btn-bg: var(--background);
    // --btn-bdr: #d3d6e7;
    // --btn-text-color: #868892;
    // --btn-hover-bg: var(--btn-bdr);
    // --btn-hover-text-color: #00062b;
    // --contact-bg: var(--card-shadow);
    // --contact-bdr: var(--card-bg);
    // --input-bg: var(--card-bg);

    transition: all 1s ease-in-out;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = () => {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
