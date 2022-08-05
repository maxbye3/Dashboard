import React, { useEffect, useRef, useState } from "react";
import IframeResizer from 'iframe-resizer-react'
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';

import "./App.css";

function App() {
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


    return (
        <div className="App">
            <p>
                https://authex-0.tsgctp.org:9005/services/capps/access
                a-su3@ctpdev.org
                a-su3@$435Brannan/3000
            </p>

            <div id="loginPage" style={{ height: '100vh', width: '100vw', position: 'absolute', zIndex: '10', background: 'white' }}>
                <IframeResizer onMessage={onMessage} style={{ height: '100vh', width: '100vw' }} src="http://127.0.0.1:5500/capps.html"></IframeResizer> 
        </div>

            <div className="grid-stack" style={{ height: '480px' }}>
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="7" style={{ height: '480px', width: '33%' }}>
                    <div className="grid-stack-item-content">
                        <div
                            style={{
                                overflow: 'hidden',
                            }}
                        >
                            <iframe
                                scrolling="no"
                                src="http://127.0.0.1:5500/node.html"
                                style={{
                                    pointerEvents: 'none',
                                    height: '1200px',
                                    marginTop: '-120px',
                                    marginLeft: '-30px',
                                    marginRight: '30px',
                                    width: '38vw'
                                }}
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="7" style={{ height: '480px', width: '33%' }}>
                    <div className="grid-stack-item-content">
                        <div
                            style={{
                                overflow: 'hidden',
                            }}
                        >
                            <iframe
                                scrolling="no"
                                src="http://127.0.0.1:5500/testest.html"
                                style={{
                                    pointerEvents: 'none',
                                    height: '1200px',
                                    marginTop: '-120px',
                                    marginLeft: '-30px',
                                    marginRight: '30px',
                                    width: '38vw'
                                }}
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="7" style={{ height: '480px', width: '33%' }}>
                    <div className="grid-stack-item-content">
                        <div
                            style={{
                                overflow: 'hidden',
                            }}
                        >
                            <iframe
                                scrolling="no"
                                src="http://127.0.0.1:5500/yoyo.html"
                                style={{
                                    pointerEvents: 'none',
                                    height: '1200px',
                                    marginTop: '-120px',
                                    marginLeft: '-30px',
                                    marginRight: '30px',
                                    width: '38vw'
                                }}
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
