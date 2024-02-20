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

        async function saveTodo(item: string) {
            if (item.length === 0) {
                return;
            }
            console.log('saving todo...')
            store.addTodo(item);
            try {
                // TODO add .env and unhardcode all these darn ports
                const api = "http://localhost:3001";
                const response = await fetch(`${api}/api/todos`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify({ text: todo.value }),
                });

                if (!response.ok) {
                    throw new Error("Failed to add todo");
                }
                else {
                    console.log("Added todo");
                }
            } catch (error) {
                console.error("Error adding todo:", error);
                // TODO Should I revert store update? Store will not match if there is an error
            }

            todo.value = "";
        }

        return { todo, saveTodo };
    },
};
</script>