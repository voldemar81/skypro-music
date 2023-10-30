import * as S from './styles'

export const Favorites = () => {
    return (
      <S.MyTracks>
        <h1>Мои треки</h1>
      </S.MyTracks>
    );
  };

  

  // import { GeneralStyles } from '../../styles/GeneralStyles';
  // import { Nav } from '../../components/navComponent';
  // import { Search } from '../../components/searchComponent';
  // import { MainSidebar } from '../../components/mainSidebarComponent';
  // import { Player } from '../../components/playerComponent';
  // import * as S from './styles';
  
  // export const Favourites = ({
  //   music,
  //   isLoading,
  //   pause,
  //   setPause,
  //   isPlaying,
  //   setIsPlaying,
  //   currentTrack,
  //   setCurrentTrack
  // }) => {
  //   return (
  //     <>
  //       <S.Lay>
  //         <GlobalStyle />
  //         <S.FavouritePlayList>
  //           <Nav />
  //           <S.CenterBlock >
  //             <Search />
  //             <S.ComponentHeader>Мои треки</S.ComponentHeader>
  //           </S.CenterBlock>
  //           <MainSidebar isLoading={isLoading}/>
  //         </S.FavouritePlayList>
  //         <Player
  //           pause={pause}
  //           setPause={setPause}
  //           music={music}
  //           isLoading={isLoading}
  //           isPlaying={isPlaying}
  //           setIsPlaying={setIsPlaying}
  //           currentTrack={currentTrack}
  //           setCurrentTrack={setCurrentTrack}
  //         />
  //       </S.Lay>
  //     </>
  //   );
  // };  