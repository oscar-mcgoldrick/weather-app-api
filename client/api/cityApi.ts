import request from "superagent";

export function getCityInfo (cityName: string) {
  return request
    .post('/api/v1/city')
    .send({cityName})
    .then((res) => {return res.body})
    .catch(e => console.log(e.message))
}