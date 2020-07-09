import List from './List';
import './Card.css';

function Card(props) {
    return (
        <div className="Card">
            <button type='button'>delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
};

//class CardClass extends React.Component {
//    render() {
//        console.log('Using a class component!')
//        return (          
//        )
//    }
//}


export default Card;