import cities from "../../data/cities"
import { Link } from "react-router-dom"

function Nav () {
  const cityNames = Object.keys(cities)

  return <>
  <ul className="nav">
    {cityNames.map(cityName => (<Link to={`/city/${cityName}`} key={cityName}><button>{cityName}</button></Link>))}
  </ul>
  <Link to={`/city/add`}><button>Add a city</button></Link>
  </>
}

export default Nav