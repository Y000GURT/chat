<template>
    <teleport to="body">
        <div class="modal__wrapper" @click="emit('closeModal')">
            <div class="modal__content" @click.stop="">

                <div class="modal__header">
                    <div class="modal__name">Choose contact</div>
                    <button class="modal__close" @click="emit('closeModal')">
                        <img src="../img/cross.svg" alt="" height="12" width="12">
                    </button>
                </div>
    
                <ul class="modal__contacts">
                    <ChatContact v-for="contact in store.getters.getContacts" :key="contact.id" :contact="contact" mode="modal" @closeModal="emit('closeModal')"></ChatContact>
                </ul>

            </div>
        </div>
    </teleport>
</template>

<script setup>
import ChatContact from './ChatContact.vue'
import { useStore } from 'vuex'
import { defineEmits } from 'vue';

const store = useStore()
const emit = defineEmits(['closeModal'])

</script>

<style scoped>
.modal__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(129, 129, 129, 0.4);
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;
}
.modal__content {
    width: 20%;
    height: 50%;
    background-color: white;

    display: flex;
    flex-direction: column;
}
.modal__header {
    padding: 10px;
    border-bottom: solid 1px var(--grey-color);

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal__name {
    font-size: 1.6rem;
    font-weight: bold;
}
.modal__close {
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal__close > img {
    transition: all 0.3s ease;
}
.modal__close > img:hover {
    transform: scale(1.2);
}
.modal__contacts {
    height: 100%;
    overflow: auto;
}
.modal__contacts::-webkit-scrollbar {
    scrollbar-width: none;
}
</style>
