import styled, { css } from 'styled-components';

export const MainCenterBlock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 49px;
`;

export const CenterBlockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;

export const CenterBlockContent = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const PlaylistTitleCol = css`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`;

export const Col01 = styled.div`
  width: 447px;
  ${PlaylistTitleCol};
`;

export const Col02 = styled.div`
  width: 321px;
  ${PlaylistTitleCol};
`;

export const Col03 = styled.div`
  width: 245px;
  ${PlaylistTitleCol};
`;

export const Col04 = styled.div`
  width: 60px;
  text-align: end;
  ${PlaylistTitleCol};
`;

export const PlaylisTitleSvg = styled.svg`
  circle {
    fill: transparent;
    stroke:  #696969;
  }
  path {
    fill: transparent;
    stroke: #696969;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 24px;
  color: red;
`;

export const Img = styled.img`
  margin-top: 30px;
  max-width: 200px;
`;