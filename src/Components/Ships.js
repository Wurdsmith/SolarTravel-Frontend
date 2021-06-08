import '../App.css';
import '../App.css';

export default function Ships(props){

        return(
            <div className="shipForm">
                <form>
                    <label className="shipFilter">
                        Select Your Transport Vessel:
                        <select className= "select" onChange= {(event) => props.handleChange(event)}>
                            <option value="enterprise">Enterprise-Class Cruiser - Speed: 83827079 Miles/Hour</option>
                            <option value="odyssey">Odyssey-Class Cruiser - Speed: 167654158 Miles/Hour</option>
                    </select>
                    </label><br></br>
                </form>
            </div>
        )    
}
