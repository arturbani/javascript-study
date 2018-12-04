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
        var toggledTodo = !this.todos[position].completed;
        this.todos[position].completed = toggledTodo;
        this.displayTodos();

    },

    toggleAll: function(){
        var toggleCount = 0;

        if (this.todos.length === 0)
            console.log('Your todo list are empty! Try adding new todos!');

        else{
            for (var i=0; i<this.todos.length; i++){
                if (this.todos[i].completed === true)
                    toggleCount++;

            }

            // se todos estão completos, todos irão mudar
            if (toggleCount === this.todos.length){
                for (var i=0; i<this.todos.length; i++){
                    this.todos[i].completed = false;

                }

            }

            // em qualquer outra situação, todos ficarão completos
            else {
                for (var i=0; i<this.todos.length; i++){
                    this.todos[i].completed = true;

                }

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

var handlers = {
    displayTodos: function(){
        todoList.displayTodos();    
    
    },

    toggleAll: function(){
        todoList.toggleAll();
    
    },

    addTodo: function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';

    },

    // Nas funções abaixo, a posição é subtraída de 1 antes de ser passada como parâmetro
    // porque para facilitar interação do usuário, coloquei o valor mínimo nas opções de 1
    // 
    // Assim fica mais intuitivo, o usuário não vai pensar em colocar posição = 0, o programa
    // trata isso.

    changeTodo: function(){
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        todoList.changeTodo((changeTodoPositionInput.value-1), changeTodoTextInput.value);
        changeTodoTextInput.value = '';
        changeTodoPositionInput.value = '';
 
    },

    removeTodo: function(){
        var removeTodoPositionInput = document.getElementById('removeTodoPositionInput');
        todoList.removeTodo(removeTodoPositionInput.value-1);
        removeTodoPositionInput.value = '';

    },

    toggleTodo: function(){
        var toggleTodoPositionInput = document.getElementById('toggleTodoPositionInput');
        todoList.toggleTodo(toggleTodoPositionInput.value-1);
        toggleTodoPositionInput.value = '';

    }

};