import React, { useEffect, useRef, useState } from "react";
import IframeResizer from 'iframe-resizer-react'
import { Nodes, initialValues, toggleInteractivity } from './components/Nodes.js'
import { NavBar } from './components/NavBar.js'
import { SidePanel } from './components/SidePanel.js'
import { Animated } from "react-animated-css";
import { states } from "./constants.js";
import './css/grid.css';


function App() {
    // https://authex-0.tsgctp.org:9005/services/capps/access
    // a-su3@ctpdev.org
    // a-su3@$435Brannan/3000

    // const iframeRef = useRef(null)
    // const [messageData, setMessageData] = useState()

    // const onMessage = data => {
    //     document.getElementById('loginPage').style.display = 'none';
    // }


    useEffect(() => { });

    const [state, changeState] = useState('none');

    const setState = (state) => {
        changeState(state);
        Object.keys(initialValues).forEach((node) => {
            if (state === states.add) {
                toggleInteractivity(node, 'none');
            } else {
                toggleInteractivity(node, 'all');
            }
        });
    }

    return (
        <div className="App">
            <SidePanel state={state}></SidePanel>
            <NavBar state={state} changeState={setState}></NavBar>
            <Nodes></Nodes>
        </div>
    );
}

export default App;
