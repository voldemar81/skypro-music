import { Main } from './components/mainComponent/main';
import { Player } from './components/playerComponent/player';
import { Footer } from './components/footerComponent/footer';
import './css/App.css';
function App() {
  return (
    <>
      <div className='wrapper'>
         <div className='container'>
          <Main />
          <Player />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
