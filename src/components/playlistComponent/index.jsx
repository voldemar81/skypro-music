// import {tracks} from '../../data/trackList'; 
import { durationFormatter} from '../../data/durationFormatter';
import { tracks } from '../../constants';
import { TrackTitleSvg } from '../../data/svg/trackTitle';
import { TrackTimeSvg } from '../../data/svg/trackTime';
import * as S from './styles'


export const PlayList = ({
  isLoading,
  music,
  setIsPlaying,
  setIsBar,
  setCurrentTrack,
}) => {
  if (!isLoading) {
    music = [...Array(12)].flatMap(() => tracks);
  }

  const handleTrackClick = (item) => {
    setCurrentTrack(item);
    setIsPlaying(true);
    setIsBar(true);
  };

  const fullPlayList = music.map((item, i) => {
    const { name, author, album, duration_in_seconds } = item;
    const updatedAuthor = author === '-' ? 'Неизвестный' : author;

    return (
      <S.PlaylistItem key={i} onClick={() => handleTrackClick(item)}>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleComponent>
              {isLoading ? (
                <TrackTitleSvg />
              ) : (
                <S.SkeletonIcon></S.SkeletonIcon>
              )}
            </S.TrackTitleComponent>
            <S.TrackTitleBlock>
              {isLoading ? (
                <S.TrackTitleLink>{name}</S.TrackTitleLink>
              ) : (
                <S.SkeletonTrackTitle></S.SkeletonTrackTitle>
              )}
            </S.TrackTitleBlock>
          </S.TrackTitle>

          <S.TrackAuthor>
            {isLoading ? (
              <S.TrackAuthorLink>{updatedAuthor}</S.TrackAuthorLink>
            ) : (
              <S.SkeletonTrackAuthor></S.SkeletonTrackAuthor>
            )}
          </S.TrackAuthor>
          <S.TrackAlbum>
            {isLoading ? (
              <S.TrackAlbumLink>{album}</S.TrackAlbumLink>
            ) : (
              <S.SkeletonTrackAuthor></S.SkeletonTrackAuthor>
            )}
          </S.TrackAlbum>
          <S.TrackTimeComponent>
            <TrackTimeSvg />
            <S.TrackTimeText>
              {durationFormatter(duration_in_seconds)}
            </S.TrackTimeText>
          </S.TrackTimeComponent>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    );
  });

  return <S.ContentPlayList>{fullPlayList}</S.ContentPlayList>;
};
