import './App.css'
import TextLinkExample from './components/MyNav';
import GalUno from './components/GalUno';
import GalDue from './components/GalDue';
import GalTre from './components/GalTre';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <TextLinkExample />
      <GalUno />
      <GalDue />
      <GalTre />
    </div>
  );
}

export default App;