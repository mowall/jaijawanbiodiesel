import React from 'react';
import DefaultHeader from '../components/header/defaultHeader';
import DefaultSideMenu from '../components/sideMenu/defaultSideMenu';
import DefaultFooter from '../components/Footer/defaultFooter';
import $ from 'jquery';

export default class Container extends React.Component{
    render () {
        var minHeader; 
        setTimeout(function(){
       minHeader = $("header").height();
}, 100);
        var minheight=screen.height;
        minheight = minheight -273; 
        const minHeight={
            minHeight: minheight
        }
        return (
            <section>
                <DefaultHeader />
                <div className="contentBody" style={minHeight}>
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
