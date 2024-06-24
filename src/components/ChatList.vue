<template>
    <div class="list-content">

        <ChatModal v-if="modalVisible" @closeModal="closeModal"></ChatModal>
        <div class="list-content__plus">
            <button class="list-content__button" @click="openModal">
                <img src="../img/plus.svg" alt="" height="24">
            </button>
        </div>

        <ul class="list-content__contacts">
            <ChatContact v-for="contact in store.getters.getSortedContacts" :key="contact.id" :contact="contact" mode="chatList"></ChatContact>
        </ul>

    </div>
</template>

<script setup>
import ChatContact from './ChatContact.vue'
import ChatModal from './ChatModal.vue'
import { useStore } from 'vuex'
import { onBeforeMount, ref } from 'vue';

const store = useStore()
const modalVisible = ref(false)

function openModal() {
    modalVisible.value = true
}
function closeModal() {
    modalVisible.value = false
}
onBeforeMount(() => {
    const selectedContactId = store.getters.getSortedContacts[0].id
    store.commit('setSelectedContactId', selectedContactId)
})
</script>

<style scoped>
.list-content {
    height: 100%;
    flex-basis: 20%;

    display: flex;
    flex-direction: column;
}
.list-content__plus {
    display: flex;
    justify-content: end;
    align-items: center;

    border-bottom: solid 1px var(--grey-color);
    padding: 5px;
    min-height: 40px;
}
.list-content__button {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
}
.list-content__contacts {
    overflow: auto;
}
.list-content__contacts::-webkit-scrollbar {
    scrollbar-width: none;
}

</style>