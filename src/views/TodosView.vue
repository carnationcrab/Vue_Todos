<script setup lang="ts">
import TodoForm from '@/components/TodoForm.vue';
import TodosList from '../components/TodosList.vue'
</script>

<template>
    <main>
        <h1>Add a Todo</h1>
        <TodoForm />
        <h1>Todo List</h1>
        <TodosList />
    </main>
</template>
