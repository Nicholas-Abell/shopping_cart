import { Container, Button, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container className='me-auto'>
                <Nav>
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                </Nav>
                <Button style={
                    {
                        width: '3rem', height: '3rem',
                        position: 'relative',
                    }}
                    variant='outline-primary'
                    className='rounded-circle d-flex justify-content-center align-items-center'>Push
                    <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                        style={{
                            color: 'white', width: '1.5rem',
                            height: '1.5rem', position: 'absolute',
                            bottom: -3, right: -5,
                        }}>3</div>
                </Button>
            </Container>
        </NavbarBs>
    )
}

export default Navbar;