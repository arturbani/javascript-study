var todoList = {
    todos: [],
    
    addTodo: function(todoText){
        //var aux = new todo();
        //aux.todoText = todoText;
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
        
    },
    
    removeTodo: function(position){
        this.todos.splice(position, 1);
    
    },

    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    
    },

    toggleTodo: function(position){
        this.todos[position].completed = !this.todos[position].completed;
        this.displayTodos();

    },

    toggleAll: function(){
        var toggleCount = 0;

        for (var i=0; i<this.todos.length; i++){
            if (this.todos[i].completed === true)
                toggleCount++;

        }

        // se todos estão completos, todos irão mudar
        if (toggleCount === this.todos.length){
            for (var i=0; i<this.todos.length; i++){
                todos[i].completed = false;

            }

        }

        // em qualquer outra situação, todos ficarão completos
        else {
            for (var i=0; i<this.todos.length; i++){
                this.todos[i].completed = true;

            }

        }

    },

    displayTodos: function(){
        if (this.todos.length === 0)
            console.log('Your todo list are empty! Try adding new todos!');
            
        else{
            console.log('My todos:');
            for (var i=0; i<this.todos.length; i++){
                if (this.todos[i].completed === true)
                    console.log('(X)', this.todos[i].todoText);
                else 
                    console.log('( )', this.todos[i].todoText);
            }
        }
    
    }

};

var displayTodosButton = document.getElementById('displayTodosButton');

displayTodosButton.addEventListener('click', function(){
    todoList.displayTodos();
    
});

var toggleAllButton = document.getElementById('toggleAllButton');

toggleAllButton.addEventListener('click', function(){
    todoList.toggleAll();

})