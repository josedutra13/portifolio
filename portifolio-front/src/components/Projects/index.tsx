import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import { ProjectsObject } from "StaticObject/projects";

const Ph2 = styled.h2`
   margin-top: 13%;
   font-family: 'DM Sans';
   font-style: normal;
   font-weight: 700;
   font-size: 32px;
   line-height: 42px;
   text-align: center;
`


const ProjectStyle = styled.div`
    .card{
        margin: 8% 0 10% 0;
        background: #333333;
        
    }
    
    .card-body{
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
    }

    .card-body:hover{
        border: 1px solid var(--color-primary);
    }

    .card-body:hover .card-title{
        color: var(--color-primary);
        font-size: 20px;
    }

    .card-img-top{
        width: 100%;
        height: 160px;
    }

   
    .card-title{
       margin: 3% 0 2% 0;  
       font-weight: 500;
       font-size: 18px;
       line-height: 23px;
       text-align: center;
    }
    
    .card-subtitle{
       font-weight: 400;
       font-size: 14px;
       line-height: 18px;
       text-align: center;
       color: #828282;
    }

    .btn{
      margin-top:10%;  
      width: 157px;
      height: 42px;
      color: #F9F9F9;
      background: #333333;
      border: 1px solid #171717;
      box-sizing: border-box; 
    }

    .card-body:hover .btn{
        width: 157px;
        height: 42px;
        background: var(--color-primary);
        color: #171717;
        border: none;
      }
`


function Projects() {
    const projects = ProjectsObject;

    return (
        <ProjectStyle>
            <Container id="projects">
                <Ph2>Projetos</Ph2>
                <Row>
                    {projects.map(e =>(
                            <Col key={e.id} md={6} lg={4}>
                            <Card>
                                <Card.Body>
                                <Card.Img variant="top" src={e.img} />
                                    <Card.Title>
                                        {e.titulo}
                                    </Card.Title>
                                    <Card.Subtitle>
                                        Tecnologias: {e.tecnologias}
                                    </Card.Subtitle>
                                    <a target={"_blank"} href={e.link} rel="noreferrer"><Button>Visualizar</Button></a>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                    ))}
                
                </Row>
            </Container>
        </ProjectStyle>

    );
}

export default Projects;