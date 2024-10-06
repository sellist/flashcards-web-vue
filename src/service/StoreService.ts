import { reactive } from "vue";
import { Deck } from "../model/Deck";

const store = reactive({
    decks: [] as Deck[],
    selectedDeck: null as Deck | null,
});

export default {
    store
}