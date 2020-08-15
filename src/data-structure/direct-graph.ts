import { Queue } from './queue'

export class Graph<A, T> {
  public map: Map<A, T> = new Map()

  constructor(public name: string) {}

  setMap(key: A, value: T) {
    this.map.set(key, value)
  }
}

class City extends Graph<any, number> {
  public get routes() {
    return this.map
  }

  addRoute = this.setMap
}

const home = new City('Home')
const HS = new City('Home Station')
const RS = new City('Railway Station')
const DH = new City('Dong Hai')
const CZ = new City('Chao Zhou Station')
const CZA = new City('Chao Zhou Airport')
const SHHQ = new City('Hong Qiao Airport')
const SHPD = new City('Pu Dong Airport')

home.addRoute(HS, 0)
home.addRoute(RS, 0)
home.addRoute(DH, 0)

HS.addRoute(RS, 10)

RS.addRoute(DH, 10)
RS.addRoute(CZ, 42)
RS.addRoute(SHHQ, 540)

DH.addRoute(CZ, 30)

CZ.addRoute(SHHQ, 488)
CZ.addRoute(CZA, 10)

CZA.addRoute(SHHQ, 470)
CZA.addRoute(SHPD, 370)

// @ts-ignore
function dijkstra(startingCity: City, otherCities: City[]) {
  type CityInfo = [number, City]
  const routesFromCity: Map<City, CityInfo> = new Map()

  routesFromCity.set(startingCity, [0, startingCity])

  otherCities.forEach((city) =>
    routesFromCity.set(city, [Number.MAX_SAFE_INTEGER, null])
  )

  const visitedCities: City[] = []
  let currentCity = startingCity

  while (currentCity) {
    visitedCities.push(currentCity)

    currentCity.routes.forEach((price, city) => {
      if (
        routesFromCity.get(city)[0] >
        price + routesFromCity.get(currentCity)[0]
      ) {
        routesFromCity.set(city, [
          price + routesFromCity.get(currentCity)[0],
          currentCity,
        ])
      }
    })

    currentCity = null
    let cheapestRouteFromCurrentCity = Number.MAX_SAFE_INTEGER

    routesFromCity.forEach((priceInfo, city) => {
      if (
        priceInfo[0] < cheapestRouteFromCurrentCity &&
        !visitedCities.includes(city)
      ) {
        cheapestRouteFromCurrentCity = priceInfo[0]
        currentCity = city
      }
    })
  }

  return routesFromCity
}

// const resultToSH = dijkstra(home, [HS, RS, DH, CZ, CZA, SHPD, SHHQ])
// console.log(resultToSH)

const A = new City('Atlanta')
const B = new City('Boston')
const C = new City('Chicago')
const D = new City('Denver')
const E = new City('El Paso')

A.addRoute(B, 100)
A.addRoute(D, 160)
B.addRoute(C, 120)
B.addRoute(D, 180)
C.addRoute(E, 80)
D.addRoute(C, 40)
D.addRoute(E, 140)
E.addRoute(B, 100)

// const resultToElPaso = dijkstra(A, [B, C, D, E])
// console.log(resultToElPaso)

export function traverse(g: City, cb = (g: City) => console.log(g.name)) {
  const queue: Queue<City> = new Queue()
  queue.enqueue(g)
  const visitedCities: City[] = [g]

  while (!queue.isEmpty()) {
    const currentGraph = queue.dequeue()
    cb(currentGraph)
    currentGraph.map.forEach((_, k) => {
      if (!visitedCities.includes(k)) {
        queue.enqueue(k)
        visitedCities.push(k)
      }
    })
  }
}

traverse(A)
traverse(home)
