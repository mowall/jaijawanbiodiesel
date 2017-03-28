import React from 'react';

export default class FAQ extends React.Component {
    render () {
      const faqImage = require('../../../images/faqs.png');
        return (
            <div className="col-md-9 contentScreen">
               <div className="row">
               	  <div className="col-md-12 biodieselPoliciesCss">
                    <br  />
                <img src={faqImage} className="img-responsive introImage" alt="FAQ'S Image"/>
                    <br />
                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                  <h4 className="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      #1  Is biodiesel used as a pure fuel or is it blended with petroleum diesel?
                    </a>
                  </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div className="panel-body">
                    Biodiesel can be used as a pure fuel or blended with petroleum in any percentage. BIODIESEL has demonstrated significant environmental benefits with a minimum increase in cost for fleet operations and other consume.
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      #2  How do biodiesel emissions compare to petroleum diesel?
                    </a>
                  </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="panel-body">
                    <p>
                      Biodiesel is the only alternative fuel to have fully completed the health effects testing requirements of the Clean Air Act. The use of biodiesel in a conventional diesel engine not equipped with new diesel aftertreatment results in substantial reduction of unburned hydrocarbons, carbon monoxide, and particulate matter compared to emissions from diesel fuel. In addition, the exhaust emissions of sulfur oxides and sulfates (major components of acid rain) from biodiesel are essentially eliminated compared to higher sulfur diesel.
                    </p>
                    <br />
                    <p>
                      Of the major exhaust pollutants, both unburned hydrocarbons and nitrogen oxides are ozone or smog forming precursors. The use of biodiesel in diesel engines not equipped with new diesel aftertreatment results in a substantial reduction of unburned hydrocarbons. Emissions of nitrogen oxides are either slightly reduced or slightly increased depending on the duty cycle of the engine and testing methods used. Based on engine testing, using the most stringent emissions testing protocols
                      required by EPA for certification of fuels or fuel additives in the US, the overall ozone forming potential of the speciated hydrocarbon emissions from biodiesel was nearly 50 percent less than that measured for diesel fuel.  New Technology Diesel Engines (i.e. those with PM traps and SCR technology required for on-road applications in the US after 2010) reduce emissions of BOTH PM and NOx with B20 over 90% than 2004 model year and make NTDEs as clean or cleaner than either gasoline or natural gas fueled engines.  And use of low carbon B20 in NTDEs make them the clean, green technology of the future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading " role="tab" id="headingThree">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      #3 Can I use biodiesel in my existing diesel engine?
                    </a>
                  </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div className="panel-body">
                      Biodiesel can be operated in any diesel engine with little or no modification to the engine or the fuel system. Biodiesel has a solvent effect that may release deposits accumulated on tank walls and pipes from previous diesel fuel storage. The release of deposits may clog filters initially and precautions should be taken. Ensure that only fuel meeting the biodiesel specification is used.
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading " role="tab" id="headingFour">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      #4 Can biodiesel help mitigate “global warming”?
                    </a>
                  </h4>
                </div>
                <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                  <div className="panel-body">
                      Biodiesel reduces net CO² emissions by 78 percent compared to petroleum diesel. This is due to biodiesel’s closed carbon cycle. The CO² released into the atmosphere when biodiesel is burned is recycled by growing plants, which are later processed into fuel..Is biodiesel safer than petroleum diesel? Scientific research confirms that biodiesel exhaust has a less harmful impact on human health than petroleum diesel fuel. Biodiesel emissions have decreased levels of polycyclic aromatic hydrocarbons (PAH) and nitrited PAH compounds that have been identified as potential cancer causing compounds. Test results indicate PAH compounds were reduced by 75 to 85 percent, with the exception of benzo(a)anthracene, which was reduced by roughly 50 percent. Targeted nPAH compounds were also reduced dramatically with biodiesel fuel, with 2-nitrofluorene and 1-nitropyrene reduced by 90 percent, and the rest of the nPAH compounds reduced to only trace levels.
                  </div>
                </div>
              </div>
              
            </div>
                  </div>
               </div>
            </div>
        );
    }
}
