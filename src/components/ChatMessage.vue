<template>

        <div v-if="props.message.type === 'out'" class="chat-content__message-out">
            <div class="chat-content__text">{{ props.message.text }}</div>
        </div>

        <div v-if="props.message.type === 'in'" class="chat-content__message-in">
            <div class="chat-content__text">{{ props.message.text }}</div>
        </div>

</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    message: Object,
})
</script>

<style scoped>
.chat-content__message-in, .chat-content__message-out {
    border-radius: 10px;
    width: auto;
    max-width: 60%;
    height: auto;
    padding: 0.8rem 1.2rem;
}
.chat-content__message-out {
    border: solid 1px var(--grey-color);

    align-self: end;
}
.chat-content__message-in {
    border: solid 1px rgb(0, 173, 58);
    background-color: rgb(47, 177, 177);
    color: white;
    align-self: flex-start;
}
.chat-content__text {
    font-size: 1.4rem;
    word-break: break-all;
}
</style>