import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const value = event.target.value.toLocaleLowerCase()
    setSearchField(value);
  }

  return (
    <div className='app'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        onChangeHandler={onSearchChange} 
        className='search-box' 
        placeholder='search monsters' 
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App
