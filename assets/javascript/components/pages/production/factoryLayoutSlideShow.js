import React from 'react';

export default class FactoryLayoutSlideShow extends React.Component {
    render () {
    	const factoryLayoutImage1 = require('../../../../images/factoryLayoutImage1.jpg');
    	const factoryLayoutImage2 = require('../../../../images/factoryLayoutImage2.jpg');
    	const factoryLayoutImage3 = require('../../../../images/factoryLayoutImage3.jpg');
        return (
            <div className="col-md-12">
                <h2 className='defaultHeader'>BIODIESEL-A TYPICAL FACTORY LAY OUT</h2>
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
    				
   					<ol className="carousel-indicators">
    					<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
    					<li data-target="#carousel-example-generic" data-slide-to="1"></li>
    					<li data-target="#carousel-example-generic" data-slide-to="2"></li>
  					</ol>

  					
  					<div className="carousel-inner" role="listbox">
    					<div className="item active">
    						<img src={factoryLayoutImage1} className="img-responsive" alt="factoryLayoutImage1"/>
    					</div>
    					<div className="item">
    						<img src={factoryLayoutImage2} className="img-responsive" alt="factoryLayoutImage2"/>
    					</div>
    					<div className="item">
    						<img src={factoryLayoutImage3} className="img-responsive" alt="factoryLayoutImage3"/>
    					</div>
    
  					</div>

   					
  					<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    					<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    					<span className="sr-only">Previous</span>
  					</a>
  					<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    					<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    					<span className="sr-only">Next</span>
  					</a>
				</div>
				<br />
            </div>
        );
    }
}
