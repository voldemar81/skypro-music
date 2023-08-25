import { useState, useEffect } from 'react';
import { Main } from './components/mainComponent/main';
import { Player } from './components/playerComponent/player';
import { Footer } from './components/footerComponent/footer';
import './css/App.css';

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
      <div className='wrapper'>
        <div className='container'>
          <Main isLoading={isLoading} setIsLoading={setIsLoading} />
          <Player isLoading={isLoading} setIsLoading={setIsLoading} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
