import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import * as S from './styles';

function NotFound() {
  const navigate = useNavigate();

  const mainButton = () => {
    navigate("/", { replace: true });
  };

  return (
    <S.Block404>
      <S.Sign>
        Page not found
      </S.Sign>
      <NavLink to='/'>
        <S.GoToMain>На главную</S.GoToMain>
      </NavLink>
    </S.Block404>
  );
}

export default NotFound;