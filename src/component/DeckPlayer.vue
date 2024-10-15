<script setup lang="ts">
import getCardStore from "../service/StoreService.ts";
import { onMounted, ref } from "vue";
import Deck from "../model/Deck.ts";
import { Card } from "../model/Card.ts";

const store = getCardStore();
const playing = ref(false);
const currentDeck: Deck = ref({});
const playRandom = ref(false);
const playInfinite = ref(false);
const currentCard: Card = ref({});
const cardIdx = ref(0);
const cardHistory = ref<number[]>([]);

const randomToggle = () => { playRandom.value = !playRandom.value; }
const infiniteToggle = () => { playInfinite.value = !playInfinite.value; }

onMounted(() => {
    let currDeck = store.getSelectedDeck();
    if (currDeck.name === "No Deck") {
        console.log("No deck selected");
        playing.value = false;
    } else {
        console.log("Deck selected: " + store.getSelectedDeck().name);
        currentDeck.name = currDeck.name;
        currentDeck.cards = currDeck.cards;
        currentDeck.id = currDeck.id;
        cardIdx.value = 0;
        cardHistory.value = [];
        playing.value = true;
    }
});

function nextCard() {
    console.log("Next card");
    cardHistory.value.push(cardIdx.value);
    if (cardHistory.value.length > 10) {
        cardHistory.value.shift();
    }

    if (playRandom.value) {
        console.log("Random play");
        cardIdx.value = Math.floor(Math.random() * currentDeck.cards.length);
    } else if (playInfinite.value) {
        console.log("Infinite play");
        cardIdx.value = (cardIdx.value + 1) % currentDeck.cards.length;
    } else {
        console.log("Normal play");
        if (cardIdx.value < currentDeck.cards.length - 1) {
            cardIdx.value++;
        } else {
            cardIdx.value = 0;
            playing.value = false;
        }
    }
}

function previousCard() {
    console.log("Previous card");
    if (cardHistory.value.length > 0) {
        cardIdx.value = cardHistory.value.pop()!;
    }
}
</script>

<template>
    <div class="container">
        <div v-if="playing">
            <Button @click="nextCard">Next Card</Button>
            <div class="cardDisplay">
                <h2>{{ cardIdx }}</h2>
            </div>
            <Button @click="previousCard">Previous Card</Button>
            <ToggleSwitch v-model="playRandom">Random</ToggleSwitch>
            <ToggleSwitch v-model="playInfinite">Infinite</ToggleSwitch>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: blue;
}
</style>