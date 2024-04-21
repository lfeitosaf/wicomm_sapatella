import AdImg from "../../assets/image 2.png";
import * as S from "./style";

const MiddleAd = () => {
  return (
    <S.MainDiv>
      <S.AdSection>
        <S.AdTitle>#SuperBazar</S.AdTitle>
        <S.SpanDiv>
          <S.AdSpan>até</S.AdSpan>
          <S.AdSecondTitle>50% OFF</S.AdSecondTitle>
        </S.SpanDiv>
      </S.AdSection>
      <img src={AdImg} />
    </S.MainDiv>
  );
};

export default MiddleAd;
