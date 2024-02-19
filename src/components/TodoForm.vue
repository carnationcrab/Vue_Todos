<template>
    <form @submit.prevent="saveTodo(todo)">
        <input v-model="todo" type="text" /><button>Add</button>
    </form>
</template>
  
<script lang="ts">
import useTodoStore from "@/stores/TodoStore";
import { ref } from "vue";

export default {
    setup() {
        const todo = ref("");
        const store = useTodoStore();

        function saveTodo(item: string) {
            if (item.length === 0) {
                return;
            }
            store.addTodo(item);
            todo.value = "";
        }

        return { todo, saveTodo };
    },
};
</script>