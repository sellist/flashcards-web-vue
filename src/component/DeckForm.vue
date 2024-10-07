<script setup lang="ts">
import getCardStore from "../service/StoreService.ts";
import Deck from "../model/Deck";
import {ref} from "vue";

const count = ref(0);

function createTestDeck() {
    const store = getCardStore();
    const newDeck: Deck = {
        id: 1,
        name: "Test Deck",
        cards: []
    };

    count.value++;
    store.addDeck(newDeck);
}
</script>

<template>
    <div>
        <h1>Deck Form</h1>
        <button @click="createTestDeck">Create Test Deck</button>
    </div>
</template>

<style scoped>
    div {
        background-color: red;
    }
</style>