import React from 'react';
import { getConfig } from '@edx/frontend-platform';
import Cookies from 'universal-cookie';
import { Icon } from '@openedx/paragon';
import { WbSunny, Nightlight } from '@openedx/paragon/icons';

const ThemeToggleButton = () => {
  const cookies = new Cookies();
  const themeCookieName = getConfig().THEME_COOKIE_NAME ? getConfig().THEME_COOKIE_NAME : null;

  const getNextWeek = () => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  };

  const onToggleTheme = () => {
    const serverURL = new URL(getConfig().LMS_BASE_URL);
    const options = { domain: serverURL.hostname, path: '/', expires: getNextWeek() };
    let themeName = '';

    if (cookies.get(themeCookieName) === 'dark') {
      document.body.classList.remove('indigo-dark-theme');
      themeName = 'light';
    } else {
      document.body.classList.add('indigo-dark-theme');
      themeName = 'dark';
    }
    cookies.set(themeCookieName, themeName, options);

    const learningMFEUnitIframe = document.getElementById('unit-iframe');
    if (learningMFEUnitIframe) {
      learningMFEUnitIframe.contentWindow.postMessage({ 'indigo-toggle-dark': themeName }, serverURL.origin);
    }
  };

  if (!themeCookieName) {
    return <div />;
  }

  return (
    <div className="theme-toggle-button">
      <div className="light-theme-icon"><Icon src={WbSunny} /></div>
      <div className="toggle-switch">
        <label htmlFor="theme-toggle-checkbox" className="switch">
          <input id="theme-toggle-checkbox" defaultChecked={cookies.get(themeCookieName) === 'dark'} onChange={onToggleTheme} type="checkbox" />
          <span className="slider round" />
        </label>
      </div>
      <div className="dark-theme-icon"><Icon src={Nightlight} /></div>
    </div>
  );
};

export default ThemeToggleButton;
