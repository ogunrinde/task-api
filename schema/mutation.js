const tasks = require('../data/tasks');
let alltasks = require('../data/tasks');

const mutation = {
    addTask: async ({ name, categoryId }, context) => {
        const index = alltasks.findIndex(x => x.categoryId == categoryId);

        if(index == -1 ) {
            return {
                data: null,
                ok: false,
                error: 'Category not Found'
            };
        }
        const newtask = {
            taskId: alltasks[index].tasks.length + 1,
            name: name,
            completed: false
        }
        
        alltasks[index].tasks.push(newtask);
        return {
            data: newtask,
            ok: true,
            error: ''
        };
    },

    updateTask: async ({ taskId, name, categoryId }, context) => {
        const index = alltasks.findIndex(task => task.categoryId == categoryId)

        if(index == -1) {
            return {
                data: null,
                ok: false,
                error: 'Task category not found'
            };
        }
 
        const task = alltasks[index].tasks.find(task => task.taskId === taskId)
        if(!task) {
            return {
                data: null,
                ok: false,
                error: 'Task not found'
            };
        }

        if (name) task.name = name
        alltasks[index].tasks.map(task => task.taskId === taskId ? task : task)
        return {
            data: task,
            ok: true,
            error: ''
        };
    },

    updateTaskStatus: async ({ taskId, categoryId, completed }, context) => {
        const index = alltasks.findIndex(task => task.categoryId == categoryId)

        if(index == -1) {
            return {
                data: null,
                ok: false,
                error: 'Task category not found'
            };
        }

        //Is the previous Category tasks Completed
        const aftercategoryId = alltasks[index].afterCategoryId;
        if(aftercategoryId != null) {
            const previous_category_index = alltasks.findIndex(task => task.categoryId == aftercategoryId)
            if(alltasks[previous_category_index].completed == false) {
                return {
                    data: null,
                    ok: false,
                    error: `Kindly all Tasks in ${alltasks[previous_category_index].name}`
                };
            }
        }
 
        const task = alltasks[index].tasks.find(task => task.taskId === taskId)

        if(!task) {
            return {
                data: null,
                ok: false,
                error: 'Task not found'
            };
        }

        task.completed = completed
        alltasks[index].tasks.map(task => task.taskId === taskId ? { ...task, completed: completed} : task)

        //Is all task under a category completed
        const index_of_pending_task = alltasks[index].tasks.findIndex(task => task.completed == false);

        if(index_of_pending_task == -1) {
            //all tasks under categoryId are completed
            alltasks[index].completed = true
        }
        return {
            data: task,
            ok: true,
            error: ''
        };
    },
    addCategory: async ({ name, afterCategoryId }, context) => {
        const newCategory = {
            categoryId: alltasks.length + 1,
            completed: false,
            name: name,
            afterCategoryId: afterCategoryId,
            tasks: []
        }

        alltasks.push(newCategory);
        return {
            data: newCategory,
            ok: true,
            error: ''
        }
    }
};

module.exports = mutation