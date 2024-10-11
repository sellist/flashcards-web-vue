<script setup lang="ts">

import getCardStore from "../service/StoreService.ts";
import {onBeforeMount} from "vue";
import Deck from "../model/Deck.ts";
import {useRouter} from "vue-router";
import NavbarEnabledView from "./NavbarEnabledView.vue";

const store = getCardStore();
const decks: Deck[] = [];
const router = useRouter();

function selectDeck(deck: Deck) {
    console.log("Selected deck: " + deck.name);
    store.setSelectedDeck(deck);
    router.push('/play');
}

onBeforeMount(() => {
    for (const deck of store.getDecks()) {
        decks.push(deck);
    }
});


</script>

<template>
    <NavbarEnabledView>
        <h1>DeckChoiceView</h1>
        <div v-for="deck in decks" :key="deck.id">
            <Button @click="selectDeck(deck)">{{deck.name}}</Button>
        </div>

    </NavbarEnabledView>
</template>

<style scoped>

</style>