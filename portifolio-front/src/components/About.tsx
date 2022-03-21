import Information from 'components/Information';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';


const Abouth2 = styled.h2`
   font-weight: 700;
   font-size: 32px;
   line-height: 42px;
   text-align: center;
   margin: 10% 0 2% 0;
`
const Aboutp = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  margin-left: 5%;
  color: #828282;
`

function About() {
    return (
        <Container id="about">
            <Abouth2>Sobre mim</Abouth2>
            <Aboutp>
                Graduado em Ciência da Computação. Tenho experiência em projetos voltados pra web com a utilização das tecnologias Spring Boot , Angular8 e AngularJs , também possuo experiência com desenvolvimento mobile utilizando o flutter . Atualmente me dedicando no desenvolvimento mobile, e futuramente pretendo me aprimorar também no front-end web. Em busca de uma oportunidade de realocação.
            </Aboutp>
            <Information />
        </Container>
    )
}

export default About;