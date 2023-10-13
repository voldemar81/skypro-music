import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurTrack } from '../../store/actions/creators/track';
import { TrackPlaySvg } from '../../data/svg/trackPlay';
import { TrackPlayLikeSvg } from '../../data/svg/trackPlayLike';
import { TrackPlayDislikeSvg } from '../../data/svg/trackPlayDislike';
import * as S from './styles';


export const PlayerTrackPlay = ({
  isLoading,
  isPlaying,
  setIsPlaying,
  currentTrack,
  setCurrentTrack,
}) => {
  
  const dispatch = useDispatch();
  const handleTrackClick = () => {
    dispatch(setCurTrack(track));
    if (currentTrack && currentTrack.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    setIsPlaying(isPlaying);
  }, [isPlaying]);

  return (
    <S.PlayerTrackPlay onClick={handleTrackClick}>
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
            <S.TrackPlayAlbumLink>
              {currentTrack.author === '-'
                ? 'Неизвестный'
                : currentTrack.author}
            </S.TrackPlayAlbumLink>
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