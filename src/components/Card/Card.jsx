import './card.css';

// const Card = ({ monster: {id, name} }) => { // also works
const Card = ({ monster }) => {
  const { id, name } = monster;

  return (
    <div className='card-container' key={id}>
      <h1>{name}</h1>
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`}
      alt={`monster ${name}`} />
    </div>
  )
}

// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.monster;

//     return (
//       <div className='card-container' key={id}>
//         <h1>{name}</h1>
//         <img src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         alt={`monster ${name}`} />
//       </div>
//     )
//   }
// }

export default Card;