import React from 'react'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styled from '@emotion/styled'

interface ThemeChangerProps {
  theme: string
  toggleTheme: (theme: string) => void
}

const IconWrapper = styled(FontAwesomeIcon)`
  color: rgba(255, 255, 255, 0.88);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

const ThemeChanger = () => {
  return (
    <div>
      <ThemeToggler>
        {({ theme, toggleTheme }: ThemeChangerProps) => (
          <div
            className="light-dark-btn"
            onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <IconWrapper icon={faSun} />
            ) : (
              <IconWrapper icon={faMoon} />
            )}
          </div>
        )}
      </ThemeToggler>
    </div>
  )
}

export default ThemeChanger
