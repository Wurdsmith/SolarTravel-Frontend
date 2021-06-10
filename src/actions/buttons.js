import '../App.css';
        return(
            <div className="form">
                <div className="formContent">
                    <h2 className="formHeadline">Customize your dream vacation</h2>
                    <h4>We've got a floating rock for everybody. Find your happy place on one of our 28 solar destinations.</h4>
                </div>
                <div className="formFilter">
                    <form onSubmit={(event) => props.handleFilter(event)}>
                        <p>Filter by average surface temperature:</p>
                            <input type="radio" id="any" name="temp" value="any"></input>
                            <label htmlFor="any">No Preference - The solar system is my oyster.</label><br></br>
                            <input type="radio" id="hot" name="temp" value="hot"></input>
                            <label htmlFor="hot">Hot - I'm ready for some radiation burns!</label><br></br>
                            <input type="radio" id="warm" name="temp" value="warm"></input>
                            <label htmlFor="warm">Warm - Send me somewhere warm and comfortable.</label><br></br>
                            <input type="radio" id="cold" name="temp" value="cold"></input>
                            <label htmlFor="cold">Cold - Enough global warming. Show me some colder places.</label><br></br>
                            <input type="radio" id="frigid" name="temp" value="frigid"></input>
                            <label htmlFor="frigid">Frigid - Bring on the iciest of ice worlds!</label><br></br>

                        <p>Filter by distance from Earth:</p>
                            <input type="radio" id="any" name="distance" value="any"></input>
                            <label htmlFor="any">No Preference - Spin the climate wheel. I'm down for anything.</label><br></br>
                            <input type="radio" id="closest" name="age" value="closest"></input>
                            <label htmlFor="closest">Near-Earth destinations only, please.</label><br></br>
                            <input type="radio" id="close" name="age" value="close"></input>
                            <label htmlFor="close">I'd like to visit somewhere in the inner solar system.</label><br></br>
                            <input type="radio" id="far" name="age" value="far"></input>
                            <label htmlFor="far">A little distance is ok. Anywhere from Earth to Neptune should be fine.</label><br></br>
                            <input type="radio" id="far" name="age" value="far"></input>
                            <label htmlFor="far">A little distance is ok. Anywhere from Earth to Neptune should be fine.</label><br></br>

                        <p>Filter by distance from Earth:</p>
                            <input type="radio" id="any" name="gravity" value="any"></input>
                            <label htmlFor="any">No Preference - I have relatively no opinion.</label><br></br>
                            <input type="radio" id="low" name="gravity" value="low"></input>
                            <label htmlFor="low">Near-Earth destinations only, please.</label><br></br>
                            <input type="radio" id="med" name="gravity" value="med"></input>
                            <label htmlFor="med">I'd like to visit somewhere in the inner solar system.</label><br></br>
                            <input type="radio" id="high" name="gravitye" value="high"></input>
                            <label htmlFor="high">A little distance is ok. Anywhere from Earth to Neptune should be fine.</label><br></br>
                            <input type="radio" id="highest" name="gravity" value="highest"></input>
                            <label htmlFor="highest">A little distance is ok. Anywhere from Earth to Neptune should be fine.</label><br></br>
                                <input type="submit" value="Submit"/>
                            
                    </form>
                </div>
            </div>
        )