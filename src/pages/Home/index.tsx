import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{t('title')}</h1>
      </header>
    </div>
  );
};

export default Home;
