<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TodosItem from './TodosItem.vue';
import type { Todo } from '@/models/Todo';

const todos = ref<Todo[]>([]);
const newTodoText = ref<string>('');

onMounted(() => {
    fetchTodos();
});

const fetchTodos = () => {
    todos.value = [
        { id: 1, text: 'Learn Vue.js', completed: true },
        { id: 2, text: 'Build a CRUD app', completed: false },
    ];
};

const addTodo = () => {
    if (newTodoText.value.trim() !== '') {
        const newTodo: Todo = {
            id: todos.value.length + 1,
            text: newTodoText.value,
            completed: false,
        };
        todos.value.push(newTodo);
        newTodoText.value = '';
    }
};

const deleteTodo = (id: number) => {
    todos.value = todos.value.filter(todo => todo.id !== id);
};
</script>

<template>
    <div>
        <h1>Todo List</h1>
        <div>
            <input v-model="newTodoText" placeholder="Add a new todo" />
            <button @click="addTodo">Add Todo</button>
        </div>
        <ul>
            <todos-item v-for="todo in todos" :key="todo.id" :todo="todo" @delete="deleteTodo" />
        </ul>
    </div>
</template>