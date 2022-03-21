import { ReactComponent as Profile } from 'assets/img/profile.svg';
import {Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import {ReactComponent as LogoGit} from 'assets/img/logotipo-do-github.svg';
import {ReactComponent as CvLogo} from 'assets/img/documento.svg';

const WelcomeStyle = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  margin: 15% 0 0 10%;

  #profilePic{
    width:100%;
    height:100%;
  }
`;

const H2Welcome = styled.h2`
  width: 300px;
  height: 94px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  color: #F9F9F9;
  margin-bottom:5%;
`;

const Paragrath = styled.p`
  width: 337px;
  height: 23px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #828282;
  margin-bottom: 5%;
`

const ButtonCV = styled.button`
  width: 143px;
  height: 42px;
  background: var(--color-primary);
  color: #171717;
  border: none;
  margin-right: 10px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 6%;

  :hover{
    font-size: 14.5px;
  }

  #logoCV{
    margin-right:6%;
  }
`

const ButtonContact = styled(ButtonCV)`
   width: 143px;
   height: 42px;
   color: #F9F9F9;
   background: #171717;
   border: 1px solid #333333;
   box-sizing: border-box;


   #logoGit{
    opacity: 0.8;
    margin-right:6%;
   }
`



function Welcome() {
    return (
        <WelcomeStyle>
            <Container id='welcome'>
                <Row>
                    <Col md={8}>
                        <H2Welcome>Olá, eu sou o José Henrique !</H2Welcome>
                        <Paragrath>Desenvolvedor Fullstack/Mobile</Paragrath>
                        <ButtonCV><a target={"_blank"} href='https://drive.google.com/file/d/1x5fKDEDIBvm-a1lDexHT7D-m9vw522Vx/view?usp=sharing' rel="noreferrer"><CvLogo id='logoCV'/>Visualizar CV</a>  </ButtonCV>
                        <ButtonContact ><a target={"_blank"} href='https://github.com/josedutra13' rel="noreferrer"> <LogoGit id='logoGit'/>josedutra13</a> </ButtonContact>
                    </Col>
                    <Col md={4}>
                    <Profile id='profilePic'></Profile></Col>
                </Row>
            </Container>
        </WelcomeStyle>

    );
}

export default Welcome;