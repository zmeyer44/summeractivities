import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ActivityConsumer } from "../context";
import PropTypes from "prop-types";

export default class Activity extends Component {
  render() {
    const { id, title, img, grades} = this.props.activity;
    return (
      <ActivityWrapper className="col-9 mx-auto col-xl-4 my-5">
        
          <div className="card">
          <ActivityConsumer>
              {value => (
                  <div 
                  className="img-container p-0"
                  onClick={()=>
                    value.handleDetail(id)
                }
                 >

              <Link to="/details">
                <img src={img} alt="Activity" className="card-img-top"></img>
              </Link>
              
            </div>
              )}
              </ActivityConsumer>
          <div className="card-footer d-flex justify-content-between align-items-center botcard">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue-grade font-italic mb-0">
              <span className="mr-1">Grades:</span>
              {grades}
            </h5>
          </div>
        </div>
      </ActivityWrapper>
    );
  }
}
Activity.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    grades: PropTypes.string,

  }).isRequired,
};
const ActivityWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
