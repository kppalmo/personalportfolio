import React from 'react';
import { LandingPage } from './Pages/LandingPage';
import { Footer } from './utils/Footer';
import { Navigation } from './utils/Navigation';


class App extends React.Component{
  render(){
    return(
      <>
      <Navigation/>
      <LandingPage/>
      <Footer/>
      </>
    )
  }
}

export default App;
