import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: { // 声明全局变量，可以通过this.$store.state 访问
        count: 0,
        todos: [
            { id: 1, text: '水电费包括', done: true },
            { id: 2, text: '分类软天空', done: false },
            { id: 3, text: '双方都离开', done: false },
            { id: 4, text: '东风本田', done: false }
          ]
    },
    getters: { // 相当于state 的计算属性， 通过this.$store.getters 调用
        doneTodos(state) {
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length;
        }
    },
    mutations: { // 只能执行同步方法， 通过this.$store.commit 的方式调用
        // mutations 的第一个参数是state 对象
        addCount(state) {
            state.count++;
        },
        addNumCount(state, n) {
            state.count+= n;
        }
    },
    actions: { // 借助actions 执行mutations, 通过this.$store.dispatch 的方式调用
        // 可以执行异步操作， actins 的第一个参数是context ,它具有和store 实例相同方法和属性(context.state\context.getters)
        addCount(context) {
            context.commit('addCount');
        },
        addNumCount(context, n) {
            context.commit('addNumCount', n);
        }
    }
})