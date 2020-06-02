var todos = new Vue({
    el: '#Todos',
    data: {
      todos: []
    },
    methods: {
      DeleteToDo: function(todo){
        this.todos.splice(this.todos.indexOf(todo), 1);
        console.log(todos.todos.length);
      },
    }
  })

function addToDo(){
    const todo = prompt("Tache a faire:");
    if(todo === '') return;
    todos.todos.push(todo)
    console.log(todos.todos.length);
}

function ManualaddToDo(name, number = 1){
  for (let i = 0; i < number; i++) {
    todos.todos.push(name);
  }
  console.log(todos.todos.length);
}

function ClearTodos(){
    todos.todos = []
    console.log(todos.todos.length);
}