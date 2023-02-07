import './search-bar.css'

const SearchBar = ({ className, placeholder, onChangeHandler }) => (
  <input 
    className={`search-bar ${className}`}
    type='search' 
    placeholder={placeholder}
    onChange={onChangeHandler} 
  />
)

// class SearchBar extends Component {
//   render() {
//     return (
//       <input 
//         className={`search-bar ${this.props.className}`}
//         type='search' 
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler} 
//       />
//     )
//   }
// }

export default SearchBar;