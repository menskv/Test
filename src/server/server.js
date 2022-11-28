const getTasks = require("./getTasks")

const jsonServer = require("json-server")
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.get("/get-tasks", getTasks)
server.listen(8000, () => {
    console.log('JSON Server is running')
})


