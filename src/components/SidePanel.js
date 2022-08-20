import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-animated-css";
import "../css/panel.css";

export function SidePanel({ state, visibility, toggleVisibility }) {

    const [previewState, togglePreviewState] = useState({
        animation: true,
        preview: true
    });


    const addNode = () => {
        // add node
        toggleVisibility(prev => ({ ...prev, nodesGraph: true }));

        // remove preview
        togglePreviewState(prev => ({ ...prev, animation: false }))
        setTimeout(() => {
            togglePreviewState(prev => ({ ...prev, preview: false }))
        }, 500);
    }

    return (
        <>
            {(state === 'add nodes' &&
                <Animated
                    className="sidePanel"
                    animationIn="bounceInRight"
                    animationOut="bounceOutRight"
                    isVisible={state === 'add nodes'}
                >
                    {/*
                * ADD NODES
                */}

                    <section>
                        <Animated
                            className={`panels ${!previewState.preview ? "shrunk-preview" : ""}`}
                            animationOut="zoomOut"
                            isVisible={previewState.animation}
                        >
                            <div id="nodePreview" onClick={addNode}>
                                <iframe
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
                    </section>
                </Animated>
            )}
        </>
    );
}

export default SidePanel