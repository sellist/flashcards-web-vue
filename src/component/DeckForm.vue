<script setup lang="ts">
import {onMounted, ref} from "vue";
import getAvailableInfo from "../service/InfoRepository.ts";
import getCardService from "../service/CardService.ts";
import {ScaleRequest} from "../model/request/RequestDTO.ts";

const tonicNote = ref("C");
const accidental = ref("");
const range = ref("4");
const scale = ref("Major");
const availableAccidentals = ref(["-", "#", "b"]);
const availableRange = ref(["1", "2", "3", "4", "5", "6", "7", "8"]);
const availableNotes = ref();
const availableScales = ref();
const cardService = getCardService();

onMounted(() => {
    let info = getAvailableInfo();
    info.getAvailableNotes().then((notes) => {
        availableNotes.value = notes;
    });
    info.getAvailableScales().then((scales) => {
        availableScales.value = scales;
    });
});



function onSubmit() {
    console.log("Submit");

    let scaleRequest: ScaleRequest = {
        tonic: tonicNote.value + accidental.value,
        octave: parseInt(range.value),
        scaleType: scale.value
    };

    console.log(scaleRequest);

    cardService.getScalarCards(scaleRequest).then((cards) => {
        console.log(cards);
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
        </form>
    </div>
</template>

<style scoped>
</style>