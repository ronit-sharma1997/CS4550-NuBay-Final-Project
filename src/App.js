import React from 'react';
import './App.css';
import NuBayManager from "./Container/NuBayManager";
import LoginPage from "./Component/LoginPage";
import ProfileTabs from "./Container/ProfileTabs";
import RegisterPage from "./Component/RegisterPage";

function App() {
  return (
    <div className="App">
      <NuBayManager/>
      {/*  <LoginPage/>*/}
      {/*<RegisterPage/>*/}
      {/*  <ProfileTabs/>*/}
    </div>
  );
}

export default App;
