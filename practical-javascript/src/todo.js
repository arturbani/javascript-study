/*// objeto da tarefa
var todo = {
    todoText: todoText,
    completed: false,

    todo = function(todoText){
        this.todoText = todoText;

    }
    
} */

var todoList = {
    todos = [],
    
    addTodo = function(todoText){
        //var aux = new todo();
        //aux.todoText = todoText;
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    
    },

    toggleTodo = function(position){
        this.todos[position].completed = !this.todos[position].completed;
        this.displayTodos();

    },

    removeTodo = function(position){
        this.todos.splice(position, 1);
    
    },

    changeTodo = function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    
    },

    displayTodos = function(){
        console.log('My todos:' + todos);
    
    }

};