import { FC, useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';

import logoIcon from '../images/Logo-white.png';
import logoWhite from '../images/Flution.png'
import './styles.scss';

const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  return (
    <header className="header container-fluid">
      <div className="header-content">
        <a href="/" className="logo-section">
          <span>MCU</span>
        </a>
        <div className="toggle-btn-section me-auto">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'light'}
            />
            <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
