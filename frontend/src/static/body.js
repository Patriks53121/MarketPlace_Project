function Body({ Func }) {

    const containerStyle = {
        position: 'relative',
        width: '1920',
        minHeight: '100vh',
        overflowX: 'hidden',
        overflowY: 'auto'
    };

    const squareStyle = {
        backgroundColor: '#0088FF',
        position: 'relative',
        top: '40px',
        left: '50%',
        width: 'min(1450px, calc(100vw - 40px))',
        minHeight: 'calc(100vh - 135px)',
        height: 'auto',
        transform: 'translateX(-50%)',
        borderRadius: '30px',
        overflowY: 'visible',
        overflowX: 'clip',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        marginBottom: '70px',
        paddingBottom: '20px'
    };

    const pageStyle = {
        backgroundColor: '#90B2D1',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '1920px',
        height: '100vh',
        zIndex: -1,
        overflowX: 'clip'
    };

    return(
        <div style={containerStyle}>
            <div style={pageStyle} />
            <div style={squareStyle} className="square">
                <Func/>
            </div>
        </div>
    );

}

export default Body;