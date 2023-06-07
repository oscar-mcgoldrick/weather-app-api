import request from 'superagent'
import { CityData } from '../../models/city'
import { Forecast } from '../../models/forecast'


export function getCityTemps(city: CityData) {
  return request.get(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.long}&hourly=temperature_2m`)
    .then(data =>  [data.body.hourly.time, data.body.hourly.temperature_2m] as Forecast)
}