import '../App.css';

export default function Destination(props){

        return(
            <div className="destinationCard">
                <div className="destination" key={props.destination.id}>
                    <h2>Name: {props.destination.name}</h2>
                    <h4>Distance from Earth: {props.destination.distance} Million Miles</h4>
                    <h4>Temperature: {props.destination.temperature}° Celcius</h4>
                    <h4>{props.destination.gravity}x Earth's Gravity</h4>
                    <img className="destImage" src={props.destination.image_url} alt={props.destination.name.name}></img>
                    <button className="destButton" onClick={() => props.handleSubmit(props.destination)}>Add Location to Itinerary!</button>
                </div>
            </div>
        )    
}