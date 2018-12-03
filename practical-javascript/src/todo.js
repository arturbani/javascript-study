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

    toggleAll = function(){
        var toggleCount = 0;

        for (var i=0; i<todos.length; i++){
            if (todos[i].completed === true)
                toggleCount++;

        }

        // se todos estão completos, todos irão mudar
        if (toggleCount === todos.length){
            for (var i=0; i<todos.length){
                todos[i].completed = false;

            }

        }

        // em qualquer outra situação, todos ficarão completos
        else {
            for (var i=0; i<todos.length){
                todos[i].completed = true;

            }

        }

    },

    removeTodo = function(position){
        this.todos.splice(position, 1);
    
    },

    changeTodo = function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    
    },

    displayTodos = function(){
        if (todos.length === 0)
            console.log('Your todo list are empty! Try adding new todos!');
        
        else{
            console.log('My todos:');
            for (var i=0; i<todos.length; i++){
                if (todos[i].completed === true)
                    console.log('(X)', todos[i].todoText);
                else 
                    console.log('( )', todos[i].todoText);
            }
        }
    
    }

};