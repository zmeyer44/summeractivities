import React, { Component } from 'react'

export default class Reading extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
          <h1 className="col-12 text-title text-center home-title">
            Reading & More
          </h1>
        </div>
        <div className="row ">
            <div className="SRG col-5">
                <h2>Fluency Guides</h2>
            <ul className="text-capitalize">
               
                <li>
                    <a href="..\fluency\2nd Fluency.pdf" download>2nd grade fluency</a>
                </li>
                <li>
                    <a href="..\fluency\3rd Fluency.pdf" download>3rd grade fluency</a>
                </li>
                <li>
                    <a href="..\fluency\4th Fluency.pdf" download>4th grade fluency</a>
                </li>
                <li>
                    <a href="..\fluency\5th Fluency.pdf" download>5th grade fluency</a>
                </li>
            </ul>
        </div>
        </div>
                
            </div>
        )
    }
}
