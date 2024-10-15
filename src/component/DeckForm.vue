<script setup lang="ts">
import {onMounted, ref} from "vue";
import getAvailableInfo from "../service/InfoRepository.ts";
import getCardService from "../service/CardService.ts";
import {ScaleRequest} from "../model/request/RequestDTO.ts";
import getCardStore from "../service/StoreService.ts";

const tonicNote = ref("C");
const accidental = ref("");
const range = ref("4");
const scale = ref("Major");
const availableAccidentals = ref(["-", "#", "b"]);
const availableRange = ref(["1", "2", "3", "4", "5", "6", "7", "8"]);
const availableNotes = ref();
const availableScales = ref();
const cardService = getCardService();
const store = getCardStore();

onMounted(() => {
    let info = getAvailableInfo();
    info.getAvailableNotes().then((notes) => {
        availableNotes.value = notes;
    });
    info.getAvailableScales().then((scales) => {
        availableScales.value = scales;
    });
});
const messageQueue = ref<string[]>([]);
const successMessage = ref(false);



function onSubmit() {
    console.log("Submit");

    if (successMessage.value) {
        console.log("Please wait for the current deck creation to complete.");
        return;
    }

    messageQueue.value.push("Deck creation successful");
    setTimeout(() => {
        messageQueue.value.shift();
    }, 3000); // Remove after 3 seconds

    const scaleRequest: ScaleRequest = {
        tonic: tonicNote.value + accidental.value,
        octave: parseInt(range.value),
        scaleType: scale.value
    };

    console.log(scaleRequest);

    cardService.getScalarDeck(scaleRequest).then((cards) => {
        console.log(cards);
        store.addDeck(cards);
        successMessage.value = true;
        setTimeout(() => {
            successMessage.value = false;
        }, 3000); // Hide after 3 seconds
    });

}

</script>

<template>
    <div>
        <h1>Deck Form</h1>
        <form>
            <Select v-model="tonicNote" :options="availableNotes" placeholder="C"/>
            <Select v-model="accidental" :options="availableAccidentals" placeholder="-"/>
            <Select v-model="range" :options="availableRange" placeholder="1"/>
            <Select v-model="scale" :options="availableScales" placeholder="Major"/>
            <Button @click="onSubmit">Submit</Button>
            <transition name="fade">
                <div v-if="successMessage" class="success-message">Deck creation successful</div>
            </transition>
        </form>
    </div>
</template>

<style scoped>
.success-message {
    color: green;
    font-weight: bold;
    margin-top: 10px;
}

</style>