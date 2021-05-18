import './App.css';
import {Button} from './components/atoms/Button'

function App() {
  return (
    <div className="App">
      <div className="container">

      <Button 
      onClick={()=>{console.log("test success")}} 
      type="button" 
      buttonSize="btn--small" 
      buttonStyle="btn--primary--outline" 
      title="TESTING" /> 
      
      </div>
    </div>
  );
}

export default App;
