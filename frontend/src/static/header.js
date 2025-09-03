import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

function Header() {
    return (
        <div>
            <Navbar className="purple-bg" data-bs-theme="black">
                <Container>
                    <Navbar.Collapse id="navbarScroll">

                        <Navbar.Brand href="/" className="white-br" >
                            <img
                                src="/download.png"
                                width="70"
                                height="70"
                                alt="MarketPlace"
                                style={{
                                    borderRadius: '20%',
                                    verticalAlign: 'middle',
                                }
                                }
                            />
                        </Navbar.Brand>
                        <div className="btns">
                            <button className="lang-btn">LV</button>
                            <button className="lang-btn">ENG</button>
                        </div>
                        <Nav>
                            <Nav.Link href="/catalog" className="link-text" >Katalogs</Nav.Link>
                            <Nav.Link href="/contacts" className="link-text" >kontakti</Nav.Link>
                            <Nav.Link href="/Sell" className="link-text" >Mani Sludinajumi</Nav.Link>
                        </Nav>
                        <Navbar.Text className="title">Auto Marketplace</Navbar.Text>
                        <div className="m-auto">
                            <button className="logIn-btn">LogIn</button>
                        </div>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;