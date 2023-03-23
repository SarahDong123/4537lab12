import React from 'react'

function Page({ pokemons, currentPage }) {
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPokemons = pokemons.slice(startIndex, endIndex)
  
  return (
    <div>
      {
        currentPokemons.map(pokemon => (
          <div key={pokemon.id}>
            <>{pokemon.name.english}</>
          </div>
        ))
      }
    </div>
  )
}

export default Page