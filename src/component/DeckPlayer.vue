<script setup lang="ts">
import getCardStore from "../service/StoreService.ts";
import {onMounted} from "vue";

const store = getCardStore();

onMounted(() => {
    console.log("playing with deck ")
    if (store.getSelectedDeck() === null) {
        console.log("No deck selected");
    } else {
        console.log("Deck selected: " + store.getSelectedDeck().name);
    }
});
console.log("playing with deck ")
</script>

<template>
    <div>
        <h1>Deck Player</h1>
    </div>
</template>

<style scoped>
    div {
        background-color: blue;
    }
</style>