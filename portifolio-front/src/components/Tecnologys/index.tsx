import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { ReactComponent as CssLogo } from "assets/img/technologys/css.svg";
import { ReactComponent as HtmlLogo } from "assets/img/technologys/html.svg";
import { ReactComponent as JsLogo } from "assets/img/technologys/js.svg";
import { ReactComponent as ReactLogo } from "assets/img/technologys/react.svg";
import { ReactComponent as FlutterLogo } from "assets/img/technologys/flutter.svg";
import { ReactComponent as SpringLogo } from "assets/img/technologys/spring.svg";


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
  margin: 17% 0 10% 15%;
`


function Tecnology() {

    const logos = [<CssLogo />, <HtmlLogo />, <JsLogo />, <ReactLogo />, <FlutterLogo />, <SpringLogo />];

    return (
        
        <Container>
            <TechH2>Minhas skills</TechH2>
            <Row>
                {logos.map(e => <Col sm={6} md={4} lg={2}><Techs>{e}</Techs></Col>)}
            </Row>
        </Container>)
}

export default Tecnology;