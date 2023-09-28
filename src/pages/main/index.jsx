// import { useState, useEffect } from 'react';
import { NavTrackSidebar } from '../../components/navTrackComponent';
import { Player } from '../../components/playerComponent';
import { Footer } from '../../components/footerComponent';
import * as S from './styles';

export const Main = ({
  isLoading,
  music,
  error,
  isPlaying,
  setIsPlaying,
  currentTrack,
  setCurrentTrack,
}) => {

  return (
    <S.Wrapper>
      <S.Container>
        <NavTrackSidebar
          isLoading={isLoading}
          music={music}
          isPlaying={setIsPlaying}
          setIsPlaying={setIsPlaying}
          error={error}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
        />
        {isPlaying && (
          <Player
            isLoading={isLoading}
            isPlaying={setIsPlaying}
            setIsPlaying={setIsPlaying}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
        )}
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};