var todoList = {
    todos: [],
    
    addTodo: function(todoText){
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
        var totalTodos = this.todos.length;

        if (totalTodos === 0)
            console.log('Your todo list are empty! Try adding new todos!');

        else{
            this.todos.forEach(function(todo){
                if (todo.completed === true)
                    toggleCount++;
            
            });

            // se todos estão completos, todos irão mudar
            if (toggleCount === this.todos.length){
                this.todos.forEach(function(todo){
                    todo.completed = false;
                
                });

            }

            // em qualquer outra situação, todos ficarão completos
            else {
                this.todos.forEach(function(todo){
                    todo.completed = true;

                });

            }

        }

    },

    displayTodos: function(){
        var totalTodos = this.todos.length;

        if (totalTodos === 0)
            console.log('Your todo list are empty! Try adding new todos!');
            
        else{
            console.log('My todos:');
            this.todos.forEach(function(todo){
                if (todo.completed === true)
                    console.log('(X)', todo.todoText);
                else 
                    console.log('( )', todo.todoText);

            });

        }
    
    }

};

var handlers = {
    toggleAll: function(){
        todoList.toggleAll();
        view.displayTodos();

    },

    addTodo: function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();

    },
    
    removeTodo: function(position){
        todoList.removeTodo(position);
        removeTodoPositionInput.value = '';
        view.displayTodos();

    },

    // Nas funções abaixo, a posição é subtraída de 1 antes de ser passada como parâmetro
    // porque para facilitar interação do usuário, coloquei o valor mínimo nas opções de 1.
    // 
    // Assim fica mais intuitivo, o usuário não vai pensar em colocar posição = 0, o programa
    // trata isso.

    changeTodo: function(){
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        todoList.changeTodo((changeTodoPositionInput.value-1), changeTodoTextInput.value);
        changeTodoTextInput.value = '';
        changeTodoPositionInput.value = '';
        view.displayTodos();
        
    },

    toggleTodo: function(){
        var toggleTodoPositionInput = document.getElementById('toggleTodoPositionInput');
        todoList.toggleTodo(toggleTodoPositionInput.value-1);
        toggleTodoPositionInput.value = '';
        view.displayTodos();

    }

};

var view = {
    displayTodos: function(){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i=0; i<todoList.todos.length; i++){
            var todoLi = document.createElement('li');
            var todo =  todoList.todos[i];
            var fullTodoText = '';

            if (todo.completed === true)
                fullTodoText = '(X) ' + todo.todoText;

            else 
                fullTodoText = '( ) ' + todo.todoText;

            todoLi.id = i;
            todoLi.textContent = fullTodoText;
            todoLi.class = 'list-group-item';
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);    

        }
        
    },

    createDeleteButton: function(){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    
    },

    setUpEventListeners: function(){
        var todosUl = document.querySelector('ul');

        // Ao invés de criar eventos para cada filho da ul, criamos um evento geral para que todos
        // os filhos possam puxar da mãe.
        todosUl.addEventListener('click', function(event){
            console.log(event.target.parentNode.id);
        
            var elementCliked = event.target;
        
            if (elementCliked.className === 'deleteButton'){
                handlers.removeTodo(parseInt(elementCliked.parentNode.id));
            
            }

        });

    }

};

// Cria todos os eventos de uma vez, a própria função cuida de classificar o evento.
view.setUpEventListeners();