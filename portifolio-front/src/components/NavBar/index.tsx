import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Style = styled.div`
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
    font-weight: 400;
    font-size: 18px;
    text-align: end;
  }
`


function NavBar() {
    return (
        <Style>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed='top'>
                <Container>
                    <Navbar.Brand href="#welcome">Portifólio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#about" >Sobre mim</Nav.Link>
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