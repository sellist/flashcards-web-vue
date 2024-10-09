<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../component/Navbar.vue";

const isNavbarVisible = ref(true);

function toggleNavbar() {
    isNavbarVisible.value = !isNavbarVisible.value;
}
</script>

<template>
    <Navbar :class="{ hidden: !isNavbarVisible }" @toggle-navbar="toggleNavbar" />
    <div :class="{ 'navbar-offset': isNavbarVisible }">
        <slot></slot>
    </div>
    <button v-if="!isNavbarVisible" @click="toggleNavbar" class="show-navbar-button">Show Navbar</button>
</template>

<style scoped>
.navbar-offset {
    margin-top: calc(var(--navbar-height) + 10px);
    padding: 0;
}

.navbar-offset.hidden {
    margin-top: 0;
}

.show-navbar-button {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 101;
    background-color: green;
    border: none;
    padding: 10px;
    cursor: pointer;
}
</style>