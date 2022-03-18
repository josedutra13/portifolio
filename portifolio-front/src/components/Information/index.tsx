import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { ReactComponent as SmileIcon } from 'assets/icons/smileIcon.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/emailIcon.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phoneIcon.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagramIcon.svg';

const CircleIcons = styled.div`
   display: flex;
   justify-content: center;
   align-items:center;
   margin: 5% 0 5% 39%;
   width:60px;
   height:60px;
   background: #212121;
   border-radius:30px;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #F9F9F9;
  text-align: center
`

const SubTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #828282;
  text-align: center
`


function Information() {
    return (
        <Container>
            <Row>
                <Col sm={6} md={6} lg={3}>
                    <CircleIcons><SmileIcon /></CircleIcons>
                    <Title>Meu Nome</Title>
                    <SubTitle>José Henrique</SubTitle>
                </Col>
                <Col sm={6} md={6} lg={3}>
                    <CircleIcons><EmailIcon /></CircleIcons>
                    <Title>E-mail</Title>
                    <SubTitle>henriquedutra026@gmail.com</SubTitle>
                </Col>
                <Col sm={6} md={6} lg={3}>
                    <CircleIcons><InstagramIcon /></CircleIcons>
                    <Title>Instagram</Title>
                    <SubTitle>@zezrick</SubTitle>
                </Col>
                <Col sm={6} md={6} lg={3}>
                    <CircleIcons><PhoneIcon /></CircleIcons>
                    <Title>Telefone</Title>
                    <SubTitle>(61)99324-0442</SubTitle>
                </Col>
            </Row>
        </Container>

    );
}

export default Information;