import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main, SideBar } from './components';

function App() {
  return (
    <Router>
      <SideBar />
      <Main />
    </Router>
  );
}

export default App;
