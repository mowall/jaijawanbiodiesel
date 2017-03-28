import React from 'react';
import { Link } from 'react-router';
import NavBar from './navigationMenu';
import NavHeader from './navHeader';

export default class DefaultHeader extends React.Component {
    render () {
        return (
            <header className="navHeader">
                <NavHeader/>
                <NavBar />
            </header>
        );
    }
}
