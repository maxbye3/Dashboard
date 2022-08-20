import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import { initialValues } from './Node.js'
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { states } from "../constants.js";

export const toggleInteractivity = (id, state) => {
  const nodesGraph = document.getElementById(id);
  if (nodesGraph) {
    nodesGraph.style.pointerEvents = state;
  }
}

export function Grid({ state, nodes, toggleVisibility }) {
  const nodeContainerClasses = `nodeContainer ${state === states.remove ? "confirmDelete" : ""}`;
  const resizeNodes = (changes) => {
    // rescale the iframe nodes when containers are resized
    changes.forEach((change) => {
      const iframe = {
        w: change.w / initialValues[change.i].w,
        h: change.h / initialValues[change.i].h
      }
      document.getElementById(change.i).style.transform = `scale(${iframe.w}, ${iframe.h})`;
    })
  }

  return (
    <GridLayout
      className="nodesGrid"
      cols={12}
      rowHeight={30}
      width={1200}
      allowOverlap={false}
      // onLayoutChange={layoutChange}
      onResize={resizeNodes}
      onResizeStart={(node) => {
        toggleInteractivity(node[0].i, 'none');
      }}
      onResizeStop={(node) => {
        toggleInteractivity(node[0].i, 'all');
      }}
    >
      ({nodes.nodesGraph.visible &&
        <div
          className={nodeContainerClasses}
          onClick={() => {
            if (state === states.remove) {
              toggleVisibility(prev => ({ ...prev, nodesGraph: { visible: false } }))
            }
          }
          }
          key="nodesGraph"
          data-grid={{ x: 0, y: 0, w: initialValues.nodesGraph.w, h: initialValues.nodesGraph.h }}
        >
          <iframe
            id="nodesGraph"
            title="node"
            scrolling="no"
            src="http://127.0.0.1:5501/src/test_screens/1.html"
          >
          </iframe>
        </div>
      })
      ({
        nodes.differentGraph.visible &&
        <div
          className={nodeContainerClasses}
          onClick={() => {
            if (state === states.remove) {
              toggleVisibility(prev => ({ ...prev, differentGraph: false }))
            }
          }}
          key="differentGraph"
          data-grid={{ x: 0, y: 0, w: initialValues.differentGraph.w, h: initialValues.differentGraph.h }}
        >
          <iframe
            id="differentGraph"
            title="different"
            scrolling="no"
            src="http://127.0.0.1:5501/src/test_screens/1.html"
          >
          </iframe>
        </div>
      });
    </GridLayout >
  );
}