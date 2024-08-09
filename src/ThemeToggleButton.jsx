import { getConfig } from '@edx/frontend-platform';
import Cookies from 'universal-cookie';

const ThemeToggleButton = () => {
  const getNextWeek = () => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  };

  const onToggleHandle = (themeName) => {
    const cookies = new Cookies();
    console.log('---egtt---', getConfig());
    const options = { domain: 'local.edly.io', path: '/', expires: getNextWeek() };

    if (themeName === 'dark') {
      document.body.classList.add('indigo-dark-theme');
    } else {
      document.body.classList.remove('indigo-dark-theme');
    }
    cookies.set('indigo-theme-type', themeName, options);
  };

  return (
    <div><button type="button" onClick={() => onToggleHandle('light')}>Light</button><button type="button" onClick={() => onToggleHandle('dark')}>Dark</button></div>
  );
};

export default ThemeToggleButton;
