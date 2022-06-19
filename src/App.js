import React from "react";
import PageTitle from "./components/PageTitle";
import style from './styles/modules/app.module.scss';
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";



function App() {
  return (
    <div className="container">
      <PageTitle>Organyze</PageTitle>
      <div className={style.app__wrapper}>
        <AppHeader />
        <AppContent></AppContent>
      </div>
    </div>
  );
}

export default App;
