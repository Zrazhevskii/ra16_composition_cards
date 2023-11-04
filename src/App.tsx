// import './App.css';
import { Card } from './components/Card/Card';
import { task1, task2 } from './components/data/data';


function App() {
  return (
    <div className='container'>
        <Card {...task1}>{<img src={task1.img} className='image'/>}</Card>
        <Card {...task2}></Card>
    </div>
  );
}

export default App;
