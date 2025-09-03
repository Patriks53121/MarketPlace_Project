function Body({ Func }) { // Changed from Body(Func) to Body({ Func })

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

    const pageStyle = {
        backgroundColor: '#90B2D1',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
    };

    return(
        <div>
            <div style={pageStyle} />
            <div style={squareStyle} className="square">
                <Func/>
            </div>
        </div>
    );

}

export default Body;