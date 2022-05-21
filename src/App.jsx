import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h3 style={{backgroundColor:"teal",color:"white"}}>Welcome to new App</h3>
      <Todo/>
    </div>
  );
}

export default App;
