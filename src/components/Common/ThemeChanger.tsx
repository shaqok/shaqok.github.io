import React from 'react'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

interface Props {
  theme: string
  toggleTheme: (theme: string) => void
}

const ThemeChanger = () => {
  return (
    <div>
      <ThemeToggler>
        {({ theme, toggleTheme }: Props) => (
          <div
            className="light-dark-btn"
            onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </div>
        )}
      </ThemeToggler>
    </div>
  )
}

export default ThemeChanger
