import Card from '../Card/Card';
import './card-list.css';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    { monsters.map(monster => <Card monster={monster} /> )}
  </div>
)

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className='card-list'>
//         { monsters.map(monster => <Card monster={monster} /> )}
//       </div>
//     )
//   }
// }

export default CardList;