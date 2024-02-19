<template>
    <div class="item">
        <input type="checkbox" v-model="props.todo.completed">
        <div class="details">
            <h3>
                {{ props.todo.text }}
            </h3>
        </div>
        <button @click="onDelete">Delete</button>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import type { Todo } from '@/models/Todo';

const props = defineProps({
    todo: {
        type: Object as () => Todo,
        required: true,
    },
});

const emits = defineEmits(['delete']);

const onDelete = () => {
    emits('delete', props.todo.id);
};
</script>
  
<style scoped>
.item {
    margin-top: 2rem;
    display: flex;
    position: relative;
}

.details {
    flex: 1;
    margin-left: 1rem;
}

h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
}

@media (min-width: 1024px) {
    .item {
        margin-top: 0;
        padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    }

    .item:first-of-type:before {
        display: none;
    }

    .item:last-of-type:after {
        display: none;
    }
}
</style>
  