import * as React from "react";

const About = () => (

    <div id={'about'} className='section about'>
        <div className="about-info">
            <h1>Timur Yunusov</h1>
            <p className={'text-l text-color--accent'}>
                Graduate of USATU Faculty of Computer Science<br/>
                3 experience in web studio "Salamat" <br/>
                Participated in the development:
                <ul>
                    <li>Kimmeria Films</li>
                    <li>Devongroup</li>
                    <li>Getbett</li>
                    <li>AcousticPro</li>
                    <li>Papacargo</li>
                    <li>Finuchet</li>
                    <li>MigranStudio</li>
                </ul>
            </p>
        </div>
        <div className="about-img">
            <img src="../assets/astronaut.svg" alt=""/>
        </div>
    </div>
);

export default About;