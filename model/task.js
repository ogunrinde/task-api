const mongoose = require("mongoose")

const schema = mongoose.Schema({
    categoryId: Number,
    name: String,
    completed: Boolean,
    afterCategoryId: 2,
    tasks: [schemaTask]
})

const schemaTask = mongoose.Schema({
    taskId: Number,
    name: String,
    completed: Boolean
})

module.exports = mongoose.model("Tasks", schema);