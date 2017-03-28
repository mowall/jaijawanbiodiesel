import React from 'react';

export default class AnimalTallow extends React.Component {
    render () {
      const h2Style= {
            borderBottom:"none"
      };
        return (
            <div className="col-md-9 contentScreen">
            	<div className="row">
            		<div className="col-md-12">
            			<h2 className="defaultHeader" style={h2Style}>Animal Tallow</h2>
            			<p>image here</p>
            			<br />
            			<p>
            				Animal Tallow used for production of Biodiesel.
            			</p>
            			<br />
            			<p>
            				Animal Tallow can be used for biodiesel production as easily as Plant Oils. About 14 MT of Tallow is available globally. Tallow as a unique feedstock has certain properties that are hared to reproduce from plant oils.
            			</p>
            			<br />
            			<p>
            				It has some advantages and certain disadvantages:
            			</p>
            			<dl className="defaultDescList">
            				<dt>Advantages:</dt>
            				<dd>
            					Animal Tallow has higher Cetane Number than Plant Oil: Biodiesel production from Animal Tallow is cleaner and has an efficient burning in diesel engines as it has a high Cetane number.
            				</dd>
            				<dt>Disadvantages:</dt>
            				<dd>
            					Animal Tallow has High Cloud Point. Biodiesel produced from Animal Tallow tends to crystallize out at much higher temperatures than biodiesel derived from Plant oils, because of the level of saturation present in Animal Tallow.
            				</dd>
            			</dl>
            			<br />
            			<br />
            			<p>
            				Animal Tallow has High Cloud Point. Biodiesel produced from Animal Tallow tends to crystallize out at much higher temperatures than biodiesel derived from Plant oils, because of the level of saturation present in Animal Tallow.
            			</p>
            			<br />
            			<p>
            				An analysis has been published by Argent Energy from a study commissioned by Technical University of GRAZ that claims that:
            			</p>
            			<br />
            			<p>
            				"Regardless of the setting of system boundaries biodiesel from tallow and used vegetable oil performs better than fossil diesel and other sorts of biodiesel. The ecological footprint (SPI) of different sorts of biodiesel rises from -1,2 m²a/MJ combustion energy for biodiesel from used vegetable oil (the negative value signifies the large positive impact of the replacement of fossil glycerol by the byproduct of this production) to a value between -1,2 and 2,8 m²a/MJ (depending on the scenario) for tallow methyl ester up to 10,3 m²a/MJ for RME (rapeseed methyl ester) compared to 26,1 m²a/MJ for fossil diesel."
            			</p>
            			<br />
            			<p>
            				This shows that biodiesel from tallow has a much lower impact than biodiesel from rapeseed. To reach this conclusion the study assumes that there are no environmental impacts whatever involved in producing the tallow. This is justified by declaring the tallow to be a pure waste stream and allocating all environmental impacts of animal production to the meat products. Further, it assumes that the glycerol produced as co-product substitutes for fossil derived glycerol and claims an additional environmental benefit as a result.
            			</p>
            		</div>
            	</div>
            </div>
        );
    }
}
