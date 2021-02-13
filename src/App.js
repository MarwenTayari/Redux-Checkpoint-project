import './App.css';
import AddTask from './Components/AddTask'
import ListTask from './Components/ListTask'

function App() {
  return (
    <div className="App">
      <h2 className="titleApp">ToDo Application</h2>
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;