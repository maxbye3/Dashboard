import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-animated-css";
import "../css/panel.css";

export function SidePanel({ state, changeState }) {

    const [previewState, togglePreviewState] = useState({
        animation: true,
        preview: true
    });


    const addNode = () => {
        // remove preview
        togglePreviewState(prev => ({ ...prev, animation: false }))
        setTimeout(() => {
            togglePreviewState(prev => ({ ...prev, preview: false }))
        }, 500);
    }

    return (
        <Animated
            className="sidePanel"
            animationIn="bounceInRight"
            animationOut="bounceOutRight"
            isVisible={state !== 'none'}
        >
            {/*
                * ADD NODES
                */}
            {(state === 'add nodes' &&
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
            {(state === 'remove nodes' &&
                <h1>DRAG HERE</h1>
            )}
        </Animated>
    );
}

export default SidePanel