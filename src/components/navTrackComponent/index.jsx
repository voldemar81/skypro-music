import { Nav } from '../navComponent';
import { СenterBlock } from '../centerblockComponent';
import { MainSidebar } from '../mainSidebarComponent';
import * as S from './styles';


export const NavTrackSidebar = ({
  isLoading,
  ...props
}) => {
  return (
    <S.NavTrackSidebar>
      <Nav />
      <СenterBlock
      isLoading={isLoading}
        {...props}
      />
      <MainSidebar isLoading={isLoading} />
    </S.NavTrackSidebar>
  );
};


