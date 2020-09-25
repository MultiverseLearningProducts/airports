const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'airports.json'), (err, buffer) => {
    const data = JSON.parse(String(buffer))
    const transform = Object.keys(data).map(key => data[key])
    fs.writeFile(path.join(__dirname, 'airportsData.json'), JSON.stringify(transform), (err) => {
        console.log(err ? err : "Success")
    })
})