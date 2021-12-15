import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";
export function Header() {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {
          imglogo {
            url
          }
          paragraphhome
          paragraphabout
          paragraphreserva
          paragraphservicos
          paragraphcontatos
          imgtel {
            url
          }
          paragraphnumber
        }
      }
    }
  `);

  const {
    imglogo,
    paragraphhome,
    paragraphabout,
    paragraphreserva,
    paragraphservicos,
    paragraphcontatos,
    imgtel,
    paragraphnumber,
  } = data.alldata.headers[0];

  return (
    <>
      <S.Container>
        <S.BoxLogo>
          <S.ImgLogo src={imglogo.url} alt="Logo" />
        </S.BoxLogo>
        <S.List>
          <S.Paragraphs>{paragraphhome}</S.Paragraphs>
          <S.Paragraphs>{paragraphabout}</S.Paragraphs>
          <S.Paragraphs>{paragraphreserva}</S.Paragraphs>
          <S.Paragraphs>{paragraphservicos}</S.Paragraphs>
          <S.Paragraphs>{paragraphcontatos}</S.Paragraphs>
          <S.ImgTel src={imgtel.url} alt="Icon Tel" />
          <S.Paragraphs>{paragraphnumber}</S.Paragraphs>
        </S.List>
      </S.Container>
    </>
  );
}
