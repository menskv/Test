const fileName = "../response.json"
const jsonData = require(fileName)
const fs = require("fs")
const formData = require("form-data-to-object")
module.exports = (req, res) => {
    jsonData.push(formData.toObj(req.body))
    fs.writeFile(`${__dirname}/${fileName}`, JSON.stringify(jsonData), function (err) {
        if (err) return console.log(err)
        console.error(JSON.stringify(jsonData))
    })
    res.send(jsonData)
}