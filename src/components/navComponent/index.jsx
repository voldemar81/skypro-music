import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useContext} from 'react';
import { UserContext } from '../../contexts/UserContext';
import { LogoImg } from '../../data/svg/logoImg';
import * as S from './styles';


export const Nav = () => {
  const { setUser } = useContext(UserContext);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const menuAppear = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <S.MainNav>
      <S.NavLogo>
        <NavLink to='/'>
          <LogoImg />
        </NavLink>
      </S.NavLogo>
      <S.NavBurger onClick={menuAppear}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>

      <S.MenuContent $menuVisible={menuVisible}>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink to='/'>
              Главное
            </S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to='/favorites'>
              Мой плейлист
            </S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink
              to='/login'
              onClick={handleLogout}
            >
              Выйти
            </S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.MenuContent>
     </S.MainNav>
  );
};