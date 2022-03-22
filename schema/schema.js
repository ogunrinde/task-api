const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        alltasksWithCategory: [TasksWithCategory]
        tasksWithCategory(categoryId: Int!): TasksWithCategory
    }
    type Mutation {
        addTask(name: String!, categoryId: Int!): TaskResponse
        updateTask(taskId: Int!, name: String, categoryId: Int!): TaskResponse
        updateTaskStatus(taskId: Int!, categoryId: Int!, completed: Boolean!): TaskResponse
        deleteTask(taskId: Int!): TaskResponse
        addCategory(name: String!, afterCategoryId: Int!): CategoryResponse
    }
    type TasksWithCategory {
        categoryId: Int!
        name: String!
        afterCategoryId: Int
        completed: Boolean!
        tasks: [Task]
    }
    type Category {
        id: Int!
        name: String!
    }
    type Task {
        taskId: Int!
        name: String!
        completed: Boolean!
    }
    type TaskResponse {
        data: Task
        error: String
        ok: Boolean
    }
    type CategoryResponse {
        data: Category
        error: String
        ok: Boolean
    }
`);

module.exports = schema;