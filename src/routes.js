import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Main } from './pages/main';
import { Favorites } from './pages/favorites';
import { Category } from './pages/category';
import { NotFound } from './pages/not-found';
import { ProtectedRoute } from './components/ProtectedRoute';


export const AppRoutes = ({
  user,
  onAuthButtonClick,
  isLoading,
  music,
  isPlaying,
  setIsPlaying,
  currentTrack,
  setCurrentTrack,
  error,
}) => {
  
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={user} />}>
        <Route
          path='/'
          element={
            <Main
              isLoading={isLoading}
              music={music}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              error={error}
            />
          }
        />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/category/:id' element={<Category />} />
      </Route>
      <Route
        path='/register'
        element={<Register />}
      />
      <Route path='/login' element={<Login onAuthButtonClick={onAuthButtonClick}/>} 
      />
      <Route path='*' element={<NotFound isLoading={isLoading}/>} />
    </Routes>
  );
};