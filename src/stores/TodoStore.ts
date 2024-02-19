import type { Todo } from '../models/Todo';
import { defineStore } from 'pinia';

interface TodoStoreState {
    todos: Todo[];
}

export const useTodoStore = defineStore('todos-store', {
    state: (): TodoStoreState => ({
        todos: [],
    }),

    actions: {
        addTodo(item: string) {
            this.todos.push({ id: this.todos.length + 1, text: item, completed: false })
        },
        deleteTodo(id: number) {
            this.todos = this.todos.filter((object) => {
                return object.id !== id;
            });
        },
        toggleComplete(id: number) {
            const todo = this.todos.find((obj) => obj.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    }
});

export default useTodoStore;