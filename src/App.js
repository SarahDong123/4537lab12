import Page from './Page';
import Pagination from './Pagination';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      setPokemons(result.data)
    }
    fetchData()
  }, [])

  const pageSize = 10;
  const numberOfPages = Math.ceil(pokemons.length / pageSize);

  return (
    <h1>
      <Page
        pokemons={pokemons}
        currentPage={currentPage}
      />
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </h1>
  );
}

export default App;
