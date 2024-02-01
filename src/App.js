import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RouterDom from './Routes';
import ParticlesBackground from './Components/partical';
function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
      <RouterDom /> 
    </div>
  );
}

export default App;
