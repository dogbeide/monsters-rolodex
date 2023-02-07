import { Component } from 'react'
import './search-bar.css'

class SearchBar extends Component {
  render() {
    return (
      <input 
        className={`search-bar ${this.props.className}`}
        type='search' 
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler} 
      />
    )
  }
}

export default SearchBar