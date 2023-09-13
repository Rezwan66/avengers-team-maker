import './App.css';
import Basket from './components/Basket/Basket';
import Cards from './components/Cards/Cards';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header></Header>
      <div className="w-full mx-auto flex flex-col-reverse md:flex-row gap-10">
        <Cards></Cards>
        <Basket></Basket>
      </div>
    </>
  );
}

export default App;
