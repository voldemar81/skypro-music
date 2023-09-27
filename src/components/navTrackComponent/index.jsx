import { Nav } from '../navComponent';
import { СenterBlock } from '../centerblockComponent';
import { MainSidebar } from '../mainSidebarComponent';
import * as S from './styles';

export const NavTrackSidebar = ({ isLoading, music, getTracksError }) => {
  return (
    <S.NavTrackSidebar>
      <Nav />
      <СenterBlock
        isLoading={isLoading}
        music={music}
        getTracksError={getTracksError}
      />
      <MainSidebar isLoading={isLoading} />
    </S.NavTrackSidebar>
  );
};