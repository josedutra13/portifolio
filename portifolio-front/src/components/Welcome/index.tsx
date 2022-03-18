import { ReactComponent as Profile } from 'assets/img/profile.svg';
import {Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const WelcomeStyle = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  margin: 15% 0 0 10%;
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
  left: 150px;
  top: 324px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #828282;
  margin-bottom: 20px;
`

const ButtonCV = styled.button`
  width: 143px;
  height: 42px;
  left: 150px;
  top: 382px;
  background: var(--color-primary);
  color: #171717;
  border: none;
  margin-right: 10px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 30px
`

const ButtonContact = styled(ButtonCV)`
   width: 157px;
   height: 42px;
   color: #F9F9F9;
   background: #171717;
   border: 1px solid #333333;
   box-sizing: border-box;
`



function Welcome() {
    return (
        <WelcomeStyle>
            <Container>
                <Row>
                    <Col md={8} >
                        <H2Welcome>Olá, eu sou o José Henrique !</H2Welcome>
                        <Paragrath>Desenvolvedor Fullstack/Mobile</Paragrath>
                        <ButtonCV onClick={() => console.log('CLICADO MANÉ')} >Download cv</ButtonCV>
                        <ButtonContact >Entrar em contato</ButtonContact>
                    </Col>
                    <Col md={4}
                    ><Profile className='imagem-profile'></Profile></Col>
                </Row>
            </Container>
        </WelcomeStyle>

    );
}

export default Welcome;