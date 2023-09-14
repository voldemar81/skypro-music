import { PlayerControls } from '../playerControlComponent';
import { PlayerTrackPlay } from '../playerTrackComponent';
import * as S from './styles';

export function BarPlayer({ isLoading }) {
  return (
    <S.BarPlayer>
      <PlayerControls />
      <PlayerTrackPlay isLoading={isLoading} />
    </S.BarPlayer>
  );
}