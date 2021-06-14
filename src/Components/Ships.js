import '../App.css';
import '../App.css';

export default function Ships(props){

        return(
            <div className="shipForm">
                <form>
                    <label className="shipHeader">
                        Select Your Transport Vessel:
                        <select className= "select" onChange= {(event) => props.handleChange(event)}>
                            <option value="enterprise">Enterprise-Class Cruiser - Speed: 83827079 Miles/Hour</option>
                            <option value="odyssey">Odyssey-Class Cruiser - Speed: 167654158 Miles/Hour</option>
                    </select>
                    </label>

                    <h4>*Please note that the ship you select will determing your estimated price. The faster the ship, the pricier the ticket!</h4>

                </form>
            </div>
        )    
}
