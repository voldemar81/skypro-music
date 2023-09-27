import { useState, useEffect } from 'react';
import { AppRoutes } from './routes';
import { GeneralStyles } from './styles/GeneralStyles';
import { getAllTracks } from './api';


function App() {
  const initialUserState = localStorage.getItem('user') === 'true';
  const [user, setUser] = useState(initialUserState);
  const [music, setMusic] = useState([]);
  const [getTracksError, setGetTracksError] = useState(null);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const tracks = await getAllTracks();
        setMusic(tracks);
      } catch (error) {
        setGetTracksError('Что то пошло не так');
      }
    }
    fetchTracks();
  }, []);

  const handleLogin = () => {
    localStorage.setItem('user', 'true');
    setUser(true);
  };

  return (
    <>
      <GeneralStyles/>
      <AppRoutes
        user={user}
        music={music}
        onAuthButtonClick={handleLogin}
        getTracksError={getTracksError}
      />
    </>
  );
}

export default App;