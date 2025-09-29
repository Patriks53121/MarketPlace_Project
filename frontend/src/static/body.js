import './body.css';

function Body({ Func }) {

    const containerStyle = {
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        overflowX: 'hidden',
        overflowY: 'auto',
        paddingBottom: '10px'
    };

    const pageStyle = {
        backgroundColor: '#90B2D1',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflowX: 'hidden'
    };

    return(
        <div style={containerStyle}>
            <div style={pageStyle} />
            <div className="square">
                <Func/>
            </div>
        </div>
    );

}

export default Body;