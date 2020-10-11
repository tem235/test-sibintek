import * as React from "react";

const About = () => (
    <div id={'about'} className='section about'>
        <div className="about-info">
            <h1>Timur Yunusov</h1>
            <p className={'text-l text-color--accent'}>My name is Timur Yunusov. <br/>
                I'm middle full-stack developer from Ufa
            </p>
        </div>
        <div className="about-img">
            <img src="../assets/astronaut.svg" alt=""/>
        </div>
    </div>
);

export default About;