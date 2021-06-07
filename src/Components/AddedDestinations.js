import '../App.css';

export default function AddedDestinations(props){

        return(
            <div className="destinationCard">
                <div className="addedDest" key={props.addedDestination.id}>
                <h2>Name: {props.addedDestination.name}</h2>
                    <h4>Distance from Earth: {props.addedDestination.distance} Million Miles</h4>
                    <h4>Type: {props.addedDestination.object_type}</h4>
                    <h4>Temperature: {props.addedDestination.temperature}° Celcius</h4>
                    <h4>{props.addedDestination.gravity}x Earth's Gravity</h4>
                    <img className="destImage" src={props.addedDestination.image_url} alt={props.addedDestination.name}></img>
                    <button className="deleteButton" onClick={() => props.handleDelete(props.addedDestination)}>Remove location from itinerary</button>
                    </div>
                </div>
        )    
}