import React, { useRef, useState } from "react";
import IframeResizer from 'iframe-resizer-react'
import { initialValues } from './components/Node.js'
import { Grid, toggleInteractivity } from './components/Grid.js'
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

    // useEffect(() => {});

    const [visibleNodes, toggleVisibility] = useState(Object.keys(initialValues).reduce((a, v) => ({ ...a, [v]: true }), {}));
    const [dashbordState, changeState] = useState('none');

    const visibilityUpdated = (nodes) => {
        toggleVisibility(nodes);
    }

    const setState = (state) => {
        changeState(state);
        Object.keys(initialValues).forEach((node) => {
            // add and remove nodes requires no node interaction
            const resizeOptions = document.getElementsByClassName('react-resizable-handle');
            if (state !== states.none) {
                toggleInteractivity(node, 'none');
                if (state === states.remove) {
                    for (let i = 0; i < resizeOptions.length; i++) {
                        resizeOptions[i].style.display = 'none';
                    }
                }
            } else {
                toggleInteractivity(node, 'all');
                for (let i = 0; i < resizeOptions.length; i++) {
                    resizeOptions[i].style.display = 'inline';
                }
            }
        });
    }

    return (
        <div className="App">
            <SidePanel state={dashbordState} toggleVisibility={visibilityUpdated} visibility={visibleNodes}></SidePanel>
            <NavBar state={dashbordState} changeState={setState}></NavBar>
            <Grid state={dashbordState} toggleVisibility={visibilityUpdated} visibility={visibleNodes}></Grid>
        </div>
    );
}

export default App;
