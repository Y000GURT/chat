<template>
  <div class="chat">
    <ChatList></ChatList>

    <div class="chat__main">
      <ChatMessages></ChatMessages>
      <ChatProfile></ChatProfile>
    </div>
  </div>
</template>

<script setup>
import ChatList from './components/ChatList.vue'
import ChatMessages from './components/ChatMessages.vue'
import ChatProfile from './components/ChatProfile.vue'
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

onBeforeMount(() => {
  store.dispatch('loadChats')
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  --grey-color: rgb(193, 194, 195);
}
html {
  color: #292929;
  font-family: 'Times New Roman', Times, serif;
  height: 100%;
  font-size: 62.5%;
}
body {
  height: 100%;
  line-height: 1;
}
#app {
  height: 100%;
  width: 100%;
  padding: 15px;
}
button {
  border: none;
  background: none;
}
ul {
  list-style-type: none;
}
.chat {
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: solid 2px var(--grey-color);
  height: 100%;
}
.chat__main {
  display: flex;
  justify-content: center;
  align-items: center;

  flex-basis: 80%;
  height: 100%;
}

@media (max-width: 1024px) {
  .chat__main {
    flex-direction: column-reverse;
    justify-content: space-between;
  }
}
</style>
