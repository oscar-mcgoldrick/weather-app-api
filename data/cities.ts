export interface City {
  lat: number
  long: number
}

export type Cities = Record<string, City>

const cities: Cities = {
  Christchurch: {
    lat: -43.53,
    long: 172.63
  },
  Wellington: {
    lat: -41.29,
    long: 174.77
  },
  Auckland: {
    lat: -36.85,
    long: 174.76
  }, 
  Chicago: {
    lat: 41.87,
    long: -87.62
  }
}

export default cities