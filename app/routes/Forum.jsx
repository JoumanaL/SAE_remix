import React from "react";
import styled from "@emotion/styled";

import FullButton from "./Buttons/FullButton"; 
const AddImage2 = "/assets/img/Forum/Forum-1.jpg";
const Programme21 = "/assets/img/Forum/Programme21.jpg";
const Programme20 = "/assets/img/Forum/Programme20.jpg";
const HeaderImage = "/assets/img/Forum/Header-Forum.jpg";

export function HeaderForum() {
  return (
    <HeaderWrapper>
      <LeftSide>
        <div>
          <h1 className="extraBold font60">
            <span className="darkColor">Forum</span> des associations franco-italiennes
          </h1>
          <HeaderP>
            Bienvenue sur notre page forum des associations. Découvrez le prochain forum des associations franco-italiennes et son programme.
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Voir Plus" />
          </BtnWrapper>
        </div>
      </LeftSide>

      <RightSide>
        <ImageWrapper>
          <Img src={HeaderImage} alt="Header Forum" />
        </ImageWrapper>
      </RightSide>
    </HeaderWrapper>
  );
}

export function Forum() {
  return (
    <Wrapper>
      <div className="container">
        <Advertising>
          <AddLeft>
            <AddLeftInner>
              <ImgWrapper>
                <img className="radius8" src={AddImage2} alt="Forum APIRP" />
              </ImgWrapper>
            </AddLeftInner>
          </AddLeft>

          <AddRight>
            <h4 className="font15 semiBold">Forum des associations italiennes virtuel</h4><br />
            <h2 className="font40 extraBold darkColor">APIRP 2020</h2>
            <p className="font12"><br />
              Le forum des associations franco-italiennes initialement prévu place Baudoyer à Paris, se déroulera cette année de façon virtuelle le 20 et 21 juin 2020...
            </p><br />
            <p className="font12">
              Plus d'infos sur les <a href="https://padlet.com/apirpassociation/apirp2020">renseignements</a>.
            </p><br />
            <p className="font12">
              L'intégralité du forum sera retransmise sur la page Facebook du Forum des Associations italiennes.
            </p>

            <ButtonsRow>
              <div style={{ width: "190px" }}>
                <FullButton title="Programme 20 juin" action={() => window.open(Programme20, "_blank")} />
              </div>
              <div style={{ width: "190px", marginLeft: "15px" }}>
                <FullButton title="Programme 21 juin" action={() => window.open(Programme21, "_blank")} />
              </div>
            </ButtonsRow>
          </AddRight>
        </Advertising>
      </div>
    </Wrapper>
  );

}
export default Forum;


// Styled Components

const Wrapper = styled.section`
  width: 100%;
`;

const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  display: flex;
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;

const AddLeft = styled.div`
  position: relative;
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
  }
`;

const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;

const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

const HeaderWrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    text-align: center;
    margin-top: 50px;
  }
`;

const RightSide = styled.div`
  width: 50%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
  }
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

