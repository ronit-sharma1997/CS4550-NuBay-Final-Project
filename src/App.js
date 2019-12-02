import React from 'react';
import './App.css';
import NuBayManager from "./Container/NuBayManager";
import LoginPage from "./Component/LoginPage";
import ProfileTabs from "./Component/ProfileTabs";
import RegisterPage from "./Component/RegisterPage";

function App() {
  return (
    <div className="App">
      <NuBayManager/>
      {/*  <LoginPage/>*/}
      {/*<RegisterPage/>*/}
    </div>
  );
}

export default App;
