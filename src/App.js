import logo from './logo.svg';
import './App.css';
import Sidebar from './component/sidebar'
import MainArea from './component/MainArea'

function App() {
  return (
    <div className="App">
         <Sidebar/>
         <MainArea />
    </div>
  );
}

export default App;