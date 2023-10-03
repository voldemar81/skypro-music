import styled from 'styled-components';

export const PlayerBtnRepeatImg = styled.svg`
  width: 18px;
  height: 12px;
  path {
    fill: ${props =>
      props.$isLoop
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