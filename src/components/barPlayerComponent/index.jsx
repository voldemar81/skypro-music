import { PlayerControls } from '../playerControlComponent';
import { PlayerTrackPlay } from '../playerTrackComponent';
import * as S from './styles';


export const BarPlayer = ({
  music,
  isLoading,
  currentTrack,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  pause,
  setPause,
  ...restParams
}) => {
  return (
    <S.BarPlayer>
      <PlayerControls
        pause={pause}
        setPause={setPause}
        music={music}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        {...restParams}
      />
      <PlayerTrackPlay
        music={music}
        isLoading={isLoading}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </S.BarPlayer>
  );
};