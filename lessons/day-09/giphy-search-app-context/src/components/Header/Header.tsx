import React, { useContext } from 'react'
import './Header.css'
import { ThemeContext } from '../../App';
import { Link } from 'react-router-dom';

export default function Header() {
  // context is treated like state by ANY components which consume it
  const { theme, setTheme } = useContext(ThemeContext);

  const headerStyles = () => {
    if (theme === 'dark') {
      return {
        backgroundColor: 'black',
        color: 'white'
      }
    } else {
      return {
        backgroundColor: 'white',
        color: 'black'
      }
    }
  }

  return (
    <div className="header" style={headerStyles()}>
      <div className="left-side">
        <h1>Gif App</h1>
        <p>Powered By GIPHY</p>
        <div>
          <button onClick={() => setTheme('dark')}>Dark Theme</button>
          <button onClick={() => setTheme('light')}>Light Theme</button>
        </div>
      </div>
      <div className='right-side'>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  )
}
