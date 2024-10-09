<script setup lang="ts">
import {ref} from "vue";

const emits = defineEmits(['toggle-navbar']);
const isVisible = ref(true);

function toggleNavbar() {
    isVisible.value = !isVisible.value;
    emits('toggle-navbar');
}
</script>

<template>
<nav>
    <ul>
        <Button @click="$router.push('/')" label="Home"  rounded />
        <Button @click="$router.push('/about')" label="About" rounded />
        <Button @click="$router.push('/create')" label="Create"  rounded />
        <Button @click="$router.push('/play')" label="Play Deck" rounded />
        <Button @click="$router.push('/choose')" label="Choose Deck" rounded />
        <Button @click="toggleNavbar" label="Toggle Navbar" rounded />
    </ul>
</nav>
</template>

<style scoped>
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

ul {
    display: flex;
    margin: 0;
    padding: 0;
}
</style>