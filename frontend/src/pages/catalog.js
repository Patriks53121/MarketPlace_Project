import List from "../API/list";
import './catalog.css';
import { useState } from 'react';

function Catalog() {

    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedSeries, setSelectedSeries] = useState('');
    const [selectedClutchType, setSelectedClutchType] = useState('');

    const squareStyle2 = {
        backgroundColor: '#007AE3',
        position: 'relative',
        top: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '98%',
        borderRadius: '30px',
        minHeight: '120px'
    };

    const currentYear = new Date().getFullYear();
    const startYear = 1990;
    const years = [];
    for (let i = currentYear; i >= startYear; i--) {
        years.push(i);
    }

    const carData = {
        "bmw": {
            models: ["1.serija", "2.serija", "3.serija", "4.serija", "5.serija", "6.serija", "7.serija", "8.serija", "M serija", "X serija", "Z serija", "i serija"],
            series: {
                "1.serija": ["116", "118", "120", "130", "135", "140"],
                "2.serija": ["214", "216", "218", "220", "225", "228"],
                "3.serija": ["316", "318", "320", "323", "324", "325", "328", "330", "335", "340"],
                "4.serija": ["418", "420", "428", "430", "435", "440"],
                "5.serija": ["518", "520", "523", "524", "525", "528", "530", "535", "540", "545", "550"],
                "6.serija": ["630", "635", "640", "645", "650"],
                "7.serija": ["728", "730", "735", "740", "745", "750", "760"],
                "8.serija": ["840", "850"],
                "M serija": ["M2", "M3", "M4", "M5", "M6", "M7", "M8"],
                "Z serija": ["Z3", "Z4", "Z4 M"],
                "X serija": ["X1", "X2", "X3", "X4", "X5", "X6", "X7", "XM"],
                "i serija": ["i3", "i3s", "i8"]
            }
        },
        "audi": {
            models: ["A3", "A4", "A5", "A6"],
            series: {}
        },
        "mercedes": {
            models: ["A klase", "B klase"],
            series: {}
        }
    };

    const cluch = {
        manual: ["5", "6"],
        automat: ["5", "6", "7", "8", "9"]
    };

    const volume = ["1.4", "1.6", "1.8", "1.9", "2.0", "2.2", "2.3", "2.4", "2.5", "2.8", "3.0", "3.5", "4.0", "4.5", "5.0", "5.5", "6.0"];
    const bodyType = ["Sedans", "Universals", "Apvidus", "Kupeja", "Kabriolets", "Hečbeks"];
    const color = ["Melna", "Balta", "Zila", "Zala", "Sarkana", "Dzeltena", "Bruna", "Peleka", "Violeta", "Sudraba", "Custom"];

    const carBrands = Object.keys(carData);

    const handleBrandChange = (e) => {
        setSelectedBrand(e.target.value);
        setSelectedModel('');
        setSelectedSeries('');
    };

    const handleModelChange = (e) => {
        setSelectedModel(e.target.value);
        setSelectedSeries('');
    };

    return (
        <div style={squareStyle2} className="square2">
            <br/>
            <div className="top">
                <label style={{ paddingLeft: '15px', paddingRight: "10px" }}>Cena: </label>
                <input type="number" placeholder="No" className="input"/>
                <span style={{fontSize: "1.5rem"}}>-</span>
                <input type="number" placeholder="Līdz" className="input" />

                <label style={{ paddingLeft: '15px', paddingRight: "10px" }}>Marka: </label>
                <select
                    className="input"
                    style={{paddingRight: "30px"}}
                    value={selectedBrand}
                    onChange={handleBrandChange}
                >
                    <option value=""></option>
                    {carBrands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                </select>
                <label style={{ paddingLeft: '15px', paddingRight: "10px" }}>Modelis: </label>
                <select
                    className="input"
                    style={{paddingRight: "70px"}}
                    disabled={!selectedBrand}
                    value={selectedModel}
                    onChange={handleModelChange}
                >
                    <option value=""></option>
                    {selectedBrand && carData[selectedBrand].models.map(model => (
                        <option key={model} value={model}>{model}</option>
                    ))}
                </select>
                <label style={{ paddingLeft: '15px', paddingRight: "10px" }}>Serija: </label>
                <select
                    className="input"
                    style={{paddingRight: "30px"}}
                    disabled={!selectedModel}
                    value={selectedSeries}
                    onChange={(e) => setSelectedSeries(e.target.value)}
                >
                    <option value=""></option>
                    {selectedBrand && selectedModel && carData[selectedBrand].series[selectedModel] &&
                        carData[selectedBrand].series[selectedModel].map(series => (
                            <option key={series} value={series}>{series}</option>
                        ))
                    }
                </select>
                <label style={{ paddingLeft: '15px', paddingRight: "10px" }} >Nobraukums:</label>
                <input type="number" className="input" placeholder="No" style={{width: '120px'}}></input>
                <span style={{fontSize: "1.5rem"}}>-</span>
                <input type="number" className="input" placeholder="Lidz" style={{width: '140px'}}></input>
            </div>
            <div className="bottom">
                <label style={{paddingLeft: '15px', paddingRight: "10px"}}>Gads:</label>
                <select className="input" style={{paddingRight: "30px"}}>
                    <option value=""></option>
                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
                <span style={{fontSize: "1.5rem"}}>-</span>
                <select className="input" style={{paddingRight: "30px"}}>
                    <option value=""></option>
                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
                <label style={{paddingLeft: '15px', paddingRight: "10px"}}>Atrumkarba:</label>
                <select
                    className="input"
                    style={{paddingRight: "30px"}}
                    value={selectedClutchType}
                    onChange={(e) => setSelectedClutchType(e.target.value)}
                >
                    <option value="">Izvēlieties tipu</option>
                    <option value="manual">Manuālā</option>
                    <option value="automat">Automātiskā</option>
                </select>
                <label style={{paddingLeft: '15px', paddingRight: "10px"}}>Atrumi:</label>
                <select
                    className="input"
                    style={{paddingRight: "30px"}}
                    disabled={!selectedClutchType}
                >
                    <option value=""></option>
                    {selectedClutchType && cluch[selectedClutchType].map(gear => (
                        <option key={gear} value={gear}>{gear}</option>
                    ))}
                </select>
                <label style={{ paddingLeft: '15px', paddingRight: "10px" }}>Tilpums: </label>
                <select className="input" style={{paddingRight: "30px"}}>
                    <option value=""></option>
                    {volume.map(vol => <option key={vol} value={vol}>{vol}</option>)}
                </select>
                <span style={{fontSize: "1.5rem"}}>-</span>
                <select className="input" style={{paddingRight: "30px"}}>
                    <option value=""></option>
                    {volume.map(vol => <option key={vol} value={vol}>{vol}</option>)}
                </select>
                <label style={{ paddingLeft: '15px', paddingRight: "10px" }}>Virsbuve: </label>
                <select className="input" style={{paddingRight: "30px"}}>
                    <option value=""></option>
                    {bodyType.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
                <label style={{ paddingLeft: '15px', paddingRight: "10px" }}>Krasa: </label>
                <select className="input" style={{paddingRight: "30px"}}>
                    <option value=""></option>
                    {color.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
            </div>
            <List />
        </div>
    );
}

export default Catalog;