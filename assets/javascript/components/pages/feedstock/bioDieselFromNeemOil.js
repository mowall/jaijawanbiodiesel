import React from 'react';

export default class BioDieselFromNeemOil extends React.Component {
    render () {
        const neemOilImage = require('../../../../images/neemoil.png');
        return (
            <div className="col-md-9 contentScreen">
            	<div className="row">
            		<div className="col-md-12">
            			<br />
                            <img src={neemOilImage} className="img-responsive introImage" alt="Bio Diesel From Neem Oil Image"/>
            			<br />
            			<h3 className="defaultHeader">Neem Oil as a Biofuel</h3>
            			<p>
            				Neem oil is a vegetable oil pressed from fruits and seeds of neem, an evergreen tree which is widespread to the Indian Subcontinent and in many tropical areas.
            			</p>
            			<br />
            			<h3 className="defaultHeader">Characteristics:</h3>
            			<ul className="defaultList">
            				<li>
            					Neem oil is Light to Dark Brown in color, Bitter in taste and has a strong odor.
            				</li>
            				<li>
            					It comprises of Triglyceride and Triterpenoid compounds.
            				</li>
            				<li>
            					Neem Oil is Hydrophobic in nature and in order to emulsify it in water for application purpose.
            				</li>
            				<li>
            					Neem Oil contains steroids (Campesterol, beta-sitosterol, stigmasterol) and a plethora of Triterpenoid.
            				</li>
            			</ul>
            			<br />
            			<h3 className="defaultHeader">Method of Extraction</h3>
            			<br />
            			<p>
            				The method used such as pressing (expelling) or solvent extraction is likely to affect the composition of oil as the methods that are used are unlikely to remove the same mix of components in the same proportion. Neem Oil can be obtained through pressing (crushing) of the seed kernel through cold pressure or through a process incorporating temperature controls.
            			</p>
            			<br />
            			<p>
            				Neem Oil can also be obtained from solvent extraction of the neem seed, fruit, oilcake or kernel. A large industry in India extracts the oil remaining in the seed cake using hexane. This solvent-extracted oil is of a lower quality as compared to the cold pressed oil and is mostly used for soap manufacturing. Neem cake is a by-product obtained in the solvent extraction process for neem oil.
            			</p>	
            		</div>
            	</div>
            </div>
        );
    }
}
