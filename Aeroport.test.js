const Aeroport = require('./Aeroport')

class Plane {
    constructor() {
        this.passengers = []
        this.destination = undefined
        this.location = undefined
    }
    board(passengers) {
        this.passengers = passengers
    }
    setDestination(destination) {
        this.destination = destination
    }
    setLocation(location) {
        this.location = location
    }
}

describe('Aeroport', () => {
    test('has a name', () => {
        const LHR = new Aeroport('LHR')
        expect(LHR.name).toBe('LHR')
    })

    test('each airport knows about all the others', () => {
        expect(Aeroport.aeroports.length).toBe(1)
        const LAX = new Aeroport('LAX')
        expect(Aeroport.aeroports).toBeTruthy()
        expect(Aeroport.aeroports.length).toBe(2)
    })

    test('an Aeroport has planes', () => {
        const plane1 = new Plane()
        const [LHR, LAX] = Aeroport.aeroports
        LHR.addPlane(plane1)
        expect(plane1.location).toBe('LHR')
        plane1.setDestination('LAX')
        LHR.takeOff(plane1)
        expect(LHR.planes.length).toBe(0)
        expect(LAX.planes.length).toBe(1)
    })
})