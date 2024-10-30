<script setup lang="ts">
import {onMounted, ref} from "vue";
import getCardStore from "../service/StoreService.ts";

function toggleNavbar() {
    isNavbarVisible.value = !isNavbarVisible.value;
}

const cardStore = getCardStore();

const isNavbarVisible = ref(true);
const chosenDeck = ref(false);

if (cardStore.getSelectedDeck() !== undefined) {
    chosenDeck.value = true;
}

onMounted(() => {
    if (cardStore.getSelectedDeck().name == "No Deck") {
        chosenDeck.value = false;
    }
});

</script>

<template class="template">
    <div class="nav-container" >
        <transition name="navbar-slide">
        <nav v-if="isNavbarVisible" class="navbar">
            <ul id="nav-buttons">
                <Button class="pi pi-home nav-button" @click="$router.push('/')" label="Home" raised rounded ><v-icon name="fa-home" /></Button>
                <Button class="nav-button" @click="$router.push('/about')" label="About" rounded />
                <Button class="nav-button" @click="$router.push('/create')" label="Create"  rounded />
                <Button v-if="chosenDeck" class="nav-button" @click="$router.push('/play')" label="Play Deck" rounded />
                <Button class="nav-button" @click="$router.push('/choose')" label="Choose Deck" rounded />
                <Button class="nav-button" @click="toggleNavbar" label="Toggle Navbar" rounded />
            </ul>
        </nav>
        </transition>
        <transition name="fade">
            <Button rounded id="show-nav" v-if="!isNavbarVisible" @click="toggleNavbar">Show Navbar</Button>
        </transition>
    </div>
    <Transition name="slide">
        <div :class="{ 'navbar-offset': isNavbarVisible }">
            <slot></slot>
        </div>
    </Transition>
</template>

<style scoped>


* {
    --navbar-anim-length: 0.5s;
    --navbar-width: 100vw;
    --navbar-position: relative;
    --navbar-top: 0;
    --navbar-left: 0;
    --navbar-z-index: 0;
    --button-z-index: 0;
    --button-margin: 0;
    --button-cursor: pointer;
    --transition-ease: 0.5s ease;
    --transform-enter-from: translate(0, -100px);
    --transform-enter-to: translate(0, 0);
    --transform-leave-from: translate(0, 0);
    --transform-leave-to: translate(0, -100px);
    --opacity-enter-from: 0;
    --opacity-enter-to: 1;
    --opacity-leave-from: 1;
    --opacity-leave-to: 0;
}

#nav-buttons {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
    padding: 0 0 0 1rem;
    margin: 0 0 0 0;
}

#nav-buttons > button {
    max-height: var(--navbar-height);
    margin-top: calc(var(--navbar-height) / 8);
    margin-bottom: calc(var(--navbar-height) / 8);
    text-wrap: auto;
}

.nav-container {
    height: var(--navbar-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#show-nav {
    max-height: var(--navbar-height);
    margin-top: calc(var(--navbar-height) / 8);
    margin-bottom: calc(var(--navbar-height) / 8);
}

.navbar {
    min-width: var(--minimum-width);
    position: var(--navbar-position);
    top: var(--navbar-top);
    left: var(--navbar-left);
    width: var(--navbar-width);
    z-index: var(--navbar-z-index);
    background-color: var(--navbar-background);
    padding: 0;
    margin: 0;
    height: var(--navbar-height);
    max-height: var(--navbar-height);
    transition: all var(--navbar-anim-length);
    display: flex;
}


template {
    padding: 0;
    margin: 0;
}

Button {
    margin: 0;
    padding: 1rem;
    white-space: nowrap;
    text-align: center;
    text-decoration: none;
}

#show-nav {
    position: fixed; /* Change to fixed position */
    margin-top: calc(var(--navbar-height) / 8);
    margin-left: 3%;
    z-index: var(--button-z-index);
    cursor: var(--button-cursor);
    transition: transform var(--navbar-anim-length), opacity var(--navbar-anim-length);
}

.fade-enter-active,
.fade-leave-active,
.navbar-slide-enter-active,
.navbar-slide-leave-active {
    transition: transform var(--navbar-anim-length), opacity var(--navbar-anim-length);
}

.fade-enter-from,
.navbar-slide-enter-from {
    transform: var(--transform-enter-from);
    opacity: var(--opacity-enter-from);
}

.fade-enter-to,
.navbar-slide-enter-to {
    transform: var(--transform-enter-to);
    opacity: var(--opacity-enter-to);
}

.fade-leave-from,
.navbar-slide-leave-from {
    transform: var(--transform-leave-from);
    opacity: var(--opacity-leave-from);
}

.fade-leave-to,
.navbar-slide-leave-to {
    transform: var(--transform-leave-to);
    opacity: var(--opacity-leave-to);
}
</style>