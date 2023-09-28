import styled from 'styled-components';

export const CenterBlockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: -webkit-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`;

export const Glass = styled.div`
  position: relative;
`;

export const Handle = styled.div`
  position: absolute;
  top: 4px;
  left: 9px;
`;

export const SearchText = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  &::placeholder {
    background-color: transparent;
    color: #fff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;