import React, { useEffect, useState } from "react";
import './style.scss';
const Weather = () => {
    const [city, setCity] = useState(null);
    const [searchCity, setSearchcity] = useState('Kanpur');

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=1a03240a469e66cfa43186373192b9e6`;
            const res = await (await fetch(url)).json();
            setCity(res.main);
        }
        fetchApi();
    }, [searchCity])
    return (
        <div className="container">
            <div className="weather-app">
                <div className="weather-wrapper">
                    <h2 className="heading">Hey Enter your city for Weather Report </h2>
                    <input type="search"
                        className="search-field"
                        value={searchCity}
                        onChange={(event) => {
                            setSearchcity(event.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="info-wrapper">
                {
                    city ? (<>
                        <h2 className="location">{searchCity}</h2>
                        <div className="current-temp">
                            {city.temp} cel
                        </div>
                        <div>
                            Min {city.temp_min} cel | Max {city.temp_max} cel
                        </div>
                    </>) : (<>
                        <h2>Sorry city not found </h2>
                    </>)
                }

            </div>
        </div>

    )
}
export default Weather;