import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main, SideBar } from './components';
import AuthProvider from './components/AuthProvider'

function App() {
  const [curentRoutine, setCurentRoutine] = useState({});
  const [open, setOpen] = useState(false);



  return (
    <Router>
      <AuthProvider>
      <SideBar open={open} setOpen={setOpen} setCurentRoutine={setCurentRoutine} curentRoutine={curentRoutine}/>
      <Main open={open} setOpen={setOpen} setCurentRoutine={setCurentRoutine} curentRoutine={curentRoutine}/>
      </AuthProvider>
    </Router>
  );
}

export default App;
