import React from 'react';

export default class Introduction extends React.Component {
    render () {
        const govtMissionImage = require('../../../../images/governmentmission.png'); 
        return (
            <div className="col-md-12">
              <br />
              <img src={govtMissionImage} className="img-responsive introImage" alt="Government Mission Image"/>
            	<h2 className="defaultHeader">BioDiesel Programme</h2>
              <p>
              Minister for Petroleum and Natural Gas Dharmendra Pradhan on Monday launched the 
              marketing of high speed diesel blended with biodiesel at select retail outlets of 
              public sector oil companies to mark Indias celebration of <b>World Bio Fuel Day</b>.
              Select filling stations of Hindustan Petroleum will offer the bio- diesel blended 
              fuel in New Delhi and Vishakhapatnam while Bharat Petroleum will make its offering 
              of the blended fuel in Haldia. Similarly, Indian Oil Corporation, the countrys biggest 
              oil company, will market the blended diesel at select retail outlets in Vijayawada.
              </p> 
              <br />
              <p>
              Pradhan regarded it as a path-breaking step in Indias retail sector for launching 
              BioDiesel B5 blend for diesel consumers.The fuel is more eco-friendly than normal diesel.
              The fuel was launched as part of the green initiative by Pradhan at Hindustan Petroleums
              retail outlet in New Delhi.He also launched the sale of bio-diesel blended high speed 
              diesel in other cities through live streaming from the conference hall of the MoP & NG at
              Shastri Bhavan in Delhi.
              </p>
              <br />
              <p>
              Recently, the Ministry of Petroleum and Natural gas has permitted direct sale of BioDiesel
              (B100) to bulk consumers like Railways, shipping and State Road Transport Corporations.
			  The Ethanol Blended Petrol programme (EBP) is also being promoted by the ministry in which 
			  ethanol blending in petrol is going up from 5-10 per cent based on the availability of 
			  ethanol. Pradhan said promoting and encouraging biofuels will not only reduce the import of
			  fossil fuel but also save foreign exchange and emphasise on <b>Make in India</b> mission. 
			  Biofuels are renewable, biodegradable, sustainable and environmental friendly.
			  More importantly, these programmes will connect agrarian community with direct cash flow.
              </p>
              <br />
              <p>
              Internationally, August 10 is observed as <b>World Bio Diesel Day</b> in Germany and many 
              other countries to mark the demonstration of the diesel engine by Rudolf Diesel on various 
              vegetable oils way back in 1893. In 1900 when he demonstrated the engine running on groundnut 
              oil in Paris he made a prophetic statement which reads: " My engine today is running on diesel 
              but a day will come when all the fossil fuels will be over, but my The bio- diesel B 5 blend 
              will be sold to customers in some retail outlets of state- owned oil marketing companies engine 
              will continue to run." Central Railway has also successfully completed its first year of 
              bio-diesel production at its workshop at Parel in Mumbai producing nearly 20,000 litres of 
              this green fuel with an aim to provide cleaner alternatives for its diesel locomotives. The 
              workshop is reported to be producing 1,500 litres of bio-diesel per month (since August 2014)
              from edible oils and looking ahead to enhance this production, though a shortage of raw material
              such as edible oil is a hurdle.
              </p>
              <br />
              <br />
            </div>
        );
    }
}
