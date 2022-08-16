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


    let grid;
    useEffect(() => {
        grid = GridStack.init();
        document.getElementById("nodePreview").addEventListener("click", addWidget);

        const toggleModuleInteractivity = (state) => {
            const modules = document.getElementsByClassName('moduleContainer');
            for (var i = 0; i < modules.length; i++) {
                modules[i].style.pointerEvents = state;
            }
        }

        grid.on('resizestart', () => {
            toggleModuleInteractivity('none');
        });

        grid.on('resizestop', (event, el) => {
            let node = el.gridstackNode;
            document.getElementById('nodesGraph').style.transform = `scale(${node.width / 3}, ${node.height / 3})`;
            toggleModuleInteractivity('initial');
        });

    });


    // const iframeRef = useRef(null)
    // const [messageData, setMessageData] = useState()

    // const onResized = data => {
    //     console.log('ONRESIZED', data);
    //     setMessageData(data);
    // }

    // const onMessage = data => {
    //     document.getElementById('loginPage').style.display = 'none';
    // }

    const [showPanel, togglePanelState] = useState(false);
    const [editMode, toggleEditMode] = useState(false);
    const [canDelete, toggleDeleteMode] = useState(false);

    const intDeleteMode = () => {
        toggleDeleteMode(true);
        toggleEditMode(!editMode);
    }

    const togglePanel = (addMode = false) => {
        togglePanelState(addMode);
        toggleDeleteMode(false);
        toggleEditMode(!editMode);
    }

    const [previewState, togglePreviewState] = useState({
        animation: true,
        preview: true
    });

    const deleteNode = () => {
        if (!canDelete) {
            return;
        }
        // delete node

        // delete node preview
        togglePreviewState(prev => ({ ...prev, preview: true, animation: true }));
    }


    const addWidget = () => {

        // add node to screen
        var items = [
            {content: 'my first node'}, // will default to location (0,0) and 1x1
            {width: 3, height: 3, content: '<iframe title="nodesGraph" id="nodesGraph" src="http://127.0.0.1:5501/src/test_screens/1.html" class="moduleContainer"></iframe>'},

            

        ];
        // var grid = GridStack.init();
        grid.load(items);

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
                isVisible={showPanel}
            >
                <Animated
                    className={`panels ${!previewState.preview ? "shrunk-preview" : ""}`}
                    animationOut="zoomOut"
                    isVisible={previewState.animation}
                >
                    <div id="nodePreview">
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
            </Animated>
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
                            {editMode && (<div className="btn btn-black-white" id="GoBack" onClick={() => { togglePanel() }}>
                                Done
                            </div>)}
                            {!editMode && (
                                <>
                                    <div className="btn btn-black-white" id="Add" onClick={() => { togglePanel(true) }}>
                                        Add
                                    </div>
                                    <div className="btn btn-black-white-inverse" id="Delete" onClick={intDeleteMode}>
                                        Delete
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div id="joinIn" className="navbar-corner">

                    </div>
                </div>
            </nav>
            {/* header */}
            {/* <div id="loginPage" style={{ height: '100vh', width: '100vw', position: 'absolute', zIndex: '10', background: 'white' }}>
                <IframeResizer onMessage={onMessage} style={{ height: '100vh', width: '100vw' }} src="http://127.0.0.1:5500/capps.html"></IframeResizer>
            </div> */}
            {/* NODES */}
            <div className="grid-stack"></div>
        </div>
    );
}

export default App;
