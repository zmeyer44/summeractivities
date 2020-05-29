import React, { Component } from 'react';
import { ButtonContainer4 } from "./Button";
import { Link } from "react-router-dom";
export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-12 text-title text-center home-title">FPBSD Summer Activity Center</h1>
                    </div>
                    <div className="row text-center">
                    <div className="gif col-12 mx-auto mt-3 mb-0"><img src="../../img/SummerHome.gif" alt="gif" /></div>
                    </div>
                    
                <div className="row button-row">
<div className="col-10 col-lg-6 mx-auto left text-center mb-5 mb-lg-0">
                    <Link to="/vft">
                    <div className="button-typewriter">
                        <div className="button__wrapper">

                <button>
                    <p>
                Virtual Field Trips Library</p>
                </button>
                </div>
                </div>
                    </Link>
</div>
<div className="col-10 col-lg-6 mx-auto right text-center">
<Link to="/activities">
<div className="button-jittery">
                <button>
                    Summer Project Gallery
                </button>
                </div>
                    </Link>
</div>
                </div>
                
            </div>
        )
    }
}
