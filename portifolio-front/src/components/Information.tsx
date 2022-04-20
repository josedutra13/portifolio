import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Icons } from "constantObjects/icon";

const CircleIcons = styled.div`
   display: flex;
   justify-content: center;
   align-items:center;
   margin: 5% 0 5% 39%;
   width:60px;
   height:60px;
   background: #212121;
   border-radius:30px;

   @media(max-width: 575px){
       margin-left: 43%;
   }
   @media(max-width: 414px){
       margin-left:40%;
   }
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

    const icons = Icons;

    return (
        <Container>
            <Row>
                {icons.map(icon => (
                    <Col key={icon.id} sm={6} md={6} lg={3}>
                        <CircleIcons>{icon.icon}</CircleIcons>
                        <Title>{icon.title}</Title>
                        <SubTitle>{icon.subtitle}</SubTitle>
                    </Col>))}

            </Row>
        </Container>

    );
}

export default Information;