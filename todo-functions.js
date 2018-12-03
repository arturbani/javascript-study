// variável apenas para testes
var todos = ['Item 1', 'Item 2'];

function addTodo(todo){
    todos.push(todo);

}

function removeTodo(position){
    todos.splice(position, 1);

}

function changeTodo(position, newTodo){
    todos[position] = newTodo;

}

function displayTodos(){
    console.log('My todos:' + todos);

}