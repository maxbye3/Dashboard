import React, { useEffect, useRef, useState } from "react";
import IframeResizer from 'iframe-resizer-react'
import { Nodes } from './components/Nodes.js'
import { NavBar } from './components/NavBar.js'
import { Animated } from "react-animated-css";
import "./css/nav.css";
import './css/grid.css';
import "./css/panel.css";

function App() {
    // https://authex-0.tsgctp.org:9005/services/capps/access
    // a-su3@ctpdev.org
    // a-su3@$435Brannan/3000

    // const iframeRef = useRef(null)
    // const [messageData, setMessageData] = useState()

    // const onMessage = data => {
    //     document.getElementById('loginPage').style.display = 'none';
    // }


    useEffect(() => {});

    const setState = (state) => {
        setDashboardState(state);
    }

    const [dashboardState, setDashboardState] = useState('none');

    const [previewState, togglePreviewState] = useState({
        animation: true,
        preview: true
    });

    const dashboardMode = (type, event) => {
        setDashboardState(type);
        const nodesGraph = document.getElementById('nodesGraph');
        if(nodesGraph){
            nodesGraph.style.pointerEvents = event;
        }
    }

    const addNode = () => {

        // remove preview
        togglePreviewState(prev => ({ ...prev, animation: false }))
        setTimeout(() => {
            togglePreviewState(prev => ({ ...prev, preview: false }))
        }, 500);

    }

    return (
        <div className="App">
            {/* SIDE PANEL */}
            <Animated
                className="sidePanel"
                animationIn="bounceInRight"
                animationOut="bounceOutRight"
                isVisible={dashboardState !== 'none'}
            >
                {/*
                * ADD NODES
                */}
                {(dashboardState === 'add nodes' &&
                    <section>
                        <Animated
                            className={`panels ${!previewState.preview ? "shrunk-preview" : ""}`}
                            animationOut="zoomOut"
                            isVisible={previewState.animation}
                        >
                            <div id="nodePreview" onClick={addNode}>
                                <iframe
                                    onClick={addNode}
                                    title="node"
                                    scrolling="no"
                                    src="http://127.0.0.1:5501/src/test_screens/1.html"
                                    style={{
                                        pointerEvents: 'none',
                                        border: 0,
                                        height: '627px',
                                        transformOrigin: 'top left',
                                        transform: 'scale(.5,.5)',
                                        marginTop: '-105px',
                                    }}
                                >
                                </iframe>
                            </div>
                        </Animated>
                        <div
                            className="panels"
                        >
                            <iframe
                                title="node"
                                scrolling="no"
                                src="http://127.0.0.1:5501/src/test_screens/2.html"
                                style={{
                                    border: 0,
                                    pointerEvents: 'none',
                                    height: '627px',
                                    marginTop: '-105px',
                                }}
                            >
                            </iframe>
                        </div>

                        <div
                            className="panels"
                        >
                            <iframe
                                title="node"
                                scrolling="no"
                                src="http://127.0.0.1:5501/src/test_screens/3.html"
                                style={{
                                    border: 0,
                                    pointerEvents: 'none',
                                    height: '627px',
                                    marginTop: '-105px',
                                }}
                            >
                            </iframe>
                        </div>

                        <div
                            className="panels"
                        >
                            <iframe
                                title="node"
                                scrolling="no"
                                src="http://127.0.0.1:5501/src/test_screens/4.html"
                                style={{
                                    border: 0,
                                    pointerEvents: 'none',
                                    height: '627px',
                                    marginTop: '-105px',
                                }}
                            >
                            </iframe>
                        </div>
                    </section>)}
                {/*
                * MOVE/REMOVE NODES
                */}
                {(dashboardState === 'remove nodes' &&
                    <h1>DRAG HERE</h1>
                )}
            </Animated>
            {/* side panel */}

            <NavBar dashboardState={dashboardState} changeState={setState}></NavBar>
            <Nodes></Nodes>
        </div>
    );
}

export default App;
