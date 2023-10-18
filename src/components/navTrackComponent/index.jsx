import { Nav } from '../navComponent';
import { СenterBlock } from '../centerblockComponent';
import { MainSidebar } from '../mainSidebarComponent';
import * as S from './styles';


export const NavTrackSidebar = ({
  isLoading,
  music,
  error,
  setIsPlaying,
  setIsBar,
  currentTrack,
  setCurrentTrack,
  pause,
}) => {
  return (
    <S.NavTrackSidebar>
      <Nav />
      <СenterBlock
        pause={pause}
        isLoading={isLoading}
        music={music}
        setIsPlaying={setIsPlaying}
        setIsBar={setIsBar}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        error={error}
      />
      <MainSidebar isLoading={isLoading} />
    </S.NavTrackSidebar>
  );
};