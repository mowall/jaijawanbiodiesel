import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
    render () {
        return (
         <nav className="navbar navbar-default navbar-static-top navMenu">
            <div className="container">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                  
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><a href="#/introduction">Introduction</a></li>
                        <li><a href="#/currentresearch">Current Research</a></li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">BioDiesel<span className="caret"></span></a>
                          <ul className="dropdown-menu">
                            <li><a href="#">What is BioDiesel</a></li>
                            <li><a href="#">History</a></li>
                            <li><a href="#">BioDiesel- A Fuel For Future</a></li>
                            <li><a href="#">SWOT Analysis</a></li>
                            <li><a href="#">Facts & Figures</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">FeedStock<span className="caret"></span></a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Animal Tallow</a></li>
                            <li><a href="#">BioDiesel From Neem Oil</a></li>
                            <li><a href="#">BioDiesel From Palm Oil</a></li>
                            <li><a href="#">Rapeseed As A Fuel</a></li>
                            <li><a href="#">Rice Bran Oil</a></li>
                            <li><a href="#">Waste Vegetable Oil</a></li>                            
                          </ul>
                        </li>
                        <li><a href="#/governmentvision">Government Vision</a></li>
                        <li><a href="#/companymission">Company Mission</a></li>
                        <li><a href="#/faq">FAQ'S</a></li>
                        <li><a href="#/deskofmd">Desk Of M.D.</a></li>
                        <li><a href="#/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        


        );
    }
}
