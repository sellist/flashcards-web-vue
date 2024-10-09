<script setup lang="ts">

import Navbar from "./component/Navbar.vue";
</script>

<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style>
#nav-container {
    margin: 0;
    padding: 0;
    width: 100%;
    max-height: var(--navbar-height);
}

#navbar-obj {
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius: calc(var(--navbar-height) / 2);
    z-index: 100;
    position: fixed;
    top: 5px

}

</style>
