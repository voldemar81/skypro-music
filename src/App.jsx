import { useState, useEffect } from 'react';
import { AppRoutes } from './routes';
import { GeneralStyles } from './styles/GeneralStyles';
import { getAllTracks } from './api';

function App() {
  const initialUserState = localStorage.getItem('user') === 'true';
  const [user, setUser] = useState(initialUserState);
  const [isLoading, setIsLoading] = useState(false);
  const [music, setMusic] = useState([]);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const tracks = await getAllTracks();
        setMusic(tracks);
        setIsLoading(true);
        setError(false);
      } catch (error) {
        setIsLoading(true);
        setError(error.message);
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
      <GeneralStyles />
      <AppRoutes
        user={user}
        isLoading={isLoading}
        music={music}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        onAuthButtonClick={handleLogin}
        error={error}
      />
    </>
  );
}

export default App;