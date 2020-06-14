import React, { Component } from "react";
import { ButtonContainer4 } from "./Button";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="col-12 text-title text-center home-title">
            FPBSD Summer Activity Center
          </h1>
        </div>
        <div className="row text-center">
          <div className="gif col-12 mx-auto mt-3 mb-0">
            <img src="../../img/SummerHome.gif" alt="gif" />
          </div>
        </div>

        <div className="row button-row">
          <div className="col-10 col-lg-6 mx-auto left text-center mb-5 mb-lg-0">
            <Link to="/vft">
              <div className="button-typewriter">
                <div className="button__wrapper">
                  <button>
                    <p>Virtual Field Trips Library</p>
                  </button>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-10 col-lg-6 mx-auto right text-center">
            <Link to="/activities">
              <div className="button-jittery">
                <button>Summer Project Gallery</button>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="row threebuttons justify-content-center">
            <div id="sec1" className="col-10 col-md-3 text-center">
                <img src="../../img/calender.png"alt="calender"width="100%" />
                <h2>Calender</h2>
                <Link to="/calender">
<ButtonContainer4>
    Learn More
</ButtonContainer4>
</Link>
            </div>
            <div id="sec2" className="col-10 col-md-3 text-center">
            <img src="../../img/software.jpg"alt="software" width="100%"/>
            <h2>Software</h2>
<ButtonContainer4>
Learn More
</ButtonContainer4>
            </div>
            <div id="sec3" className="col-10 col-md-3 text-center">
            <img src="../../img/remedial.jpg"alt="remedial" width="100%"/>
            <h2>Reading & More</h2>
            <Link to='/reading'>
<ButtonContainer4>
Learn More
</ButtonContainer4>
</Link>
            </div>
        </div>
        
      </div>
    );
  }
}
