var todos = new Vue({
    el: '#Todos',
    data: {
      todos: []
    },
    methods: {
      DeleteToDo(todo){
        this.todos.splice(this.todos.indexOf(todo), 1);
        console.log(todos.todos.length);
      }
    }
  })

function addToDo(){
    todos.todos.push(prompt("Tache a faire:"));
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