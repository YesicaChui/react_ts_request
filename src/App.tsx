import { useEffect, useState } from 'react';
import Child from './components/Child';
import UserList from './components/UserList';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [showPokemons, setShowPokemons] = useState(false);
  // cuando las propieades que reciben cambian
  // cuando el valor de uno de sus estados cambian
  // cuando el compoennte padre llaama a la funcion re-render
  useEffect(() => {
    console.log('useeffect del app');
  }, []);

  return (
    <div>
      <h1>Bienvenidos</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}>
        Sumar +1
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}>
        Restar -1
      </button>
      <button onClick={() => setShowPokemons(!showPokemons)}>show pokemon</button>
      {showPokemons ? <UserList /> : ''}
    </div>
  );
};

export default App;
