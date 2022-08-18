import React, { useEffect } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

export function Nodes() {
  // layout is an array of objects, see the demo for more complete usage


  const removeItem = (event) => {
    event.target.remove();
  }

  let initialValues;
  const layoutChange = (change) => {
    // rescale the content
    if (!initialValues) {
      initialValues = change[0];
    }
    document.getElementById(change[0].i).style.transform = `scale(${(change[0].w / initialValues.w)}, ${(change[0].h / initialValues.h)})`;
  }

  const toggleInteractivity = (id, state) => {
    const nodesGraph = document.getElementById(id);
    if (nodesGraph) {
      nodesGraph.style.pointerEvents = state;
    }
  }

  return (
    <GridLayout
      className="nodesGrid"
      cols={12}
      rowHeight={30}
      width={1200}
      allowOverlap={false}
      onLayoutChange={layoutChange}
      onResizeStart={(node) => {
        toggleInteractivity(node[0].i, 'none');
      }}
      onResizeStop={(node) => {
        toggleInteractivity(node[0].i, 'all');
      }}
    >
      <div key="nodesGraph" data-grid={{ x: 0, y: 0, w: 5, h: 11 }} className="nodeContainer">
        <div className="nodeOverflow">
          <iframe
            id="nodesGraph"
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