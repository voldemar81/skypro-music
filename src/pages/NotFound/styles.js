import styled from 'styled-components';

export const Block404 = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 40px;
  background-color: var(--container);
  height: 100vh;
`;

export const Sign = styled.h1`
  font-size: 22px;
  color: var(--main-content);
  text-align: center;
`;

export const GoToMain = styled.p`
  background-color: #ad61ff;
  color: #fff;
  padding: 12px 15px;
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    color: #181818;
    background: #d6d6d6;
  }
`;

export const BlockPlayLists = styled.div`
  margin-top: -50px;
`;

