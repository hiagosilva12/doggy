import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${(props) => props.imgfundo});
  background-size: 100%;
  background-repeat: no-repeat;
  height: 1000px;
  opacity: 1;
`;

export const BoxDoggy = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 54%;
  width: 30.9%;
  padding-left: 96px;
`;

export const TitleMain = styled.h1`
  font-size: 30px;
  text-align: left;
  letter-spacing: 0px;
  color: #6d4545;
  opacity: 1;
  margin-bottom: 0.4rem;
  font-size: 50px;
`;

export const TitleMainTwo = styled.h2`
  font-size: 35px;
  color: #6d4545;
  opacity: 1;
  margin-bottom: 1rem;
  font: Malgun Gothic, Regular;
`;

export const ParagraphMain = styled.p`
  font-size: 15px;
  letter-spacing: 0px;
  color: #6d4545;
  opacity: 1;
  margin-bottom: 1.5rem;
  font-size: 20px;
`;

export const BtnReserve = styled.button`
  font-size: 20px;
  background: #feaf02 no-repeat padding-box;
  background-size: 50% auto;
  border-radius: 4px;
  padding: 15px 30px;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  cursor: pointer;
`;

export const BoxCaes = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-right: 80px;
  padding-left: 80px;
  height: 35vh;
  margin-bottom: 3rem;
`;

export const BoxBoarding = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImgBoarding = styled.img`
  width: 224px;
`;

export const ParagraphBoarding = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #373737;
  opacity: 1;
  margin-top: 1rem;
`;

export const BtnBoarding = styled.button`
  background: #feaf02 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  text-align: left;
  padding: 15px 45px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  cursor: pointer;
  margin-top: 0.5rem;
`;

export const BoxCare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImgCare = styled.img`
  width: 224px;
`;

export const ParagraphCare = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #373737;
  opacity: 1;
  margin-top: 1rem;
`;

export const BtnCare = styled.button`
  background: #feaf02 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  text-align: left;
  padding: 15px 45px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  cursor: pointer;
  margin-top: 0.5rem;
`;

export const BoxTraining = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImgTraining = styled.img`
  width: 224px;
`;

export const ParagraphTraining = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #373737;
  opacity: 1;
  margin-top: 1rem;
`;

export const BtnTraining = styled.button`
  background: #feaf02 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  text-align: left;
  padding: 15px 45px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  cursor: pointer;
  margin-top: 0.5rem;
`;

export const BoxGrooming = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImgGrooming = styled.img`
  width: 224px;
`;

export const ParagraphGrooming = styled.p``;

export const BtnGrooming = styled.button`
  background: #feaf02 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  text-align: left;
  padding: 15px 45px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  cursor: pointer;
  margin-top: 0.5rem;
`;

export const ContainerFundoMainTwo = styled.div`
  background-image: url(${(props) => props.fundomaintwo});
  background-size: 100%;
  background-repeat: no-repeat;
  height: 640px;
`;

export const BoxDoggyHouse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 39%;
  height: 20%;
  padding-top: 9%;
  padding-bottom: 4%;
  padding-left: 94px;
`;

export const TitleDoggyHouse = styled.h1`
  margin-bottom: 15px;
  text-align: left;
  color: #373737;
  opacity: 1;
`;

export const ParagraphDoggyHouse = styled.p`
  padding-bottom: 10px;
  text-align: left;
  color: #373737;
  opacity: 1;
  font-size: 25px;
`;

export const BoxLorem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  float: left;
  padding-left: 4.9%;
  padding-right: 59%;
`;

export const ImgBolinha = styled.img`
  height: 25px;
  padding-top: 1rem;
`;

export const ParagraphLorem = styled.p`
  padding-left: 8px;
  text-align: left;
  opacity: 1;
  font-size: 18px;
  padding-top: 0.7rem;
`;

export const BoxWhatMain = styled.div`
  text-align: center;
  height: 450px;
  background: #feaf02 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const TitleWhatMain = styled.h1`
  padding-top: 46px;
  color: white;
`;

export const BoxVideos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 46px;
`;

export const BoxImgVideos = styled.div`
  background-image: url(${(props) => props.imgswhat});
  margin-right: 50px;
  background-color: white;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 280px;
  width: 385px;
`;

export const ImgPlay = styled.img`
  margin-top: 5rem;
  height: 71px;
  cursor: pointer;
`;

export const ParagraphVideos = styled.p`
  margin-top: 5.6rem;
  text-align: center;
  font: normal normal normal 16px Malgun Gothic;
  letter-spacing: 0px;
  color: #373737;
  opacity: 1;
`;
