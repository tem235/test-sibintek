import * as React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import store from './store'


const App = () => {

    return (
        <>
            {/*<Header/>*/}
            <div className={'main'}>
                <Hero/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Contacts/>
            </div>
            {/*<Footer/>*/}
            {/*<Nav/>*/}
        </>
    )
}


export default App;
