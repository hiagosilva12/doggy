import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #3c4049 0% 0% no-repeat padding-box;
  opacity: 1;
  height: 22rem;
  width: 100%;
`;

export const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 10rem;
  width: 100%;
  padding-left: 7.5rem;
  padding-right: 2rem;
  opacity: 1;
`;

export const BoxConteudo = styled.div`
  height: 10rem;
  width: 100%;
  text-align: left;
  font: bold Malgun Gothic;
  color: #ffffff;
  opacity: 1;
  margin-right: 1vw;
`;

export const BoxList = styled.div`
  text-align: left;
`;

export const ImgLogo = styled.img`
  width: 50%;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 0.5rem;
  font: Malgun Gothic;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

export const ContainerCopyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2e2f34 0% 0% no-repeat padding-box;
  opacity: 1;
  height: 50px;
`;

export const ParagraphCopy = styled.p`
  text-align: center;
  font: normal normal normal 12px Malgun Gothic;
  letter-spacing: 0px;
  color: white;
  opacity: 1;
`;
