import styled from 'styled-components';

export const PlayerBtnShuffleImg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #4e4e4e;
  path {
    fill: ${(props) =>
      props.$shuffleTrackEnable
        ? '#fff'
        : '#696969'};
  }
  &:hover path {
    fill: #acacac;
  }
  &:active path {
    fill: #fff;
  }
`;