import './App.css';
import Header from './static/header';
import Footer from './static/footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';


function App() {
    const appStyle = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    };

    const contentStyle = {
        flex: 1
    };

    return (
        <BrowserRouter>
            <div style={appStyle}>
                <Header />
                <div style={contentStyle}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;