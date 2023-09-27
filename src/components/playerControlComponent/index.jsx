import { PlayerBtnPrevSvg } from '../../data/svg/playerBtnPrev';
import { PlayerBtnPlaySvg } from '../../data/svg/playerBtnPlay';
import { PlayerBtnNextSvg } from '../../data/svg/playerBtnNext';
import { PlayerBtnRepeatSvg } from '../../data/svg/playerBtnRepeat';
import { PlayerBtnShuffleSvg } from '../../data/svg/playerBtnShuffle';
import * as S from './styles'


export const PlayerControls = () => {
  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev>
        <PlayerBtnPrevSvg />
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay>
        <PlayerBtnPlaySvg />
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext>
        <PlayerBtnNextSvg />
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat>
        <PlayerBtnRepeatSvg />
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle>
        <PlayerBtnShuffleSvg />
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  );
};

