import styled, { css, keyframes } from 'styled-components';

export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
`;

export const TrackPlayerContain = styled.div`
  width: auto;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const TrackPlayerImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  grid-row: 1;
  -ms-grid-row-span: 2;
  grid-column: 1;
  grid-area: image;
`;

export const TrackPlayerBlock = styled.div``

export const TrackPlaySvg = styled.svg`
  rect {
    fill: #313131;
  }
  path {
    stroke: #4e4e4e;
  }
  ellipse {
    stroke: #4e4e4e;
  }
`;

const blink = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }`;

export const SkeletonIcon = styled.div`
  grid-area: image;
  width: 51px;
  height: 51px;
  margin-right: 12px;
  background-color: #313131;
  animation: ${blink} 1s infinite alternate;
`;

const SkeletonMixin = css`
  width: 59px;
  height: 15px;
  background-color: #313131;
  animation: ${blink} 1s infinite alternate;
`;

export const SkeletonAuthor = styled.div`
  ${SkeletonMixin};
  grid-row: 1;
  grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;

export const SkeletonAlbum = styled(SkeletonAuthor)`
  grid-area: album;
`;

export const TrackPlayAuthor = styled.div`
  grid-row: 1;
  grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;

export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  white-space: nowrap;
`;

export const TrackPlayAlbum = styled.div`
  grid-row: 2;
  grid-column: 2;
  grid-area: album;
  min-width: 49px;
`;

export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #fff;
  white-space: nowrap;
`;

export const TrackPlayLikesDisplay = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`;

const BtnIconMixin = `css
cursor: pointer;
&:hover svg {
    fill: transparent;
    stroke: #acacac;
    }
&:active svg {
    fill: #696969;
    stroke: #fff;
    }
`;

export const TrackPlayLike = styled.div`
  padding: 5px;
  cursor: pointer;
  ${BtnIconMixin}
`;

export const TrackPlayDislike = styled(TrackPlayLike)`
  margin-left: 28.5px;
`;

const PathPlayLikesMixin = css`
  width: 14px;
  fill: transparent;
  path {
    fill: #181818;
    stroke: #696969;
  }
  &:hover path {
    stroke: #acacac;
  }
  &:active path {
    fill: #696969;
    stroke: #fff;
  }
`;

export const TrackPlayLikeSvg = styled.svg`
  height: 12px;
  stroke: #4e4e4e;
  ${PathPlayLikesMixin}
`;

export const TrackPlayDislikeSvg = styled.svg`
  height: 13px;
  stroke: #696969;
  ${PathPlayLikesMixin}
`;