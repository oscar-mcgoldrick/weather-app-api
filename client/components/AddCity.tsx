import { useState, FormEvent, ChangeEvent } from "react"
import { City } from "../../data/cities"
import { getCityInfo } from "../api/cityApi"
import { Forecast } from "../../models/forecast"
import { CityData } from "../../models/city"
import { useEffect } from "react"
import { getCityTemps } from "../api/weatherApi"

interface Props {
  onSubmit(data: string): void
}

function AddCity (props: Props) {
  const [formState, setFormState] = useState('')
  const [cityForecast, setCityForecast] = useState(null as null | Forecast)
  const [cityDetails, setCityDetails] = useState(null as null | CityData)


  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    const response = await getCityInfo(formState)
    console.log(response[0].latitude)
    const newCity = {
      lat: response[0].latitude,
      long: response[0].longitude
    }
    setCityDetails(newCity)
    getCityTemps(newCity as CityData)
      .then(data => setCityForecast(data))
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const {value} = evt.currentTarget
    setFormState(value)
  }

  if(cityForecast != null) {
    return <>
    <div className="weather">
    {cityForecast[0].map((time, index) => (<p>Date/Time: {time}   The forecast temperature:{cityForecast[1][index]}°C</p>))}
  </div>
  </>
  } else {
    return <>
  <p>Type in a hecking city mate!</p>
  <form onSubmit={handleSubmit}>
    <label>
      City Name: <input name="city" value={formState} onChange={handleChange} />
    </label>
    <button type="submit">Submit</button>
  </form>
  </>
  }

  
}

export default AddCity