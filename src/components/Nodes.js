import React, { useEffect } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

export function Nodes() {
  // layout is an array of objects, see the demo for more complete usage


  const removeItem = (event) => {
    event.target.remove();
  }

  return (
    <GridLayout
      className="nodesGrid"
      cols={12}
      rowHeight={30}
      width={1200}
      allowOverlap={false}
      onLayoutChange={(layout) => { console.log(layout) }}
    >
      <div key="a" data-grid={{ x: 0, y: 0, w: 3, h: 6 }} className="nodeContainer">
        <div className="nodeOverflow">
          <iframe
            id="nodesGraph"
            style={{
              border: 0,
              transformOrigin: 'top left',
              transform: 'scale(.5,.5)',
              marginTop: '-105px',
              height: '627px',
              width: '510px',
            }}
            title="node"
            scrolling="no"
            src="http://127.0.0.1:5501/src/test_screens/1.html"
          >
          </iframe>
        </div>
      </div>
      {/* <div key="1" data-grid={{ x: 0, y: 0, w: 1, h: 2 }}>
        1
      </div>
      <div key="2" data-grid={{ x: 0, y: 0, w: 1, h: 2 }}>
        2
      </div>
      <div key="3" data-grid={{ x: 0, y: 0, w: 1, h: 2 }}>
        3
      </div> */}
    </GridLayout >
  );
}

export default Nodes;