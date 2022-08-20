import React from "react";
import { Animated } from "react-animated-css";
import "../css/panel.css";

export function SidePanel({ state, nodes, toggleVisibility }) {
    const addNode = (id) => {
        // add node
        console.log(nodes[id]);
        toggleVisibility(prev => ({ ...prev, [id]: { ...nodes[id], visible: true } }));

        // remove preview
        setTimeout(() => {
            toggleVisibility(prev => ({ ...prev, [id]: { ...nodes[id], visible: true, animation: true } }));
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
                            className={`panels ${nodes.nodesGraph.animation ? "shrunk-preview" : ""}`}
                            animationOut="zoomOut"
                            isVisible={!nodes.nodesGraph.visible}
                        >
                            <div id="nodePreview" onClick={() => { addNode('nodesGraph') }}>
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
                        <Animated
                            className={`panels ${nodes.differentGraph.animation ? "shrunk-preview" : ""}`}
                            animationOut="zoomOut"
                            isVisible={!nodes.differentGraph.visible}
                        >
                            <div
                                className="panels"
                                onClick={() => { addNode('differentGraph') }}
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
                        </Animated>
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