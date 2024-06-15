import React,{useState} from "react";
import axios from 'axios';


function Search({ fetechedData }){

    const[city, setCity] = useState("");

    const fetchWeather = async ()=>{
        const apiKey = "c69db734c7bd4ef0869133444241506";
        console.log("api key: ",apiKey);
        try{
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
                params: {
                    key: apiKey,
                    q: city
                }
            });
            console.log(response.data);
            fetechedData(response.data);
        }
        
        catch(err){
            console.log("fetching err: ",err);
        }
    }





    const cityChangeHandler = (event)=>{
        setCity(s => event.target.value);
    };

    const handelSubmit = (event) =>{
        event.preventDefault();
        fetchWeather();
    }

    return(<form className="search-form" onSubmit={handelSubmit}>
        <input type="text" placeholder="enter city name"  onChange={cityChangeHandler} required/>
        <button type="submit">get weather</button>
    </form>
    );
}

export default Search