const mongoos = require('mongoose')

const TodoSchema = new mongoos.Schema({
    task:String
})

const TodoModel = mongoos.model("todos", TodoSchema)
module.exports = TodoModel