import { useState, useEffect } from 'react';
import { Main } from './components/mainComponent/main';
import { Player } from './components/playerComponent/player';
import { Footer } from './components/footerComponent/footer';
import { GeneralStyles } from './styles/GeneralStyles';
import * as S from  './styles/AppStyles';


function App() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(true);
      }, 3000);

      return () => clearTimeout(timeout); 
    }
  }, [isLoading]);


  return (
    <>
      < GeneralStyles />
      <S.Wrapper>
        <S.Container>
          <Main isLoading={isLoading} setIsLoading={setIsLoading} />
          <Player isLoading={isLoading} setIsLoading={setIsLoading} />
          <Footer />
        </S.Container>
      </S.Wrapper>
    </>
  );

}

export default App;