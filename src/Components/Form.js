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
                        <select className= "select" onChange= {(event) => props.handleFilter(event.target.value, "temperature")}>
                            <option value="hot">Hot - I'm ready for some radiation burns!</option>
                            <option value="warm">Warm - Send me somewhere warm and comfortable.</option>
                            <option value="cold">Cold - Enough global warming. Show me some colder places.</option>
                            <option value="coldest">Coldest - Bring on the iciest of ice worlds!</option>
                        </select>
                        </label><br></br>
                        
                        <label>
                        Filter by distance from Earth:
                        <select className= "select" onChange= {(event) => props.handleFilter(event.target.value, "distance")}>
                            <option value="closest">Closest - Near-Earth destinations only, please.</option>
                            <option value="close">Close - I'd like to visit somewhere in the inner solar system.</option>
                            <option value="far">Far - A little distance is ok. Anywhere from Earth to Neptune should be fine.</option>
                            <option value="furthest">Furthest - Show me everything you've got, from the Sun to the furthest dwarf planet.</option>
                        </select>
                        </label><br></br>

                        <label>
                        Filter by gravitational preference:
                        <select className= "select" onChange= {(event) => props.handleFilter(event.target.value, "gravity")}>
                            <option value="heavy">High - I need a workout!</option>
                            <option value="medium">Medium - As close to earth as possible.</option>
                            <option value="light">Light - I want to float.</option>
                            <option value="lightest">Lightest - I want to fly!.</option>
                        </select>
                        </label>
                        <button className="filterButton" onClick={(e) => props.handleFilterSubmit(e)}>Filter Destinations</button>
                        <button className="resetButton" onClick={(e) => props.resetFilter(e)}>Reset Filter</button>
                    </form>
                </div>
            </div>
        )    
}