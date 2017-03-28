import React from 'react';

export default class BioDieselFromPalmOil extends React.Component {
    render () {
    	const palmOilImage = require('../../../../images/palmoil.png');
        return (
            <div className="col-md-9 contentScreen">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <img src={palmOilImage} className="img-responsive introImage" alt="BioDiesel From Palm Oil Image"/>
                        <br />
                        <h3 className="defaultHeader">Source</h3>
                        <p>
                            Palm oil is obtained from the fruit of Palm oil tree. The palm fruit is the source of both palm oil (extracted from palm fruit) and palm kernel oil (extracted from the fruit seeds).
                        </p>
                        <br />
                        <p>
                            Palm oil itself is reddish because it contains a high amount of beta-carotene. It is used as cooking oil, to make margarine and is a component of many processed foods. Boiling it a few minutes destroys the carotenoids and the oil becomes white. Palm oil is one of the few vegetable oils relatively high in saturated fats (such as coconut oil) and thus semi-solid at room temperature.
                        </p>
                        <br />
                        <h3 className="defaultHeader">Chemical Composition</h3>
                        <p>
                            The palm oil and palm kernel oil are composed of fatty acids, esterified with glycerol just like any ordinary fat. Both are high in saturated fatty acids, about 50% and 80%, respectively. The oil palm gives its name to the 16 carbon saturated fatty acid palmitic acid found in palm oil; monounsaturated oleic acid is also a constituent of palm oil while palm kernel oil contains mainly lauric acid. Palm oil is the largest natural source of tocotrienol, part of the vitamin E family. Palm oil is also high in vitamin K and dietary magnesium.
                        </p>
                        <br />
                        <h3 className="defaultHeader">Environmental and Cultural Impacts</h3>
                        <p>
                            The demand for palm Oil is rising and is expected to escalate further especially for the purpose of production of biodiesel. Biodiesel is promoted as a form of renewable energy that greatly reduces net emission of carbon dioxide. It also decreases the impact of greenhouse.
                        </p>
                        <br />
                        <p>
                            Palm Oil biodiesel is also known as Palm Oil Methyl Ester. It is different from other types of Biodiesel in terms of molecule unsaturation. Palm Oil Methyl Ester (PME)is more saturated, which indicates that it has lower number of double carbon bonds in its molecule. For diesel engine applications, saturated fuels such as PME have high-ignition quality. However, they also harden at higher temperatures, making them difficult to use in cold weather.
                        </p>
                        <br />
                        <p>
                            The production and use of Biodiesel is promoted on a large scale as it is generated from renewable sources. The oil dependency and Greenhouse Gas emission are reduced to a large extent there is an increasing use of Biodiesel worldwide. PME’s rising importance as a biodiesel feedstock, it’s important to consider its combustion and operational performance.
                        </p>
                        <br />
                        <h3 className="defaultHeader">Operational Performance</h3>
                        <p>
                            While the benefits of using PME to reduce emissions have been proven in laboratory tests, its operational performance is still of concern to end users and the automotive industry. Oxidation stability and low-temperature fluidity are the main concerns.
                        </p>
                        <br />
                        <p>
                            PME oxidation stability has better performance than soy methyl esters and rapeseed methyl esters. PME also exceeds Europe’s EN 14214 specification. Both are because PME has fewer unsaturated molecules susceptible to oxidation through its double carbon bonds. Oxidative stability is important to engine performance because oxidation byproducts can cause harmful effects such as filter plugging, deposits and corrosion.
                        </p>
                        <br />
                        <p>
                            On the other hand, saturated molecules harden at higher temperatures. As the biodiesel cools down, solid crystals form which eventually cause fuel filter plugging. The temperature at which this occurs is known as the cold filter plug point (CFPP). This property is the major difficulty facing the use of pure PME (B100) in cold weather conditions, since CFPP of PME is 12 degrees Celsius (54 degrees Fahrenheit). To reduce the impact of low CFPP, PME is mainly used in blends with diesel fuel.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
