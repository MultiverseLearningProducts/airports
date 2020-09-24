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
        const destinationAirport = Aeroport.aeroports.find(aeroport => aeroport.name === plane.destination)
        destinationAirport.addPlane(plane)
    }
}

module.exports = Aeroport