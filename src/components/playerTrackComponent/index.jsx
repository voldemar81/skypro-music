// import { useEffect } from 'react';
// import ReactAudioPlayer from 'react-audio-player';
// import { getTrackById } from '../../api';
import { TrackPlaySvg } from '../../data/svg/trackPlay';
import { TrackPlayLikeSvg } from '../../data/svg/trackPlayLike';
import { TrackPlayDislikeSvg } from '../../data/svg/trackPlayDislike';
import * as S from './styles';


export const PlayerTrackPlay = ({
  isLoading,
  currentTrack,
}) => {
  

  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayerContain>
        {isLoading ? (
          <S.TrackPlayerImage>
            <S.TrackPlayerBlock>
              <TrackPlaySvg />
            </S.TrackPlayerBlock>
          </S.TrackPlayerImage>
        ) : (
          <S.SkeletonIcon></S.SkeletonIcon>
        )}
        {isLoading ? (
          <S.TrackPlayAuthor>
            <S.TrackPlayAuthorLink>{currentTrack.name}</S.TrackPlayAuthorLink>
          </S.TrackPlayAuthor>
        ) : (
          <S.SceletonAuthor></S.SceletonAuthor>
        )}
        {isLoading ? (
          <S.TrackPlayAlbum>
            <S.TrackPlayAlbumLink>{currentTrack.author === '-' ? 'Неизвестный' : currentTrack.author}</S.TrackPlayAlbumLink>

          </S.TrackPlayAlbum>
        ) : (
          <S.SceletonAlbum></S.SceletonAlbum>
        )}
      </S.TrackPlayerContain>
      <S.TrackPlayLikesDisplay>
        <S.TrackPlayLike>
          <TrackPlayLikeSvg />
        </S.TrackPlayLike>
        <S.TrackPlayDislike>
          <TrackPlayDislikeSvg />
        </S.TrackPlayDislike>
      </S.TrackPlayLikesDisplay>
    </S.PlayerTrackPlay>
  );
};