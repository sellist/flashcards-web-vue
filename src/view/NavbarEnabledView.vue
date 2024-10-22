<script setup lang="ts">
import { ref } from "vue";

function toggleNavbar() {
    isNavbarVisible.value = !isNavbarVisible.value;
}

const isNavbarVisible = ref(true);

</script>

<template>
    <div class="nav-container">
        <nav v-if="isNavbarVisible" class="navbar" :class="{ hidden: !isNavbarVisible }" @toggle-navbar="toggleNavbar">
            <ul>
                <Button @click="$router.push('/')" label="Home"  rounded />
                <Button @click="$router.push('/about')" label="About" rounded />
                <Button @click="$router.push('/create')" label="Create"  rounded />
                <Button @click="$router.push('/play')" label="Play Deck" rounded />
                <Button @click="$router.push('/choose')" label="Choose Deck" rounded />
                <Button @click="toggleNavbar" label="Toggle Navbar" rounded />
            </ul>
        </nav>
        <Button v-if="!isNavbarVisible" @click="toggleNavbar" class="show-navbar-button">Show Navbar</Button>
    </div>
    <div :class="{ 'navbar-offset': isNavbarVisible }">
        <slot></slot>
    </div>
</template>

<style>

.nav-container {
    height: var(--navbar-height);
}

.navbar {
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1;
}

ul {
    display: flex;
    margin: 0;
    padding: 0;
}

.show-navbar-button {
    position: relative;
    z-index: 0;
    margin: 0;
    cursor: pointer;
}

template {
    padding: 0;
    margin: 0;
}

nav {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: var(--navbar-background);
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    height: var(--navbar-height);
    max-height: var(--navbar-height);
}

Button {
    margin: 0;
}

nav.hidden {
    transform: translateY(-100%);
}



</style>