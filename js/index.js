var app = new Vue({
  el: '#app',
  data: {
    todos: [],
    id: 1
  },
  methods: {
    DeleteToDo: function(todo){
      this.todos.splice(this.todos.indexOf(todo), 1);
      console.log(this.todos.length);
    },
    addToDo(){
      const todo = prompt("Tache a faire:");
      if(todo === '') return;
      this.todos.push({
        text: todo,
        id: this.id
      })
      this.id++;
      console.log(this.todos.length);
    },
    ClearTodos(){
      this.todos = []
      console.log(this.todos.length);
    },
    ManualaddToDo(name, number = 1){
      for (let i = 0; i < number; i++) {
        this.todos.push({
          text: name,
          id: this.id
        })
        this.id++;
      }
      console.log(this.todos.length);
    }
  }
})
