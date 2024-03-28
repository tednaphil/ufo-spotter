import './Sightings.css';
import Card from './Card';


function Sightings({sightings, removeSighting }) {
    const cards = sightings.map(sighting => {
        return (
            <Card 
            title={sighting.location}
            description={sighting.description}
            id={sighting.id}
            key={sighting.id}
            removeSighting={removeSighting}/>
        )
    })



    return (
        <section className='sightings'>
            {cards}
        </section>
    )

}

export default Sightings;