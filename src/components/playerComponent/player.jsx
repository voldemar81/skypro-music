import { BarPlayer } from '../barPlayerComponent/barPlayer';
import { VolumeBlock } from '../volumeComponent/volume';
import * as S from './styles';

export function Player({ isLoading }) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <BarPlayer isLoading={isLoading} />
          <VolumeBlock />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
