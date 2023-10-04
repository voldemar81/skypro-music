import { useState} from 'react';
import { NavTrackSidebar } from '../../components/navTrackComponent';
import { Player } from '../../components/playerComponent';
import { Footer } from '../../components/footerComponent';
import * as S from './styles';


export const Main = ({
  isLoading,
  music,
  error,
  currentTrack,
  setCurrentTrack,
}) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [isBar, setIsBar] = useState(false);

  return (
    <S.Wrapper>
      <S.Container>
        <NavTrackSidebar
          isLoading={isLoading}
          music={music}
          setIsPlaying={setIsPlaying}
          setIsBar={setIsBar}
          error={error}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
        />
        {isBar && (
          <Player
            isLoading={isLoading}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
        )}
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};