import { PersonIcon } from '../../data/svg/personIcon';
import * as S from './styles';

export const SidebarPersonal = () => {
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
      <PersonIcon />
    </S.SidebarPersonal>
  );
};