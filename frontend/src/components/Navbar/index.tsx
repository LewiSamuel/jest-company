import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Session from '../../JestCompany/lib/Session';
import Dropdown from 'react-bootstrap/Dropdown';
import ModalPost from '../ModalPost';

function NavBar() {

    const [isAuth, setIsAuth] = useState(false);
    const [User, setUser] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        Session.getAll().then(result => {
            setIsAuth(!!result.id);
            setUser(result);
        })
    }, []);


    const logout = function () {
        Session.clear();
        setUser({})
        setIsAuth(false);
    }

    return (
        <Navbar bg="light" expand="lg">


            <Container className=''>
                <Navbar.Brand href="#home">
                    <img src="/favicon.png" width={30} />
                    <b style={{ color: '#0476c1' }}>Jest Company</b>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav className="">
                        {isAuth ?
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    {Session.get('Name')?.split(' ')[0]}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleShow}>Novo Post</Dropdown.Item>
                                    <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            :
                            <>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Cadastro</Nav.Link>
                            </>}
                    </Nav>

                </Navbar.Collapse>
            </Container>



            <ModalPost show={show} handleClose={handleClose} />


        </Navbar>
    );
}

export default NavBar;