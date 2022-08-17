import React, { useEffect, useRef, useState } from "react";
import "../css/nav.css";

export function NavBar({dashboardState, changeState}) {
     
    return (
        <nav className="navbar navbar-fixed-top nav-one DPOFix margin-live">
            <div className="navbar-header">
                <a className="navbar-brand" href="/"></a>
                <div className="dashboardContainer">
                    <p >Dashboard: {changeState}</p>
                </div>
            </div>

            <div>
                <div id="signIn" className="navbar-corner">
                    <div className="flex-buttons">
                        {dashboardState !== 'none' && (<div className="btn btn-black-white" id="GoBack" onClick={() => { changeState('none') }}>
                            Done
                        </div>)}
                        {dashboardState === 'none' && (
                            <>
                                <div className="btn btn-black-white" id="Add" onClick={() => { changeState('add nodes') }}>
                                    Add Nodes
                                </div>
                                <div className="btn btn-black-white-inverse" id="Delete" onClick={() => { changeState('remove nodes') }}>
                                    Move / Remove Nodes
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div id="joinIn" className="navbar-corner">

                </div>
            </div>
        </nav>);
}

export default NavBar