<template>
    <li v-if="mode === 'chatList'" :class="['contact-content', {'contact-content-active': props.contact.id === store.getters.getSelectedContactId} ]" @click="selectContact">
        
        <img class="contact-content__avatar" src="../img/avatar.svg" alt="">

        <div class="contact-content__info">
            <span class="contact-content__name">{{ fullName }}</span>
            <div class="contact-content__message">
                <span>{{ lastMessage }}</span>
                <span class="contact-content__timestamp">{{ lastMessageTime }}</span>
            </div>
        </div>
    </li>

    <li v-if="mode === 'modal'" class="contact-content" @click="addNewChat">
        
        <img class="contact-content__avatar" src="../img/avatar.svg" alt="">

        <div class="contact-content__info">
            <span class="contact-content__name">{{ fullName }}</span>
            <div class="contact-content__message">
                <span></span>
                <span class="contact-content__timestamp"></span>
            </div>
        </div>
    </li>
</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
    contact: Object,
    mode: String,
})
const emit = defineEmits(['closeModal'])
const store = useStore()

const fullName = computed(() => {
    return props.contact.firstName + ' ' + props.contact.lastName
})

const lastMessage = computed(() => {
    const lastMessage = store.state.chats[props.contact.id][0].text
    if (lastMessage.length > 15) {
        return lastMessage.slice(0, 15) + '...'
    }
    return lastMessage
})

const lastMessageTime = computed(() => {
    const dateMessage = new Date(store.state.chats[props.contact.id][0].date)

    let hour = dateMessage.getHours().toString().length < 2 ? '0' + dateMessage.getHours() : dateMessage.getHours() 
    let minute = dateMessage.getMinutes().toString().length < 2 ? '0' + dateMessage.getMinutes() : dateMessage.getMinutes() 
    return hour + ':' + minute
})

function selectContact() {
    store.commit('setSelectedContactId', props.contact.id)
}
function addNewChat() {
    if (props.contact.id in store.state.chats) { // если чат существует
        store.commit('setSelectedContactId', props.contact.id)
        emit('closeModal')
    }
    else { // если не существует
        store.dispatch('saveNewChat', props.contact.id)
        store.commit('setSelectedContactId', props.contact.id)
        emit('closeModal')
    }
}
</script>

<style scoped>
.contact-content {
    border-bottom: solid 1px var(--grey-color);
    min-height: 56px;
    width: 100%;
    padding: 0.8em 1.2em;
    transition: all 0.4s ease;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1em;
}
.contact-content-active {
    background-color: rgb(241, 241, 241);
}
.contact-content:hover {
    background-color: rgb(235, 235, 235)
}
.contact-content__avatar {
    width: 4rem;
}
.contact-content__info {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 0.6rem;
}
.contact-content__name {
    font-size: 1.5rem;
    font-weight: bold;
}
.contact-content__message {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    color: rgb(141, 141, 141);
}
</style>