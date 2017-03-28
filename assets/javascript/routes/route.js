import React from 'react';
import { createHashHistory } from 'history';
import { IndexRoute, Router, Route, useRouterHistory } from 'react-router';

const history = useRouterHistory(createHashHistory)();

import Container from '../container/index';
import Home from '../components/pages/home';
import CurrentResearch from '../components/pages/currentResearch';
import CompanyInformation from '../components/pages/companyInformation';
import GovernmentVision from '../components/pages/governmentVision';
import CompanyMission from '../components/pages/companyMission';
import FAQ from '../components/pages/faq';
import DeskOfMD from '../components/pages/deskOfMD';
import Contact from '../components/pages/contact';
import Production from '../components/pages/production';
import WhatIsBioDiesel from '../components/pages/biodiesel/whatIsBioDiesel';
import BioDieselHistory from '../components/pages/biodiesel/history';
import FutureFuel from '../components/pages/biodiesel/futureFuel';
import SWOTAnalysis from '../components/pages/biodiesel/swotAnalysis';
import FactsAndFigures from '../components/pages/biodiesel/factsAndFigures';
import AnimalTallow from '../components/pages/feedstock/animalTallow';
import BiodDieselFromNeemOil from '../components/pages/feedstock/bioDieselFromNeemOil';
import BiodDieselFromPalmOil from '../components/pages/feedstock/bioDieselFromPalmOil';
import RapeseedAsAFuel from '../components/pages/feedstock/rapeseedAsAFuel';
import RiceBranOil from '../components/pages/feedstock/riceBranOil';
import WasteVegetableOil from '../components/pages/feedstock/wasteVegetableOil';
import AboutFeedStock from '../components/pages/feedstock/aboutFeedStock';
import BiodieselPolicies from '../components/pages/biodieselPolicies';

export default class Root extends React.Component {
    render() {
        return (
            <Router history = {history}>
                <Route name='container' path='/' component={Container}>
                    <IndexRoute component={Home} />
                    <Route name='currentresearch' path='/currentresearch' component={CurrentResearch} />                    
                    <Route name='governmentvision' path='/governmentvision' component={GovernmentVision} />                    
                    <Route name='companymission' path='/companymission' component={CompanyMission} />                    
                    <Route name='faq' path='/faq' component={FAQ} />                    
                    <Route name='deskofmd' path='/deskofmd' component={DeskOfMD} />                    
                    <Route name='contact' path='/contact' component={Contact} />
                    <Route name='production' path='/production' component={Production} />
                    <Route name='whatisbiodiesel' path='/whatisbiodiesel' component={WhatIsBioDiesel} />                    
                    <Route name='biodieselhistory' path='/biodieselhistory' component={BioDieselHistory} />
                    <Route name='futurefuel' path='/futurefuel' component={FutureFuel} />
                    <Route name='swotanalysis' path='/swotanalysis' component={SWOTAnalysis} />
                    <Route name='factsandfigures' path='/factsandfigures' component={FactsAndFigures} />
                    <Route name='aboutfeedstock' path='/aboutfeedstock' component={AboutFeedStock} />
                    <Route name='animaltallow' path='/animaltallow' component={AnimalTallow} />
                    <Route name='biodieselfromneemoil' path='/biodieselfromneemoil' component={BiodDieselFromNeemOil} />
                    <Route name='biodieselfrompalmoil' path='/biodieselfrompalmoil' component={BiodDieselFromPalmOil} />
                    <Route name='rapeseedasafuel' path='/rapeseedasafuel' component={RapeseedAsAFuel} />
                    <Route name='ricebranoil' path='/ricebranoil' component={RiceBranOil} />
                    <Route name='wastevegetableoil' path='/wastevegetableoil' component={WasteVegetableOil} />
                    <Route name='biodieselpolicies' path='/biodieselpolicies' component={BiodieselPolicies} />
                    <Route name='companyinformation' path='/companyinformation' component={CompanyInformation} />
                </Route>
            </Router>
        );
    }
}
