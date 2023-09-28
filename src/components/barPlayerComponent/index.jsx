import { PlayerControls } from '../playerControlComponent';
import { PlayerTrackPlay } from '../playerTrackComponent';
import * as S from './styles';

export function BarPlayer({ isLoading, currentTrack, setCurrentTrack  }) {
  return (
    <S.BarPlayer>
    <PlayerControls />
    <PlayerTrackPlay
      isLoading={isLoading}
      currentTrack={currentTrack}
      setCurrentTrack={setCurrentTrack}
    />
  </S.BarPlayer>
  );
}