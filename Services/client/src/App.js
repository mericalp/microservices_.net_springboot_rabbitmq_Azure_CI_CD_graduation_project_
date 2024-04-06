import { useState } from 'react';
import './App.css';
import LeftNav from './components/LeftNav/LeftNav';
import MainSection from './components/MainSection/MainSection';
import TopNav from './components/TopNav/TopNav';

function App() {
  const [animalId, setAnimalsId] = useState('')
  console.log(animalId)
  return (
    <div className="App">
      <TopNav/>
      <LeftNav animalId={animalId}/>
      <MainSection setAnimalsId={setAnimalsId}/>
    </div>
  );
}

export default App;
