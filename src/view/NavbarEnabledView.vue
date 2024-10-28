<script setup lang="ts">
import { ref } from "vue";

function toggleNavbar() {
    if (isNavbarVisible.value) {
    }
    isNavbarVisible.value = !isNavbarVisible.value;
}

const isNavbarVisible = ref(true);

</script>

<template class="template">
    <div class="nav-container" >
        <transition name="navbar-slide">
        <nav v-if="isNavbarVisible" class="navbar">
            <ul id="nav-buttons">
                <Button @click="$router.push('/')" label="Home"  rounded />
                <Button @click="$router.push('/about')" label="About" rounded />
                <Button @click="$router.push('/create')" label="Create"  rounded />
                <Button @click="$router.push('/play')" label="Play Deck" rounded />
                <Button @click="$router.push('/choose')" label="Choose Deck" rounded />
                <Button @click="toggleNavbar" label="Toggle Navbar" rounded />
            </ul>
        </nav>
        </transition>
        <transition name="fade">
            <Button id="show-nav" v-if="!isNavbarVisible" @click="toggleNavbar" class="show-navbar-button">Show Navbar</Button>
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
    --navbar-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    --navbar-width: 100vw;
    --navbar-position: relative;
    --navbar-top: 0;
    --navbar-left: 0;
    --navbar-z-index: 1;
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

.nav-container {
    height: var(--navbar-height);
}

.navbar {
    min-width: var(--minimum-width);
    position: var(--navbar-position);
    top: var(--navbar-top);
    left: var(--navbar-left);
    width: var(--navbar-width);
    z-index: var(--navbar-z-index);
    box-shadow: var(--navbar-box-shadow);
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
    white-space: nowrap;
    text-align: center;
    text-decoration: none;
}

#show-nav {
    position: fixed; /* Change to fixed position */
    top: var(--navbar-top);
    left: var(--navbar-left);
    z-index: var(--button-z-index);
    cursor: var(--button-cursor);
    margin: var(--button-margin);
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