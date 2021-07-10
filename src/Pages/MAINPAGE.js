import React from 'react';
import { LandingPage } from './LandingPage';
import { Footer } from '../utils/Footer';
import { Navigation } from '../utils/Navigation';
import ContactUs from '../utils/ContactUs';

export const MAINPAGE = () => (

    <>
    <Navigation/>
    <LandingPage/>
    <ContactUs/>
    <Footer/>
    </>

)

 
export default MAINPAGE;