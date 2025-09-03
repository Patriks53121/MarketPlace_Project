import './home.css';
import List from '../API/list';

function Home() {

    const containerStyle = {
        position: 'relative', // Establishes a positioning context for the absolute child
        flex: 1              // Allows the container to grow and fill the space
    };

    const squareStyle = {
        backgroundColor: '#0088FF',
        position: 'absolute',
        top: '150px',
        left: '2.5%',
        right: '2.5%',
        bottom: '75px',
        borderRadius: '30px',
        overflowY: 'auto',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    };
    const squareStyle2 = {
        backgroundColor: '#007AE3',
        position: 'relative',
        top: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '98%',
        borderRadius: '30px',
        minHeight: '200px'
    }

    const pageStyle = {
        backgroundColor: '#90B2D1',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
    };

    const currentYear = new Date().getFullYear();
    const startYear = 1990;
    const years = [];
    for (let i = currentYear; i >= startYear; i--) {
        years.push(i);
    }

    return (

        <div>
            <div style={pageStyle} />
                <div style={squareStyle} className="square">
                    <div style={squareStyle2} className="square2">
                        <br/>
                        <div>
                            <label style={{ paddingLeft: '15px', paddingRight: "10px" }}>Cena: </label>
                            <input type="number" placeholder="No" className="input"/>
                            <span style={{fontSize: "1.5rem"}}>-</span>
                            <input type="number" placeholder="Līdz" className="input" />
                        </div>
                        <div>
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
                            <select className="input" style={{paddingRight: "30px"}}>
                                <option value=""></option>
                                <option value="Manuala">Manuala</option>
                                <option value="Automats">Automats</option>
                            </select>
                        </div>
                        <div>

                        </div>
                    </div>
                <List />
                </div>
        </div>

    );
}

export default Home;