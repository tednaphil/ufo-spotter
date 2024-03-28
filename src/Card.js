import './Card.css';

function Card({ title, description, id, removeSighting }) {
    return (
        <section className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => removeSighting(id)}>🛸</button>
        </section>
    )
}

export default Card;