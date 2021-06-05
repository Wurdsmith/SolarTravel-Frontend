import '../App.css';

export default function AddedDestinations(props){

        return(
            <div className="destinationCard">
                <div className="addedDest" key={props.addedDestination.id}>
                    <h2>{props.addedDestination.name}</h2>
                    <img className="addedDestImage" src={props.addedDestination.image_url} alt={props.addedDestination.name}></img>
                    <button className="deleteButton" onClick={() => props.handleDelete(props.addedDestination)}>Remove location from itinerary</button>
                    </div>
                </div>
        )    
}