import cities from "../../data/cities"
import { Link } from "react-router-dom"

function Nav () {
  const cityNames = Object.keys(cities)

  return <>
  <ul className="nav">
  <Link to ='/'><button>Home</button></Link>
  <Link to={`/city/add`}><button>Look up a city</button></Link>
    {cityNames.map(cityName => (<Link to={`/city/${cityName}`} key={cityName}><button>{cityName}</button></Link>))}
  </ul>
  </>
}

export default Nav