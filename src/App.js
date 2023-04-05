import './App.css'
import TextLinkExample from './components/MyNav';
import GalUno from './components/GalUno';
import GalDue from './components/GalDue';
import GalTre from './components/GalTre';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import tvShows from './components/tvShows';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <TextLinkExample />
        <Routes>
          <Route path='/' element={<GalUno />} />
          <Route path='/' element={<GalDue />} />
          <Route path='/' element={<GalTre />} />
          <Route path='/tvShows' element={<tvShows/>}/>
        </Routes>
      </div>
    </BrowserRouter >

  );
}

export default App;