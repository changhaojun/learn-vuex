<template>
  <div class="hello">
    {{count}}
    <p><button @click="addCount">加1</button> <button @click="addNumCount">加{{n}}</button></p>
    <div style="text-align: left;">
      <p>Todos</p>
      <ul>
        <li v-for="todo in todos" :id="todo.id">{{todo.text}}</li>
      </ul>
      <p>doneTodos</p>
      <ul>
        <li v-for="todo in doneTodos" :id="todo.id">{{todo.text}}</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      n: 5
    }
  },
  methods: {
    addCount() {
      this.$store.dispatch('addCount');
    },
    addNumCount() {
      this.$store.dispatch('addNumCount', this.n);
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    todos() {
      return this.$store.state.todos;
    },
    doneTodos() {
      return this.$store.getters.doneTodos;
    }
  },
  mounted() {
    console.log(this.doneTodos);
  }
}
</script>


