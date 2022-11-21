import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Beer from './components/Beer';
import Spirit from './components/Spirit';
import NonAlcholic from './components/NonAlcholic';
import Kitchen from './components/Kitchen';
import SignIn from './components/SignIn';
import CartList from './components/CartList';
import OneSignalReact from 'react-onesignal';
import { useEffect } from 'react';





function App() {

  useEffect(() => {
    OneSignalReact.init({
      appId: "0578a371-98bf-48e4-99a5-db51c7efdfeb"
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='beer' element={ <Beer /> }/>
        <Route path='spirit' element={ <Spirit/> }/>
        <Route path='noalcohol' element={ <NonAlcholic/> }/>
        <Route path='kitchen' element={ <Kitchen/> }/>
        <Route path='sign-in' element={ <SignIn/> }/>
        <Route path='cart' element={ <CartList/> }/>
        
      </Routes>
    </div>
  );
}

export default App;
