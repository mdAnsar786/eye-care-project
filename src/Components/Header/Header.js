import React from 'react';
import logo from "../../Assets/images/logo-eyes.png";
const Header = () => {
    return (
        <div>
            <nav className="">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#"><img src={logo} alt="..." style={{ width: "70px" }} /></a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">About us <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Opthalamin Consumbles</a></li>
                                <li><a href="#">Education & Teaching</a></li>
                                <li><a href="#">Surgical Instrument</a></li>
                                <li><a href="#">Super Spaciality Products</a></li>
                                <li><a href="#">Hospital Furniture</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown-toggle" data-toggle="dropdown" href="#">Contact <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                                <li><a href="#">+919959364364</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown-toggle" data-toggle="dropdown" href="#">Services <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                                <li><a href="#">Opthalamin Consumbles</a></li>
                                <li><a href="#">Education & Teaching</a></li>
                                <li><a href="#">Surgical Instrument</a></li>
                                <li><a href="#">Super Spaciality Products</a></li>
                                <li><a href="#">Hospital Furniture</a></li>
                            </ul>
                            </li>
                        <li><a href="#">Faq</a></li>
                        <li><form className="navbar-form navbar-left">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" name="search" style={{borderColor:"#337ab7",width: "25em"}}/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit" style={{borderColor:"#337ab7", backgroundColor:"#337ab7", height:"34px"}}>
                                            <i className="glyphicon glyphicon-search" style={{color:"white"}}></i>
                                        </button>
                                    </div>
                            </div>
                        </form></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Register</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Header;