import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main, SideBar } from './components';
import AuthProvider from './components/AuthProvider';

function App() {
  const [currentRoutine, setCurrentRoutine] = useState({});
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <SideBar
          open={open}
          setOpen={setOpen}
          setCurrentRoutine={setCurrentRoutine}
          currentRoutine={currentRoutine}
        />
        <Main
          open={open}
          setOpen={setOpen}
          setCurrentRoutine={setCurrentRoutine}
          currentRoutine={currentRoutine}
        />
      </AuthProvider>
    </Router>
  );
}

export default App;
