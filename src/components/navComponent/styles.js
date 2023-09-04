import styled from 'styled-components';

export const MainNav = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
  transition: background-color 0.5s ease;
`;

export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const LogoImage = styled.svg`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;

export const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  margin-bottom: 20px;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  cursor: pointer;
`;

export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`;

export const MenuContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: 1s ease max-height;
  background-color: #181818;
  z-index: 1;
  max-height: ${({ $menuVisible }) => ($menuVisible ? '220px' : '0')};
`;

export const LogoLetters = styled.path`
  fill: #fff;
`;

export const MenuList = styled.ul`
  padding: 18px 0 10px;
`;

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const MenuLink = styled.a`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;