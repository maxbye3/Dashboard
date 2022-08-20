import React from "react";
import "../css/nav.css";
import { states } from "../constants.js";

export function NavBar({ state, changeState }) {

    return (
        <nav className="navbar navbar-fixed-top nav-one DPOFix margin-live">
            <div className="navbar-header">
                <div className="navbar-brand"></div>
                <div className="dashboardContainer">
                    <p>Dashboard</p>
                </div>
            </div>

            <div>
                <div id="signIn" className="navbar-corner">
                    <div className="flex-buttons">
                        {state !== 'none' && (<div className="btn btn-black-white" id="GoBack" onClick={() => { changeState('none') }}>
                            Done
                        </div>)}
                        {state === 'none' && (
                            <>
                                <div className="btn btn-black-white" id="Add" onClick={() => { changeState(states.add) }}>
                                    Move / Add Nodes
                                </div>
                                <div className="btn btn-black-white-inverse" id="Delete" onClick={() => { changeState(states.remove) }}>
                                    Remove Nodes
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