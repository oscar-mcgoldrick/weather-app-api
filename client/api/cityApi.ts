import request from "superagent";

export function getCityInfo (cityName: number) {
  return request
    .get('/api/v1/city')
    .then((res) => {return res.body})
    .catch(e => console.log(e.message))
}