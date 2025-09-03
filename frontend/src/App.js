import './App.css';
import Header from './static/header';
import Body from './static/body';
import Footer from './static/footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Catalog from './pages/catalog'
import Contacts from './pages/contacts';
import MySales from './pages/mySales';

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
                        <Route path="/" element={<Body Func={Home} />} />
                        <Route path="/catalog" element={<Body Func={Catalog} />} />
                        <Route path="/contacts" element={<Body Func={Contacts} />} />
                        <Route path="/Sell" element={<Body Func={MySales} />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;