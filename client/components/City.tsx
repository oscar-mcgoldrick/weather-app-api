import { useEffect, useState } from "react";
import cities from "../../data/cities";
import { useParams } from "react-router-dom";
import { ModulePreloadOptions } from "vite";
import { Forecast } from "../../models/forecast";
import { getCityTemps } from "../api/weatherApi";

function City () {
  const cityName = useParams().city
  const [cityForecast, setCityForecast] = useState(null as null | Forecast)
  

  useEffect(() => {
    getCityTemps(cities[cityName])
      .then(data => setCityForecast(data))
  }, [cityName])
  
  if (cityForecast != null) {
    return <>
    <div className="weather">
    {cityForecast[0].map((time, index) => (<p>Date/Time: {time}   The forecast temperature:{cityForecast[1][index]}°C</p>))}
  </div>
  </>
  }
  
  return <>
  <p>This is the city info buddy</p>
  {!cityForecast && <p>Loading...</p>}
  </>
}

export default City