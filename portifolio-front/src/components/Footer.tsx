import styled from "styled-components";

const FooterDiv = styled.footer`
  background: #212121;
  width: 100%;
  height:50px;
  margin-top:15%;
  padding-top:1%;
`

const FooterP = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;  
`


function Footer() {
  return (
    <FooterDiv>
      <FooterP>&copy; 2021 José Henrique | Desenvolvedor FullStack/Mobile </FooterP>
    </FooterDiv>
  )
}

export default Footer;