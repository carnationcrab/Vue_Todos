<template>
  <div v-for="todo in todos" :key="todo.id" class="list">
    <div class="item">
      <div>
        <span @click.stop="toggleComplete(todo.id)">
          {{ todo.completed ? "&#10004;" : "&#x25A1;" }}
        </span>
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <span @click="deleteTodo(todo.id)" class="delete">&#10060;</span>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import useTodoStore from "@/stores/TodoStore";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useTodoStore();

    const { todos } = storeToRefs(store);
    const { toggleComplete, deleteTodo } = store;

    return { todos, toggleComplete, deleteTodo };
  },
};

</script>

<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
}

.list {
  display: flex;
  justify-content: center;
}

.item {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}
</style>