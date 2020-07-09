import Card from './Card';
import store from './store';
import './List.css';

function List(props) {
    const storeCards = store.allCards
    const array = Object.keys(storeCards)
    const cards = array.map((_,i) => 
        <Card title={array.i.title} content={array.i.content} />
    )


    return (
        <section className="List">
            <header>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>{cards}</div>
        </section>
    );
};

class ListClass extends React.Component {
    render() {
        console.log('Using a class component!')
        return (

        )
    }
}

export default List;