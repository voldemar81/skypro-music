import styled from 'styled-components';

export const TrackPlayDisikeImg = styled.svg`
  height: 13px;
  stroke: #696969;
  width: 14px;
  fill: transparent;
  path {
    fill: #181818;
    stroke:  #696969;
  }
  &:hover path {
    stroke:  #acacac;
  }
  &:active path {
    fill: #696969;
    stroke:  #fff;
  }
`;