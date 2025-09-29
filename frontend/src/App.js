import './App.css';
import Header from './static/header';
import Body from './static/body';
import Footer from './static/footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Catalog from './pages/catalog/catalog'
import Contacts from './pages/contacts/contacts';
import MySales from './pages/mySales/mySales';
import CarView from './pages/carView/carView';
import Login from "./pages/loginRegister/login";

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
                        <Route path="/catalog/:brand/:model/:series/:id" element={<Body Func={CarView} />} />
                        <Route path="/contacts" element={<Body Func={Contacts} />} />
                        <Route path="/Sell" element={<Body Func={MySales} />} />
                        <Route path="/login" element={<Body Func={Login} />} />

                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;