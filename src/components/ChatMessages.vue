<template>
    <div class="chat-content">

        <div class="chat-content__messages">
            <ChatMessage v-for="message in store.getters.getMessages" :key="message.id" :message="message"></ChatMessage>
        </div>
    
        <div class="chat-content__sending">
            <input type="text" class="chat-content__input" autofocus placeholder="Write message..."  v-model.trim="message" @keyup.enter="sendMessage">
            <button class="chat-content__button" @click="sendMessage">
                <img src="../img/send.svg" alt="" height="15">
            </button>
        </div>

    </div>
</template>

<script setup>
import ChatMessage from './ChatMessage.vue'
import { useStore } from 'vuex'
import { ref } from 'vue';

const store = useStore()
const message = ref('')

function sendMessage() {
    if (!message.value) {
        return
    }
    store.dispatch('saveMessage', [message.value, store.getters.getSelectedContactId, 'out'])
    message.value = ''
}
</script>

<style scoped>
.chat-content {
    flex-basis: 75%;

    border-right: solid 2px var(--grey-color);
    border-left: solid 2px var(--grey-color);
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: end;
}

.chat-content__messages {
    display: flex;
    flex-direction: column-reverse;
    /* justify-content: end;  шайтанская вещь не работает со скролбаром*/
    row-gap: 1.2rem;

    padding: 1.2rem;
    height: 100%;
    overflow-y: auto;
}
.chat-content__messages::-webkit-scrollbar {
    scrollbar-width: none;
}
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
}
.chat-content__sending {
    border-top: solid 2px var(--grey-color);
    width: 100%;
    height: 40px;
    padding: 0.8rem 1.2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1.5rem;
}
.chat-content__input {
    flex-grow: 1;

    font-size: 1.5rem;
    padding-left: 0.5rem;
    outline: none;
}
.chat-content__button {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    border: none;
    background: rgb(37, 168, 255);
    transition: all 0.3s ease;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
}
.chat-content__button:hover {
    background: rgb(18, 160, 255);
}
.chat-content__button:active {
    transform: scale(1.2);
}
@media (max-width: 1024px) {
    .chat-content {
        flex-basis: auto;

        height: calc(100% - 40px);
        width: 100%;
        border-right: none;
    }
}
</style>