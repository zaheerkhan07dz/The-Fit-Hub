import './App.css';
import Foot from './Components/footer/Foot';
import HEro from './Components/hero/HEro';
import Join from './Components/join/Join';
import Plan from './Components/plans/Plan';
import Programs from './Components/programs/Programs';
import Reason from './Components/reasons/Reason';
import Testi from './Components/testimonials/Testi';

function App() {
  return (
    <div className="App">
         
        <HEro/>
        <Programs/>
        <Reason/>
        <Plan/>
        <Testi/>
        <Join/>
        <Foot/>
         </div>
  );
}

export default App;
