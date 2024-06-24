<template>
    <div class="profile-content">

        <div class="profile-content__info">
            <img src="../img/avatar.svg" alt="" class="profile-content__avatar" height="140">
    
            <span class="profile-content__name">{{ store.getters.getFullName }}</span>
        </div>

        <div class="profile-content__buttons">

            <button class="profile-content__audio">
                <img src="../img/audio.svg" alt="" height="15">
            </button>
            
            <button class="profile-content__video">
                <img src="../img/video.svg" alt="" height="20">
            </button>
            
            <button class="profile-content__like">
                <img src="../img/like.svg" alt="" height="18">
            </button>

        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

</script>

<style scoped>
.profile-content {
    flex-basis: 25%;

    height: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.2rem;
}
.profile-content__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1.2rem;
}
.profile-content__name {
    font-size: 1.5rem;
    font-weight: bold;
}
.profile-content__buttons {
    display: flex;
    column-gap: 1.2rem;
}
.profile-content__audio, .profile-content__video, .profile-content__like {
    border-radius: 50%;
    padding: 5px;
    height: 24px;
    width: 24px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
}
.profile-content__audio {
    background: rgb(0, 156, 0);

}
.profile-content__video {
    background: rgb(20, 147, 221);

}
.profile-content__like {
    background: rgb(218, 64, 64);
}
@media (max-width: 1024px) {
  .profile-content {
    flex-basis: auto;

    width: 100%;
    height: 40px;
    padding: 1rem;
    border-left: solid 2px var(--grey-color);
    border-bottom: solid 1px var(--grey-color);
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.profile-content__avatar {
    height: 24px;
    width: 24px;
}
.profile-content__info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 1.2rem;
}
}
</style>