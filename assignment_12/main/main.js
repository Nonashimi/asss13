new Vue({
    el: '#app',
    data() {
      return {
        tasks: [
          { id: 1, title: 'Task 1', completed: false },
          { id: 2, title: 'Task 2', completed: true },
        
        ],
        newTask: { title: '', completed: false },
      };
    },
    computed: {
      incompleteTasks() {
        return this.tasks.filter(task => !task.completed);
      },
      completedTasks() {
        return this.tasks.filter(task => task.completed);
      },
    },
    methods: {
      addTask() {
        this.tasks.push({ ...this.newTask, id: this.tasks.length + 1 });
        this.newTask.title = '';
        this.newTask.completed = false;
      },
      toggleCompletion(task) {
        task.completed = !task.completed;
      },
    }
  });