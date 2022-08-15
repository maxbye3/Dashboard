import React, { useEffect, useRef, useState } from "react";
import IframeResizer from 'iframe-resizer-react'
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import './custom.css';
import { Animated } from "react-animated-css";

import "./App.css";

function App() {
    // https://authex-0.tsgctp.org:9005/services/capps/access
    // a-su3@ctpdev.org
    // a-su3@$435Brannan/3000

    const handleClick = (e) => {
        if (e.type === 'click') {
            console.log('Left click');
        } else if (e.type === 'contextmenu') {
            console.log('Right click');
        }
    };

    // Initialize Gridstack inside useEffect so that DOM is rendered when its initialized
    useEffect(() => {
        var grid = GridStack.init();
    });

    const iframeRef = useRef(null)
    const [messageData, setMessageData] = useState()

    const onResized = data => {
        console.log('ONRESIZED', data);
        setMessageData(data);
    }

    const onMessage = data => {
        document.getElementById('loginPage').style.display = 'none';
    }

    const [showPanel, togglePanelState] = useState(false);
    const togglePanel = () => {
        togglePanelState(!showPanel);
        console.log('showPanels:', showPanel);
    }

    const [previewState, togglePreviewState] = useState({
        animation: true,
        preview: true
    });
    const addWidget = () => {
        console.log('remove preview');
        togglePreviewState(prev => ({...prev, animation: false}))
        setTimeout(() => {
            togglePreviewState(prev => ({...prev, preview: false}))
        }, 500);

    }


    return (
        <div className="App">
            {/* SIDE PANEL */}
            {showPanel && (<Animated
                className="sidePanel"
                animationIn="bounceInRight"
                animationOut="bounceOutRight"
                isVisible={showPanel}
            >
                {previewState.preview && (<Animated
                    className="panels"
                    animationOut="zoomOut"
                    isVisible={previewState.animation}
                >
                    <div onClick={addWidget}>
                        <iframe
                            onClick={addWidget}
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
                </Animated>)}

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
                            transformOrigin: 'top left',
                            transform: 'scale(.5,.5)',
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
                            transformOrigin: 'top left',
                            transform: 'scale(.5,.5)',
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
                            transformOrigin: 'top left',
                            transform: 'scale(.5,.5)',
                            marginTop: '-105px',
                        }}
                    >
                    </iframe>
                </div>
            </Animated>)}
            {/* side panel */}

            {/* HEADER */}
            <nav className="navbar navbar-fixed-top nav-one DPOFix margin-live">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/"></a>
                    <div className="dashboardContainer">
                        <p >Dashboard</p>
                    </div>

                </div>

                <div>
                    <div id="signIn" className="navbar-corner">
                        <div className="flex-buttons">
                            <div className="btn btn-black-white" id="SignInID" onClick={togglePanel}>
                                Add
                            </div>
                            <div className="btn btn-black-white-inverse testCSS" id="JoinInID">
                                Delete
                            </div>
                        </div>
                    </div>
                    <div id="joinIn" className="navbar-corner">

                    </div>
                </div>
            </nav>
            {/* header */}

            {/* <p onClick={handleClick} onContextMenu={handleClick}>Something</p> */}

            {/* <div id="loginPage" style={{ height: '100vh', width: '100vw', position: 'absolute', zIndex: '10', background: 'white' }}>
                <IframeResizer onMessage={onMessage} style={{ height: '100vh', width: '100vw' }} src="http://127.0.0.1:5500/capps.html"></IframeResizer>
            </div> */}

            <div className="grid-stack">
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="3">
                    <div className="grid-stack-item-content">
                        <div
                            style={{
                                overflow: 'hidden',
                            }}
                        >
                            <iframe
                                title="node"
                                scrolling="no"
                                src="http://127.0.0.1:5501/src/test_screens/1.html"
                                style={{
                                    pointerEvents: 'none',
                                    height: '627px',
                                    // transformOrigin: 'top left',
                                    // transform: 'scale(2,2)',
                                    marginTop: '-195px',
                                    marginLeft: '-27px',
                                    marginRight: '30px',
                                    width: '34vw'
                                }}
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
                {/* <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="3">
                    <div className="grid-stack-item-content">
                        <div
                            style={{
                                overflow: 'hidden',
                            }}
                        >
                            <iframe
                                title="node"
                                scrolling="no"
                                src="http://127.0.0.1:5501/src/test_screens/iworkslineitemimports.html"
                                style={{
                                    pointerEvents: 'none',
                                    height: '635px',
                                    marginTop: '-180px',
                                    marginLeft: '-27px',
                                    marginRight: '30px',
                                    width: '38vw'
                                }}
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="3">
                    <div className="grid-stack-item-content">
                        <div
                            style={{
                                overflow: 'hidden',
                            }}
                        >
                            <iframe
                                title="node"
                                scrolling="no"
                                src="http://127.0.0.1:5501/src/test_screens/orgcountbycountry.html"
                                style={{
                                    pointerEvents: 'none',
                                    height: '615px',
                                    marginTop: '-180px',
                                    marginLeft: '-27px',
                                    marginRight: '30px',
                                    width: '38vw'
                                }}
                            >
                            </iframe>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default App;
