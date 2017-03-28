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
                        <li><a href="#/currentresearch">Current Research</a></li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">BioDiesel<span className="caret"></span></a>
                          <ul className="dropdown-menu">
                            <li><a href="#/whatisbiodiesel">What is BioDiesel</a></li>
                            <li><a href="#/biodieselhistory">History</a></li>
                            <li><a href="#/futurefuel">BioDiesel- A Fuel For Future</a></li>
                            <li><a href="#/swotanalysis">SWOT Analysis</a></li>
                            <li><a href="#factsandfigures">Facts & Figures</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">FeedStock<span className="caret"></span></a>
                          <ul className="dropdown-menu">
                            <li><a href="#/aboutFeedStock">About FeedStock</a></li>
                            <li><a href="#/animaltallow">Animal Tallow</a></li>
                            <li><a href="#/biodieselfromneemoil">BioDiesel From Neem Oil</a></li>
                            <li><a href="#/biodieselfrompalmoil">BioDiesel From Palm Oil</a></li>
                            <li><a href="#/rapeseedasafuel">Rapeseed As A Fuel</a></li>
                            <li><a href="#/ricebranoil">Rice Bran Oil</a></li>
                            <li><a href="#/wastevegetableoil">Waste Vegetable Oil</a></li>                            
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
