<script setup lang="ts">

import DeckForm from "../component/DeckForm.vue";
import NavbarEnabledView from "./NavbarEnabledView.vue";


</script>

<template>
    <NavbarEnabledView >
        <DeckForm />
    </NavbarEnabledView>
</template>

<style scoped>

    div {
        background-color: blue;
        color: white;
        width: 100vw;

    }
</style>