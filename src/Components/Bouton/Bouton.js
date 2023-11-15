import React from 'react';
import {Link} from "react-router-dom";


const Bouton = (props) => {

    return (
        <>
            <Link type="button" className="btn btn-info" to={props.to} onClick={props.clic} >{props.children}</Link>
        </>
    );
};

export default Bouton;
