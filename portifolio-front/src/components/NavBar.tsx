import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Style = styled.header`
  .navbar{
    background-color: #171717;
  }
  
  #responsive-navbar-nav{
      justify-content: end;
  }
  
  .navbar-brand{
     font-weight: 700;
     font-size: 26px;
  }

  .nav-link{
    margin-left: 1rem; 
    font-weight: 400; 
    font-size: 18px;
    text-align: start;
  }
`


function NavBar() {
    return (
        <Style>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed='top'>
                <Container>
                    <Navbar.Brand href="#welcome">Portfólio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#about">Sobre mim</Nav.Link>
                            <Nav.Link href="#projects">Projetos</Nav.Link>
                            <Nav.Link href="#skills">Minhas skills</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Style>

    );
}

export default NavBar;