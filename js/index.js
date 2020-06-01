var todos = new Vue({
    el: '#Todos',
    data: {
      todos: []
    },
    methods: {
      DeleteToDo(todo){
        this.todos.splice(this.todos.indexOf(todo), 1);
      }
    }
  })

function addToDo(){
    
    todos.todos.push(prompt("Tache a faire:") );
}

function ClearTodos(){
    todos.todos = []
}

function DeleteToDo(element){
  console.log(element);
}