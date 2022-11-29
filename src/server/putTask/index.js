const fileName = "../response.json"
const jsonData = require(fileName)
const fs = require("fs");

module.exports = (req, res) => {
    const mapped = jsonData.map(item => item.id)
    jsonData.splice(mapped.indexOf(req.body.id), 1, req.body)
    fs.writeFile(`${__dirname}/${fileName}`, JSON.stringify(jsonData), function (err) {
        if (err) return console.log(err)
        console.error(JSON.stringify(jsonData))
    })
    res.send(jsonData)
}