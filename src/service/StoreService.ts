import { reactive } from "vue";
import { Deck } from "../model/Deck";

export const store = reactive({
    decks: [] as Deck[],
    selectedDeck: null as Deck | null,
});