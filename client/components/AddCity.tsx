import { useState, FormEvent, ChangeEvent } from "react"
import { City } from "../../data/cities"

interface Props {
  onSubmit(data: City): void
}

function AddCity (props: Props) {
  const [formState, setFormState] = useState({
    lat: 0,
    long: 0
  } as City)

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    setFormState({lat: 0, long: 0})
    props.onSubmit(formState)
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const {name, value} = evt.currentTarget
    setFormState(data => ({...data, [name]: value}))
  }

  return <>
  <p>Add a hecking city mate</p>
  <form onSubmit={handleSubmit}>
    {/* <label>
      City Name: <input name="city" value={formState.name} onChange={handleChange} />
    </label> */}
    <label>
      Latitude in integer form, north & east are +, south & west are -: <input name="latitude" value={formState.lat} onChange={handleChange}/>
    </label>
    <label>
      Longitude in integer form, north & east are +, south & west are -: <input name="longitude" value={formState.long} onChange={handleChange}/>
    </label>
    <button type="submit">Submit</button>
  </form>
  </>
}

export default AddCity