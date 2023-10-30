// import styled from 'styled-components';

// export const TrackPlayDisikeImg = styled.svg`
//   height: 13px;
//   stroke: #696969;
//   width: 14px;
//   fill: transparent;
//   path {
//     fill: #181818;
//     stroke:  #696969;
//   }
//   &:hover path {
//     stroke:  #acacac;
//   }
//   &:active path {
//     fill: #696969;
//     stroke:  #fff;
//   }
// `;



import styled from 'styled-components';

export const TrackPlayDisLikeImg = styled.svg`
  height: 13px;
  stroke: #696969;
  width: 14px;
  fill: transparent;
  path {
    fill: var(--container);
    stroke: var(--player-btn-repeat-shuffle);
  }
  &:hover path {
    stroke: var(--player-btn-repeat-shuffle-hover);
  }
  &:active path {
    fill: var(--like-active-fill);
    stroke: var(--like-active-stroke);
  }
`;