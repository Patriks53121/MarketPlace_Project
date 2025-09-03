import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Footer(){
    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Text>
                        © {new Date().getFullYear()} Copyright: Auto MarketPlace
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
}
export default Footer;