//import React, { useState } from 'react'
import Contact from './Contact';
import Foot from './Foot';
import Head from './Head';

import MenuUrls from './MenuUrls';
// import SignIn from './SignIn';
import TopImg from './TopImg';
// import {FaUser} from "react-icons/fa"



const Home = () => {
  
  return (
    <div>
      <Head/>
      <TopImg/>
      <MenuUrls/>
      <Contact/>
      <Foot/>
    </div>
  )
}

export default Home