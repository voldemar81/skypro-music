import { BarPlayer } from '../barPlayerComponent';
import { VolumeBlock } from '../volumeComponent';
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
