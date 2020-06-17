import React, { Component } from "react";
import { ActivityConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer2 } from "./Button";
import { ButtonContainer3 } from "./Button";
export default class Details extends Component {
  render() {
    return (
      <ActivityConsumer>
        {(value) => {
          const { id, img, info, grades, title } = value.detailActivity;
          return (
            <div className="container py-5">
              {/*title}*/}
              <div className="row">
                <div className="col-10 mx-auto text-center my-5">
                  <h1>Project #{id}</h1>
                </div>
              </div>
              {/* end title*/}
              {}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="product"></img>
                </div>
                {}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>{title}</h2>
                  <h4 className="">
                   <span>Grades: </span> 
                       {grades}
                    
                  </h4>
                  <h5 className="text-capitalize font-weight-bold mt-4 mb-1">
                    Summary:
                  </h5>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/activities">
                      <ButtonContainer2>
                        back to Activities List
                      </ButtonContainer2>
                    </Link>
                    <ButtonContainer3 className="mx-4">
                      download PDF
                    </ButtonContainer3>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ActivityConsumer>
    );
  }
}
