import './styles/index.scss'
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App'
import {Provider} from 'mobx-react'
import Store from './store/index'


ReactDOM.render(
    <Provider store={new Store()}>
        <App/>
    </Provider>,
    document.getElementById("root")
);