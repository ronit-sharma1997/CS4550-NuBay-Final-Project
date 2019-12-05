import React from 'react';
import './App.css';

import NuBayManager from "./containers/NuBayManager";
import LoginPage from "./Component/LoginPage";
import ProfileTabs from "./containers/ProfileTabs";
import RegisterPage from "./Component/RegisterPage";


function App() {
  return (
    <div className="App">
      {/*<NuBayManager/>*/}
      {/*  <LoginPage/>*/}
      {/*<RegisterPage/>*/}
      <ProfileTabs/>
    </div>
  );
}

export default App;
