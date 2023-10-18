import styled, { css } from 'styled-components';

export const Timer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  background-color: #181818;
`;

export const TimerData = styled.p``;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: ${({ $playing }) => ($playing ? '5px' : '8px')};
  background-color: #d9d9d9;
  position: relative;
  cursor: pointer;
  &:hover {
    height: ${({ $playing }) => ($playing ? '8px' : '5px')};
  }
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: #b672ff;
  border-radius: 3px;
`;