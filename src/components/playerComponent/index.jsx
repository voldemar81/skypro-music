import { BarPlayer } from '../barPlayerComponent';
import { VolumeBlock } from '../volumeComponent';
import * as S from './styles';

export const Player = ({ isLoading, currentTrack, setCurrentTrack }) => {

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <BarPlayer
            isLoading={isLoading}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
          <VolumeBlock currentTrack={currentTrack} />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
