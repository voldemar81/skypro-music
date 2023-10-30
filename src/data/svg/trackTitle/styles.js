import styled, { css, keyframes } from 'styled-components';

export const TrackTitleImg = styled.svg`
  width: 51px;
  height: 51px;
  margin-right: 16px;
  background-color: #313131;
  display: -webkit-box;
  display: flex;
  align-items: center;
  justify-content: center;
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

const bubble_out = keyframes`
    0%,
    to {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1);
    }
  }
`;

const animationPaused = css`
  animation-play-state: paused;
`;

export const PlayingDot = styled.div`
  width: 16px;
  height: 16px;
  background-color: #b672ff;
  border-radius: 8px;
  display: block;
  animation: ${bubble_out} 0.6s ease-in-out infinite both;
  ${({ $pause }) => $pause && animationPaused}`
;

export const TrackTitleWrapper = styled.div`
  display: inline-block;
  position: relative;
  margin: auto;
`;