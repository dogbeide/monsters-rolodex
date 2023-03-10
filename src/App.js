import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/CardList/CardList';
import SearchBar from './components/SearchBar/SearchBar';


const App = () => {

  const [search, setSearch] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]); // [array, setArray]
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchUpdate = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users));
  }, []); // only run foo when values in this [] change

  useEffect(() => {
    const results = monsters.filter(monster => 
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMonsters(results);
  }, [monsters, search]);

  

  return (
    <div className="App">
      <h1 className="app-title">monsters rolodex</h1>
      <SearchBar 
        onChangeHandler={onSearchUpdate} 
        placeholder='search monsters'
        className='search-bar_monsters'
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       search: ''
//     };
//   }

//   componentDidMount() {
//     // fetch('https://dummyjson.com/products')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(users => this.setState(() => {
//         return {monsters: users}
//       }));
//   }

//   onSearchUpdate = (event) => {
//     this.setState(() => {
//       return {
//         search: event.target.value
//       }
//     })
//   }

//   render() {
//     const { monsters, search } = this.state;
//     const { onSearchUpdate } = this;
    
//     const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()));

//     return (
//       <div className="App">
//         <h1 className="app-title">monsters rolodex</h1>
//         <SearchBar 
//           onChangeHandler={onSearchUpdate} 
//           placeholder='search monsters'
//           className='search-bar_monsters'
//         />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
  
// }

export default App;
