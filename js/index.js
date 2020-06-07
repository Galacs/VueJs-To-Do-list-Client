var app = new Vue({
  el: '#app',
  data: {
    todos: []
  },
  methods: {
    DeleteToDo: function(todo){
      this.todos.splice(this.todos.indexOf(todo), 1);
      console.log(this.todos.length);
    },
    addToDo(){
      const todo = prompt("Tache a faire:");
      if(todo === '') return;
      this.todos.push(todo)
      console.log(this.todos.length);
    },
    ClearTodos(){
      this.todos = []
      console.log(this.todos.length);
    },
    ManualaddToDo(name, number = 1){
      for (let i = 0; i < number; i++) {
        this.todos.push(name);
      }
      console.log(this.todos.length);
    }
  }
})
