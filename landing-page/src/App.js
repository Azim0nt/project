import './index.scss';
import {BrowserRouter} from 'react-router-dom';
import AllComponents from './components/AllComponens';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <AllComponents/> 
     </BrowserRouter>
    </div>
  );
}

export default App;
