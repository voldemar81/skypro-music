import styled, { css } from 'styled-components';

export const CenterBlockFilter = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: flex-start;
  margin-bottom: 51px;
  column-gap: 10px;
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

export const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  width: 144px;
  cursor: pointer;
  background-color: #181818;
  transition: background-color 0.5s ease;
  color: #fff;
  &:hover {
    border-color: #d9b6ff;
    color:  #d9b6ff;
    transition:
      color 0.3s ease,
      border-color 0.3s ease;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
    transition:
      color 0.3s ease,
      border-color 0.3s ease;
  }
`;

export const BtnTextActive = styled(FilterButton)`
  border-color: #ad61ff;
  color: #ad61ff;
  transition:
    color 0.3s ease,
    border-color 0.3s ease;
`;

export const FilterCounter = styled.div`
  width: 26px;
  height: 26px;
  color: #fff;
  background-color: #ad61ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -13px;
  right: -5px;
`;

export const FilterBlock = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const FilterContentMixin = css`
  position: absolute;
  top: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
  transition: 1s ease max-height;
  background:  #313131;
  z-index: 1;
`;

export const FilterContent = styled.div`
  width: 248px;
  max-height: ${({ $isAuthorMenuOpen }) => ($isAuthorMenuOpen ? '305px' : '0')};
  ${FilterContentMixin};
`;

export const FilterContentYear = styled.div`
  width: 144px;
  max-height: ${({ $isYearMenuOpen }) => ($isYearMenuOpen ? '305px' : '0')};
  ${FilterContentMixin};
`;

export const FilterContentGenre = styled.div`
  max-height: ${({ $isGenreMenuOpen }) => ($isGenreMenuOpen ? '305px' : '0')};
  width: 248px;
  ${FilterContentMixin};
`;

const FilterListMixin = css`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 28px;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  overflow-x: hidden;
  scrollbar-color: #fff #4b4949;
  a {
    color: #fff;
    transition: color 0.3s ease;
  }
  a:active,
  a:hover {
    color: #b672ff;
    text-decoration: underline;
    transition: color 0.3s ease;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #4b4949;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 2px;
    border: 2px solid #fff;
  }
`;

export const FilterListMenu = styled.ul`
  ${FilterListMixin};
  width: 180px;
  height: 237px;
`;

export const FilterListMenuItem = styled.li``

export const FilterListMenuLink = styled.a``

export const FilterListMenuYear = styled.ul`
  ${FilterListMixin};
  width: 116px;
  height: 237px;
  align-items: center;
`;

