import React from 'react';
import { createHashHistory } from 'history';
import { IndexRoute, Router, Route, useRouterHistory } from 'react-router';

const history = useRouterHistory(createHashHistory)();

import Container from '../container/index';
import Home from '../components/pages/home';
import Introduction from '../components/pages/introduction';
import CurrentResearch from '../components/pages/currentResearch';
import GovernmentVision from '../components/pages/governmentVision';
import CompanyMission from '../components/pages/companyMission';
import FAQ from '../components/pages/faq';
import DeskOfMD from '../components/pages/deskOfMD';
import Contact from '../components/pages/contact';
import Production from '../components/pages/production';

export default class Root extends React.Component {
    render() {
        return (
            <Router history = {history}>
                <Route name='container' path='/' component={Container}>
                    <IndexRoute component={Home} />
                    <Route name='introduction' path='/introduction' component={Introduction} />
                    <Route name='currentresearch' path='/currentresearch' component={CurrentResearch} />                    
                    <Route name='governmentvision' path='/governmentvision' component={GovernmentVision} />                    
                    <Route name='companymission' path='/companymission' component={CompanyMission} />                    
                    <Route name='faq' path='/faq' component={FAQ} />                    
                    <Route name='deskofmd' path='/deskofmd' component={DeskOfMD} />                    
                    <Route name='contact' path='/contact' component={Contact} />
                    <Route name='production' path='/production' component={Production} />                    
                </Route>
            </Router>
        );
    }
}
