const alltasks = require('../data/tasks');

const query = {
    alltasksWithCategory: async (context) => {
        return alltasks;
    },
    tasksWithCategory: async ({categoryId}, context) => {
        return alltasks.find(taskCategory => taskCategory.categoryId === categoryId);
    },
    taskById: async ({id}, context) => {
        return alltasks.find(taskCategory => taskCategory.tasks.taskId=== id);
    },
};

module.exports = query;