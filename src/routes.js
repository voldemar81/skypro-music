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




// import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import { LogPage } from './pages/login';
// import { RegPage } from './pages/register';
// import { Main } from './pages/main';
// import { Favorites } from './pages/favorites';
// import { Category } from './pages/category';
// import { NotFound } from './pages/not-found';
// import { ProtectedRoute } from './components/ProtectedRoute';

// export const AppRoutes = ({
//   user,
//   onAuthButtonClick,
//   isLoading,
//   music,
//   currentTrack,
//   setCurrentTrack,
//   error,
// }) => {
//   const [pause, setPause] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <Routes>
//       <Route element={<ProtectedRoute isAllowed={user} />}>
//         <Route
//           path='/'
//           element={
//             <Main
//               pause={pause}
//               setPause={setPause}
//               isLoading={isLoading}
//               music={music}
//               isPlaying={isPlaying}
//               setIsPlaying={setIsPlaying}
//               currentTrack={currentTrack}
//               setCurrentTrack={setCurrentTrack}
//               error={error}
//             />
//           }
//         />
//         <Route
//           path='/favourites'
//           element={
//             <Favourites
//               pause={pause}
//               setPause={setPause}
//               music={music}
//               isLoading={isLoading}
//               isPlaying={isPlaying}
//               setIsPlaying={setIsPlaying}
//               currentTrack={currentTrack}
//               setCurrentTrack={setCurrentTrack}
//             />
//           }
//         />
//         <Route path='/category/:id' element={<Category />} />
//       </Route>
//       <Route path='/register' element={<RegPage />} />
//       <Route
//         path='/login'
//         element={<LogPage onAuthButtonClick={onAuthButtonClick} />}
//       />
//       <Route path='*' element={<NotFound isLoading={isLoading} />} />
//     </Routes>
//   );
// };