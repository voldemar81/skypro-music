import { SidebarPersonal } from '../sidebarPersonalComponent';
import { SidebarPlayLists } from '../sidebarPlayListsComponent';
import * as S from './styles'

export const MainSidebar = ({ isLoading }) => {
  return (
    <S.MainSidebar>
      <SidebarPersonal/>
      <SidebarPlayLists isLoading={isLoading}/>
    </S.MainSidebar>
  );
}
