import { Container } from 'react-bootstrap';
import styled from 'styled-components';
// import './styles.css';




const Abouth2 = styled.h2`
   font-weight: 700;
   font-size: 32px;
   line-height: 42px;
   text-align: center;
   margin:50px 0 30px 0;
`
const Aboutp = styled.p`
  width:50%;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  margin-left: 25%;
  color: #828282;
`

function About() {
    return (
        <Container>
            <Abouth2>Sobre mim</Abouth2>
            <Aboutp>
                Graduado em Ciência da Computação. Tenho experiência em projetos voltados pra web com a utilização das tecnologias Spring Boot , Angular8 e AngularJs , também possuo experiência com desenvolvimento mobile utilizando o flutter . Atualmente me dedicando no desenvolvimento mobile, e futuramente pretendo me aprimorar também no front-end web. Em busca de uma oportunidade de realocação.
            </Aboutp>
        </Container>
        // <div className="container">
        //     <div className="row">
        //         <div className="portifolio-text">
        //             <h2 className='text-center'>Sobre mim</h2>
        //             <p className='text-center'>
        //             Graduado em Ciência da Computação. Tenho experiência em projetos voltados pra web com a utilização das tecnologias Spring Boot , Angular8 e AngularJs , também possuo experiência com desenvolvimento mobile utilizando o flutter . Atualmente me dedicando no desenvolvimento mobile, e futuramente pretendo me aprimorar também no front-end web. Em busca de uma oportunidade de realocação.
        //           </p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default About;