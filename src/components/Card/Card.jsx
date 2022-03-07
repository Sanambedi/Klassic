import React from 'react';
import { Link } from 'react-router-dom';

const Card = () =>{
    return(
        <div className="feature-item mb-5 mb-lg-0">
            <div className="feature-icon mb-4">
                <i className="icofont-surgeon-alt"></i>
            </div>
            <span>24 Hours Service</span>
            <h4 className="mb-3">Online Appoinment</h4>
            <p className="mb-4">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
            <Link to="/appoinment" className="btn btn-main btn-round-full">Make a appoinment</Link>
        </div>
    )
}

export default Card;