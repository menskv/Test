const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const expressFormData = require("express-form-data")
const getTasks = require("./getTasks")
const postTask = require("./postTask")
const deleteTask = require("./deleteTask")
const putTask = require("./putTask")

server.use(jsonServer.bodyParser)
server.use(expressFormData.parse())
server.use(middlewares);

server.get("/api/get-tasks", getTasks)
server.post("/api/post-task", postTask)
server.put("/api/put-task", putTask)
server.delete("/api/delete-task", deleteTask)

server.listen(8000, () => {
    console.log(`JSON Server is running PORT:${8000}`)
})