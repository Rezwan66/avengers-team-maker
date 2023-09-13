import { useState } from 'react';
import './App.css';
import Basket from './components/Basket/Basket';
import Cards from './components/Cards/Cards';
import Header from './components/Header';
import Swal from 'sweetalert2';

function App() {
  const [selected, setSelected] = useState([]);
  const [remaining, setRemaining] = useState(20000);
  const [cost, setCost] = useState(0);

  const handleAddToTeam = card => {
    const isClicked = selected.find(sel => sel.id === card.id);
    if (isClicked) {
      return Swal.fire({
        title: 'Error!',
        text: 'Already Selected. You cannot pick a Team Member several times.',
        icon: 'warning',
        confirmButtonText: 'Cool',
      });
    }
    let count = card.salary;
    const newCost = cost + count;
    const remainingBalance = 20000 - newCost;
    if (newCost > 20000) {
      return Swal.fire({
        title: 'Error!',
        text: 'Budget Crossed! You cannot exceed the $20,000 budget.',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }
    setCost(newCost);
    setRemaining(remainingBalance);
    setSelected([...selected, card]);
  };

  // console.log(selected);
  return (
    <>
      <Header></Header>
      <div className="w-full mx-auto flex flex-col-reverse md:flex-row gap-10">
        <Cards handleAddToTeam={handleAddToTeam}></Cards>
        <Basket selected={selected} remaining={remaining} cost={cost}></Basket>
      </div>
    </>
  );
}

export default App;
