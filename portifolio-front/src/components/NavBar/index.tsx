import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Style = styled.div`
  .navbar{
    background-color: #171717;
  }

  .navbar-brand{
     font-weight: 700;
     font-size: 26px;
  }

  .nav-link{
    font-weight: 400;
    font-size: 18px;
  }
`


function NavBar() {
    return (
        <Style>
            <Navbar variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className='portifolio-title'>Portifólio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className='portifolio-links position-absolute top-25 end-0 translate-middle-x'>
                            <Nav.Link href="#about" >Sobre mim</Nav.Link>
                            <Nav.Link href="#projects">Projetos</Nav.Link>
                            {/* <Nav.Link href="#service">Serviços</Nav.Link> */}
                            <Nav.Link href="#skills">Minhas skills</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Style>

    );
}

export default NavBar;