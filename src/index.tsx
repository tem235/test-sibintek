import './styles/index.scss'
import * as React from "react";
import * as ReactDOM from "react-dom";


const App = () => (
    <div>
        <h1>Webpack + react + typescript + sass</h1>
        <img src="./assets/unicorn.svg" alt=""/>
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById("root")
);