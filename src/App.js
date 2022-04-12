import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main, SideBar } from './components';
import AuthProvider from './components/AuthProvider'

function App() {
  return (
    <Router>
      <AuthProvider>
      <SideBar />
      <Main />
      </AuthProvider>
    </Router>
  );
}

export default App;
