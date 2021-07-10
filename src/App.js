import React from 'react';
import { LandingPage } from './Pages/LandingPage';
import { Footer } from './utils/Footer';
import { Navigation } from './utils/Navigation';
import ContactUs from './utils/ContactUs';

class App extends React.Component{
  render(){
    return(
      <>
      <Navigation/>
      <LandingPage/>
      <ContactUs/>
      <Footer/>
      </>
    )
  }
}

export default App;
