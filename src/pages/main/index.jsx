import { useState, useEffect } from 'react';
import { NavTrackSidebar } from '../../components/navTrackComponent';
import { Player } from '../../components/playerComponent';
import { Footer } from '../../components/footerComponent';
import * as S from './styles';


export const Main = ({ music, getTracksError }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(true);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);
  return (
    <S.Wrapper>
      <S.Container>
        <NavTrackSidebar
          isLoading={isLoading}
          music={music}
          getTracksError={getTracksError}
        />
        <Player isLoading={isLoading} />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};