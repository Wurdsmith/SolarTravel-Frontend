import '../App.css';

export default function Form(props){

        return(
            <div className="form">
                <div className="formContent">
                    <h2 className="formHeadline">Customize your dream vacation</h2>
                    <h4>We've got a floating rock for everybody. Find your happy place on one of our 28 solar destinations.</h4>
                </div>
                <div className="formFilter">
                    <form>
                        <label className="climateFilter">
                        Filter by average surface temperature:
                        <select className= "select" onChange= {(event) => props.handleFilter(event)}>
                            <option value="">No Preference - Spin the climate wheel. I'm down for anything.</option>
                            <option value="hot">Hot - I'm ready for some radiation burns!</option>
                            <option value="warm">Warm - Send me somewhere warm and comfortable.</option>
                            <option value="cold">Cold - Enough global warming. Show me some colder places.</option>
                            <option value="frigid">Frigid - Bring on the iciest of ice worlds!</option>
                        </select>
                        </label><br></br>
                        
                        <label>
                        Filter by distance from Earth:
                        <select className= "select" onChange= {(event) => props.handleFilter(event)}>
                        <option default="any">No Preference - The solar system is my oyster.</option>
                            <option value="closest">Near-Earth destinations only, please.</option>
                            <option value="close">I'd like to visit somewhere in the inner solar system.</option>
                            <option value="far">A little distance is ok. Anywhere from Earth to Neptune should be fine.</option>
                            <option value="furthest">Show me everything you've got, from the Sun to the furthest dwarf planet.</option>
                        </select>
                        </label><br></br>

                        <label>
                        Filter by gravitational preference:
                        <select className= "select" onChange= {(event) => props.handleFilter(event)}>
                        <option default="any">No Preference - I have relatively no opinion.</option>
                            <option value="closest">Near-Earth destinations only, please.</option>
                            <option value="close">I'd like to visit somewhere in the inner solar system.</option>
                            <option value="far">A little distance is ok. Anywhere from Earth to Neptune should be fine.</option>
                            <option value="furthest">Show me everything you've got, from the Sun to the furthest dwarf planet.</option>
                        </select>
                        </label>
                    </form>
                </div>
            </div>
        )    
}


