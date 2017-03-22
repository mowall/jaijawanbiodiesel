import React from 'react';

export default class AboutFeedStock extends React.Component {
    render () {
    	const h2Style= {
    		borderBottom:"none"
    	};
        return (
            <div className="col-md-9">
            	<div className="row">
            		<div className="col-md-12">
            			<h2 className="defaultHeader" style={h2Style}>About FeedStock</h2>
            			<p>image goes here</p>
            			<p>
            				<b>
            					As we all know the phrase that "Change Is The Only Constant Factor", we believe in adopting and implementing those methods, processes and procedures that are less sensitive to any kind of change which affects our vicinity of work.
            				</b>
            			</p>
            			<br />
            			<h3 className="defaultHeader">MULTI FEEDSTOCK PROCESSING PLANT</h3>
            			<p>
            				The Competitive Edge which our valued clients are assured of is the simple fact that our processing plants are so designed that they can process a number of easily available raw feedstock (In the Indian Sub-Continent) in to Biodiesel meeting all Global Standards and crossing all the levels of feedstock constraints and rigidity.
            			</p>
            			<br />
            			<p>
            				Hence the equilibrium between the demands for feedstock in order to produce Biodiesel in tune with the plant capacity (viz. 5 MTPD, 10 MTPD, 20 MTPD....300 MTPD) is economically met and it provides an excellent payback period and therefore a short gestation period for the capital expenditure for our valued clients.
            			</p>
            			<br />
            			<h4 className="defaultHeader">Following are the list of feedstock's that can be used for the production of biodiesel</h4>
            			<ul className="defaultList">
            				<li>Jatropha Curcas</li>
            				<li>Pongamia Pinnata</li>
            				<li>Madhucha</li>
            				<li><a href="#/ricebranoil">Rice bran oil</a></li>
            				<li><a href="#/biodieselfromneemoil">Neem oil</a></li>
            				<li>Rubber seed oil</li>
            				<li>Sal seed oil</li>
            				<li><a href="#/biodieselfrompalmoil">Palm oil</a></li>
            				<li>Cottonseed oil</li>
            				<li><a href="#/rapeseedasafuel">Rape seed oil</a></li>
            				<li>Sunflower oil</li>
            				<li>Soyabean oil</li>
            				<li>Castor oil</li>
            				<li><a href="#/wastevegetableoil">Used Vegetable oil</a></li>
            				<li>Fish oil</li>
            				<li><a href="#/animaltallow">Animal fats/Tallows</a></li>
            			</ul>
            		</div>
            	</div>
            </div>
        );
    }
}
