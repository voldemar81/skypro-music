import { PlayList } from '../playlistComponent';
import { Filter } from '../filterComponent';
import { Search } from '../searchComponent';
import { PlayListTitleSvg } from '../../data/svg/playerListTitle';
import * as S from './styles'


export const СenterBlock  = ({
  isLoading,
  music,
  error,
  isPlaying,
  setIsPlaying,
  currentTrack,
  setCurrentTrack,
}) => {
  return (
    <S.MainCenterBlock>
      <Search />
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <Filter music={music} error={error} />
      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.Col01>Трек</S.Col01>
          <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
          <S.Col03>АЛЬБОМ</S.Col03>
          <S.Col04>
            <PlayListTitleSvg />
          </S.Col04>
        </S.ContentTitle>
        {error ? (
          <S.ErrorBlock>
            <S.ErrorMessage>
              Что то пошло не так: {error}
            </S.ErrorMessage>
             </S.ErrorBlock>
        ) : (
          <PlayList
            isLoading={isLoading}
            music={music}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
        )}
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
};

