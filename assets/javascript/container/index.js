import React from 'react';
import DefaultHeader from '../components/header/defaultHeader';
import DefaultSideMenu from '../components/sideMenu/defaultSideMenu';
import DefaultFooter from '../components/Footer/defaultFooter';

export default class Container extends React.Component{
    render () {
        return (
            <section>
                <DefaultHeader />
                <div className="contentBody">
                    <div className="container">
                        <div className="row">
                            <DefaultSideMenu />
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <DefaultFooter />
            </section>
        );
    }
}
