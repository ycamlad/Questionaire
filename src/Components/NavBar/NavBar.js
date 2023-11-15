import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <NavLink to={"/"}  exact  className={"nav-link"}>Objectif</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Information+Personnelle"} exact className={"nav-link"}>Information Personnelle</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Information+Personnelle/Formations"} exact className={"nav-link"}>Formations</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Information+Personnelle/Formations/StatusRegime"} exact className={"nav-link"}>Status/Regime</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Information+Personnelle/Formations/StatusRegime/Complet"} exact className={"nav-link"}> </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default NavBar;
