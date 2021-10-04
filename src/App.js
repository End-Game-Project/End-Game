// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import Store from './components/Store'
import dropDown from './dropDown'

function App() {
  return (
    <div className="App">
      <HomePage/>
      <dropDown/>
      
      <Store/>

    </div>
  );
}

export default App;