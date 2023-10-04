import { PlayerControls } from '../playerControlComponent';
import { PlayerTrackPlay } from '../playerTrackComponent';
import * as S from './styles';


export const BarPlayer = ({
  isLoading,
  currentTrack,
  setCurrentTrack,
  ...restParams
}) => {
  return (
    <S.BarPlayer>
      <PlayerControls
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        {...restParams}
      />
      <PlayerTrackPlay
        isLoading={isLoading}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
      />
    </S.BarPlayer>
  );
};