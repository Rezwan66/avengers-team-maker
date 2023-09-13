import { useState } from 'react';
import './App.css';
import Basket from './components/Basket/Basket';
import Cards from './components/Cards/Cards';
import Header from './components/Header';

function App() {
  const [selected, setSelected] = useState([]);

  const handleAddToTeam = card => {
    const isClicked = selected.find(sel => sel.id === card.id);
    if (isClicked) {
      return alert(
        'Already Selected. You cannot pick a team Member several times'
      );
    }
    setSelected([...selected, card]);
  };

  // console.log(selected);
  return (
    <>
      <Header></Header>
      <div className="w-full mx-auto flex flex-col-reverse md:flex-row gap-10">
        <Cards handleAddToTeam={handleAddToTeam}></Cards>
        <Basket selected={selected}></Basket>
      </div>
    </>
  );
}

export default App;
