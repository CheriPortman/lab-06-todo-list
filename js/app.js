import taskApi from './todo-api.js';
import addTodo from './add-todo.js';
import taskList from './todo-list.js';

const tasks = taskApi.getAll();

taskList.init(tasks, function(task) {
    //onRemove listener

    taskApi.remove(task);
});

addTodo.init(function(task) {
     //onAdd

    taskApi.add(task);

    taskList.add(task);
});
