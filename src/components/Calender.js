import React, { Component } from 'react'

export default class Calender extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
          <h1 className="col-12 text-title text-center home-title">
            Calender
          </h1>
        </div>
        <div className="row ">
            <div className="SRG col-5">
                <h2>Summer Reading Calenders</h2>
            <ul className="text-capitalize">
                <li>
                    <a href="..\reading\k-1SummerReading2020.pdf" download>K-1st grade summer reading</a>
                </li>
                <li>
                    <a href="..\reading\1st-2ndSummerReading2020.pdf" download>1st-2nd grade summer reading</a>
                </li>
                <li>
                    <a href="..\reading\2nd-3rdSummerReading2020.pdf" download>2nd-3rd grade summer reading</a>
                </li>
                <li>
                    <a href="..\reading\3rd-4thSummerReading2020.pdf" download>3rd-4th grade summer reading</a>
                </li>
                <li>
                    <a href="..\reading\4th-5thSummerReading2020.pdf" download>4th-5th grade summer reading</a>
                </li>
                <li>
                    <a href="..\reading\5th-6thSummerReading2020.pdf" download>5th-6th grade summer reading</a>
                </li>
            </ul>
        </div>
        </div>
                
            </div>
        )
    }
}
