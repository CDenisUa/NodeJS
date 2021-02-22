import React from 'react';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import SettingBar from './components/SettingBar';
import './style/app.scss';

const App = () => {
  return (
    <div className='app'>
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  )
}

export default App;