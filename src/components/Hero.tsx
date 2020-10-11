import * as React from "react";

const Hero = () => (
    <div id={'hero'} className='section hero'>
        <div className="hero-info">
            <h4 className={'text-color--accent'}>&lt;Hello World&gt;</h4>
            <p className={'text-l'}>My name is Timur Yunusov. <br/>
                I'm frontend developer from Ufa
            </p>
            <a href={'#contacts'} className={'btn'}>Contact me</a>
        </div>
        <div className="hero-img">
            <img src="../assets/programming.svg" alt=""/>
        </div>
    </div>
);

export default Hero;