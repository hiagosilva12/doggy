import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";
import "../Global/style.css";

export function Footer() {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        footers {
          imglogofooter {
            url
          }
          titlelocation
          paragraphnorth
          paragraphnumber
          paragraphnumbertwo
          paragraphemail
          titlecare
          paragraphmonday
          paragraphsaturday
          titlelinks
          paragraphhome
          paragraphabout
          paragraphservices
          paragraphreservation
          paragraphcontatos
          titlesociais
          paragraphtwitter
          paragraphfacebook
          paragraphgoogle
          paragraphpinterest
          paragraphcopyright
        }
      }
    }
  `);
  const {
    imglogofooter,
    titlelocation,
    paragraphnorth,
    paragraphnumber,
    paragraphnumbertwo,
    paragraphemail,
    titlecare,
    paragraphmonday,
    paragraphsaturday,
    titlelinks,
    paragraphhome,
    paragraphabout,
    paragraphservices,
    paragraphreservation,
    paragraphcontatos,
    titlesociais,
    paragraphtwitter,
    paragraphfacebook,
    paragraphgoogle,
    paragraphpinterest,
    paragraphcopyright,
  } = data.alldata.footers[0];

  return (
    <>
      <S.Container>
        <S.BoxLogo>
          <S.ImgLogo src={imglogofooter.url} alt="Logo" />
        </S.BoxLogo>

        <S.BoxConteudo>
          <S.Title>{titlelocation}</S.Title>
          <S.BoxList>
            <S.Paragraph>{paragraphnorth}</S.Paragraph>
            <S.Paragraph>{paragraphnumber}</S.Paragraph>
            <S.Paragraph>{paragraphnumbertwo}</S.Paragraph>
            <S.Paragraph>{paragraphemail}</S.Paragraph>
          </S.BoxList>
        </S.BoxConteudo>

        <S.BoxConteudo>
          <S.Title>{titlecare}</S.Title>
          <S.BoxList>
            <S.Paragraph>{paragraphmonday}</S.Paragraph>
            <S.Paragraph>{paragraphsaturday}</S.Paragraph>
          </S.BoxList>
        </S.BoxConteudo>

        <S.BoxConteudo>
          <S.Title>{titlelinks}</S.Title>
          <S.BoxList>
            <S.Paragraph>{paragraphhome}</S.Paragraph>
            <S.Paragraph>{paragraphabout}</S.Paragraph>
            <S.Paragraph>{paragraphservices}</S.Paragraph>
            <S.Paragraph>{paragraphreservation}</S.Paragraph>
            <S.Paragraph>{paragraphcontatos}</S.Paragraph>
          </S.BoxList>
        </S.BoxConteudo>

        <S.BoxConteudo>
          <S.Title>{titlesociais}</S.Title>
          <S.BoxList>
            <S.Paragraph>{paragraphtwitter}</S.Paragraph>
            <S.Paragraph>{paragraphfacebook}</S.Paragraph>
            <S.Paragraph>{paragraphgoogle}</S.Paragraph>
            <S.Paragraph>{paragraphpinterest}</S.Paragraph>
          </S.BoxList>
        </S.BoxConteudo>
      </S.Container>
      <S.ContainerCopyright>
        <S.ParagraphCopy>{paragraphcopyright}</S.ParagraphCopy>
      </S.ContainerCopyright>
    </>
  );
}
