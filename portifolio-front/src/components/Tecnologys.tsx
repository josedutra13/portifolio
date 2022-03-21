import { Container, Row, Col } from "react-bootstrap";
import { Logos } from "constantObjects/logos";
import styled from "styled-components";



const TechH2 = styled.h2`
   margin-top: 13%;
   font-family: 'DM Sans';
   font-style: normal;
   font-weight: 700;
   font-size: 32px;
   line-height: 42px;
   text-align: center;
`

const Techs = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 150px;
  height: 150px;
  background: #212121;
  margin: 17% 0 10% 18%;

  @media(max-width: 575px){
     margin-left: 35%;
  }
  @media(max-width: 414px){
    margin-left:29%;
}
`


function Tecnology() {

    const logos = Logos;

    return (
        <Container id="skills">
            <TechH2>Minhas skills</TechH2>
            <Row>
                {logos.map(e => <Col key={e.id} sm={6} md={4} lg={2}><Techs>{e.logo}</Techs></Col>)}
            </Row>
        </Container>)
}

export default Tecnology;