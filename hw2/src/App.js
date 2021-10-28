import './App.css';
import {Clock} from './Clock';

function App() {
  return (
    <div className="centreObj">
        <Clock numberTimer="first" startSec={0} finishSec={10}/>
        <Clock numberTimer="second" startSec={10} finishSec={20}/>
    </div>
  );
}

export default App;
