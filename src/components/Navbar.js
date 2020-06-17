import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../sun.png';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";
import Title from "./Title";

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            
                <Link to='/'>
                    <img src={logo} alt="store" width="70px" className="navbar-brand filter-green">
                    </img>

                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <a href="https://www.fpbsd.org/" target="_blank" className="nav-link">
                            FPBSD
                        </a>
                    </li>
                </ul>
                
                       <div className="container-fluid text-center d-none d-lg-block col-6 prob">
                <Title name="" title="Summer Activities" />
                </div> 
                <Link to="/" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-home" />
                        </span>
                         home
                    </ButtonContainer>

                </Link>
            


            </NavWrapper>

        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainRed);
.nav-link{
    color: var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize;
}
`
