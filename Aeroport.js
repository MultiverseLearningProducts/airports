const fs = require('fs')
const path = require('path')

class Aeroport {
    static aeroports = []
    // instance
    name = ''
    terminals = 1
    gates = 1
    plane_capacity = 12
    planes = []
    constructor(name, terminals, gates) {
        if (name != undefined) {
            this.name = name
        }
        if (terminals != undefined) {
            this.terminals = terminals
        }
        if (gates != undefined) {
            this.gates = gates
        }
        this.plane_capacity = terminals*gates
        this.constructor.aeroports.push(this)
    }
    addPlane(plane) {
        plane.setLocation(this.name)
        this.planes.push(plane)
    }
    takeOff(plane) {
        const index = this.planes.indexOf(plane)
        this.planes.splice(index, 1)
        const destinationAirport = Aeroport.aeroports.find(function (aeroport) {aeroport.name === plane.destination})
        destinationAirport.addPlane(plane)
    }
    // getInfo(onInfo) {
    //     const airportName = this.name
    //     const locationOfFile = path.join(__dirname, 'airportsData.json')

    //     fs.readFile(locationOfFile, function (err, buffer) {
    //         const arrayOfAirports = JSON.parse(String(buffer))
    //         const result = arrayOfAirports.find(airport => airport.iata === airportName)
    //         onInfo(err, result)
    //     })
    // }
    getInfo() {
        const airportName = this.name
        return new Promise(function (resolve, reject) {
            fs.readFile(path.join(__dirname, 'airportsData.json'), (err, buffer) => {
                if (err) return reject(err)
                
                const arrayOfAirports = JSON.parse(String(buffer))
                const result = arrayOfAirports.find(airport => airport.iata === airportName)
                
                resolve(result)               
            })
        })
    }
}

module.exports = Aeroport