import { useEffect, useState } from 'react';
import Pokemons from './Pokemons';

const users = [
  {
    name: 'Carlos',
  },
  {
    name: 'Yesica',
  },
  {
    name: 'Juan',
  },
  {
    name: 'Karen',
  },
  {
    name: 'Wil',
  },
];
interface IPokemon{
  name:string,
  url:string
}

const UserList = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemon=()=>{
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }

  useEffect(() => {
    console.log('useeffect de userlist');
    fetchPokemon()  
    return ()=>{
      console.log("se retiro el componente")
    }  
  }, []);
  console.log("estoy afuera")
  return (
    <div>
      <h3>Lista de Usuarios</h3>
      <ul>
        <Pokemons pokemons={pokemons}/>
      </ul>
    </div>
  );
};

export default UserList;
