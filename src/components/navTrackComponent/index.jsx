import { Nav } from '../navComponent';
import { СenterBlock } from '../centerblockComponent';
import { MainSidebar } from '../mainSidebarComponent';
import * as S from './styles';

export const NavTrackSidebar = ({
  isLoading,
  music,
  error,
  isPlaying,
  setIsPlaying,
  currentTrack,
  setCurrentTrack,
}) => {
  return (
    <S.NavTrackSidebar>
      <Nav />
      <СenterBlock
        isLoading={isLoading}
        music={music}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        error={error}
      />
      <MainSidebar isLoading={isLoading} />
    </S.NavTrackSidebar>
  );
};