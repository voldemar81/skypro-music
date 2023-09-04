import { PlayerControls } from '../playerControlComponent/playerControl';
import { PlayerTrackPlay } from '../playerTrackComponent/playerTrack';
import * as S from './styles';

export function BarPlayer({ isLoading }) {
  return (
    <S.BarPlayer>
      <PlayerControls />
      <PlayerTrackPlay isLoading={isLoading} />
    </S.BarPlayer>
  );
}