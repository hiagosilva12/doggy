import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";
import "../Global/style.css";
export function Main() {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        mains {
          imgfundomain {
            url
          }
          titlemain
          titlemaintwo
          paragraphmain
          btnreserve
          imgboarding {
            url
          }
          paragraphboarding
          imgcare {
            url
          }
          paragraphcare
          imgtraining {
            url
          }
          paragraphtraining
          imggrooming {
            url
          }
          paragraphgrooming
          btnmore
          imgfundomaintwo {
            url
          }
          titledoggyhouse
          paragraphdoggyhouse
          imgbolinha {
            url
          }
          paragraphlorem
          paragraphloremtwo
          paragraphthree
          paragraphfour
          titlewhatmain
          imgdoe {
            url
          }
          imgnew {
            url
          }
          imgplay {
            url
          }
        }
      }
    }
  `);

  const {
    imgfundomain,
    titlemain,
    titlemaintwo,
    paragraphmain,
    btnreserve,
    imgboarding,
    paragraphboarding,
    imgcare,
    paragraphcare,
    imgtraining,
    paragraphtraining,
    imggrooming,
    paragraphgrooming,
    btnmore,
    imgfundomaintwo,
    titledoggyhouse,
    paragraphdoggyhouse,
    imgbolinha,
    paragraphlorem,
    paragraphloremtwo,
    paragraphthree,
    paragraphfour,
    titlewhatmain,
    imgdoe,
    imgnew,
    imgplay,
  } = data.alldata.mains[0];

  return (
    <>
      <S.Container imgfundo={imgfundomain.url}>
        <S.BoxDoggy>
          <S.TitleMain>{titlemain}</S.TitleMain>
          <S.TitleMainTwo>{titlemaintwo}</S.TitleMainTwo>
          <S.ParagraphMain>{paragraphmain}</S.ParagraphMain>
          <S.BtnReserve>{btnreserve}</S.BtnReserve>
        </S.BoxDoggy>
      </S.Container>
      <S.BoxCaes>
        <S.BoxBoarding>
          <S.ImgBoarding src={imgboarding.url} alt="Boarding" />
          <S.ParagraphBoarding>{paragraphboarding}</S.ParagraphBoarding>
          <S.BtnBoarding>{btnmore}</S.BtnBoarding>
        </S.BoxBoarding>

        <S.BoxCare>
          <S.ImgCare src={imgcare.url} alt="Day Care" />
          <S.ParagraphCare>{paragraphcare}</S.ParagraphCare>
          <S.BtnCare>{btnmore}</S.BtnCare>
        </S.BoxCare>

        <S.BoxTraining>
          <S.ImgTraining src={imgtraining.url} alt="Training" />
          <S.ParagraphTraining>{paragraphtraining}</S.ParagraphTraining>
          <S.BtnTraining>{btnmore}</S.BtnTraining>
        </S.BoxTraining>

        <S.BoxGrooming>
          <S.ImgGrooming src={imggrooming.url} alt="Grooming" />
          <S.ParagraphGrooming>{paragraphgrooming}</S.ParagraphGrooming>
          <S.BtnGrooming>{btnmore}</S.BtnGrooming>
        </S.BoxGrooming>
      </S.BoxCaes>
      <S.ContainerFundoMainTwo fundomaintwo={imgfundomaintwo.url}>
        <S.BoxDoggyHouse>
          <S.TitleDoggyHouse>{titledoggyhouse}</S.TitleDoggyHouse>
          <S.ParagraphDoggyHouse>{paragraphdoggyhouse}</S.ParagraphDoggyHouse>
        </S.BoxDoggyHouse>

        <S.BoxLorem>
          <S.ImgBolinha src={imgbolinha.url} alt="Bolinha Amarela" />
          <S.ParagraphLorem>{paragraphlorem}</S.ParagraphLorem>
        </S.BoxLorem>

        <S.BoxLorem>
          <S.ImgBolinha src={imgbolinha.url} alt="Bolinha Amarela" />
          <S.ParagraphLorem>{paragraphloremtwo}</S.ParagraphLorem>
        </S.BoxLorem>

        <S.BoxLorem>
          <S.ImgBolinha src={imgbolinha.url} alt="Bolinha Amarela" />
          <S.ParagraphLorem>{paragraphthree}</S.ParagraphLorem>
        </S.BoxLorem>

        <S.BoxLorem>
          <S.ImgBolinha src={imgbolinha.url} alt="Bolinha Amarela" />
          <S.ParagraphLorem>{paragraphfour}</S.ParagraphLorem>
        </S.BoxLorem>
      </S.ContainerFundoMainTwo>

      <S.BoxWhatMain>
        <S.TitleWhatMain>{titlewhatmain}</S.TitleWhatMain>
        <S.BoxVideos>
          <S.BoxImgVideos imgswhat={imgdoe.url}>
            <S.ImgPlay src={imgplay.url} alt="Play" />
            <S.ParagraphVideos>Jane Doe, New York</S.ParagraphVideos>
          </S.BoxImgVideos>
          <S.BoxImgVideos imgswhat={imgnew.url}>
            <S.ImgPlay src={imgplay.url} alt="Play" />
            <S.ParagraphVideos>Jane Doe, New York</S.ParagraphVideos>
          </S.BoxImgVideos>
        </S.BoxVideos>
      </S.BoxWhatMain>
    </>
  );
}
