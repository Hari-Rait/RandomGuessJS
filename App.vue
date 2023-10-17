<script setup>
import { ref } from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
])
function RandomGuess(){
   document.getElementById('outputRandomField').innerHTML = newTodo[Math.floor(Math.random() * newTodo.length)];
}	

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Hinzufügen</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
  <br>
  <form @submit.prevent="randomGuess">
    <button @click="randomGuess">Zufallsausgabe</button>
    <p id="outputRandomField"></p>
  </form>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>