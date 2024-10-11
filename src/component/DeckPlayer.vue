<script setup lang="ts">
import getCardStore from "../service/StoreService.ts";
import {onMounted, ref} from "vue";
import Deck from "../model/Deck.ts";
import {Card} from "../model/Card.ts";

const store = getCardStore();
const playing = ref(false);
const currentDeck: Deck = ref({});
const playRandom = ref(false);
const playInfinite = ref(false);
const currentCard: Card = ref(0);
const cardIdx = ref(0);

const randomToggle = () => {playRandom.value = !playRandom.value;}
const infiniteToggle = () => {playInfinite.value = !playInfinite.value};



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

        playing.value = true;
    }

});

function nextCard() {
    console.log("Next card");
    if (playRandom) {
        console.log("Random play");
        cardIdx.value = Math.floor(Math.random() * currentDeck.cards.length);
    } else if (playInfinite) {
        console.log("Infinite play");
        cardIdx.value = (cardIdx.value + 1) % currentDeck.cards.length;
    } else {
        console.log("Normal play");
        if (cardIdx.value < currentDeck.cards.length) {
            cardIdx.value++;
        }
        if (cardIdx.value === currentDeck.cards.length) {
            cardIdx.value = 0;
            playing.value = false;
        }

    }
}

function previousCard() {
    console.log("Previous card");
}


</script>

<template>
    <div class="container">
        <div v-if="playing">
            <Button @click="nextCard">Next Card</Button>
            <div class="cardDisplay">
                <h2>{{currentDeck}}</h2>
            </div>
            <Button @click="previousCard">Previous Card</Button>
            <ToggleSwitch v-if="store.getSelectedDeck()" v-model="playRandom" @change="randomToggle">Random</ToggleSwitch>
            <ToggleSwitch v-model="playInfinite" @change="infiniteToggle">Infinite</ToggleSwitch>
        </div>
    </div>

</template>

<style scoped>
    .container {
        background-color: blue;
    }
</style>