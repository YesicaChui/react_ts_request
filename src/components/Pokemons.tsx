import React from 'react'
interface IPokemon{
  name:string,
  url:string
}

interface IPokemons{
  pokemons:IPokemon[]
}
const Pokemons = (props:IPokemons) => {
  return (
    <>
    {props.pokemons.map((pokemon:IPokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
    </>
  )
}

export default Pokemons