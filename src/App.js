import './App.css'
import TextLinkExample from './components/MyNav';
import GalUno from './components/GalUno';
import GalDue from './components/GalDue';
import GalTre from './components/GalTre';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowTv from './components/ShowTv'
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <TextLinkExample />
        <Routes>
          <Route path='/movieDetails/:idFilm' element={<MovieDetails />} />
          <Route path='/' element={<>
            <GalUno />
            <GalDue />
            <GalTre />
            </>}
            />
            <Route path='/tvShows' element={<ShowTv />} />
        </Routes>
      </div>
    </BrowserRouter >

  );
}

export default App;