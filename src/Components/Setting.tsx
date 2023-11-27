import { FC, useContext } from 'react';
import './styles.scss';
import { ThemeContext } from '../contexts/theme-context';
import setting from '../images/setting.png';
import settingWhite from '../images/setting-white.png';


const Setting: FC = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeChange = () => {
      const isCurrentDark = theme === 'dark';
      setTheme(isCurrentDark ? 'light' : 'dark');
      localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
    };
  return (
    <div className='Setting'>
        <img className="img"src={theme === 'dark' ? settingWhite : setting} alt="setting"/>
    </div>
  )
}

export default Setting