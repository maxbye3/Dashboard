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
    console.log('DATA FROM IFRAME:', data.message);
    setMessageData(data)
    iframeRef.current.sendMessage('Hello back from the parent page')
  }


    return (
        <div className="App">
            <IframeResizer
        forwardRef={iframeRef}
        heightCalculationMethod="lowestElement"
        inPageLinks
        log
        onMessage={onMessage}
        onResized={onResized}
        src="https://davidjbradshaw.com/iframe-resizer/example/frame.content.html"
        style={{ height: '50vh', width: '20%', minWidth: '100%'}}
      />
            <div className="grid-stack">
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
                    <div className="grid-stack-item-content">Item 1</div>
                </div>
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
                    <div className="grid-stack-item-content">Item 2</div>
                </div>
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
                    <div className="grid-stack-item-content">Item 3</div>
                </div>
            </div>
        </div>
    );
}

export default App;
