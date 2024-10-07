import { reactive } from "vue";
import Deck from "../model/Deck";

const store = reactive({
    decks: [] as Deck[],
    selectedDeck: null as Deck | null,
});

// @ts-ignore
class CardStore {

    store: any;

    constructor(store: any) {
        this.store = store;
    }

    resetDecks(): void {
        store.decks = [];
        store.selectedDeck = null;
    }

    addDeck(deck: Deck): void {
        console.log(deck.name + " added to store");
        store.decks.push(deck);
    }

    removeDeck(deck: Deck): void {
        const index = store.decks.indexOf(deck);
        store.decks.splice(index, 1);
    }

    setSelectedDeck(deck: Deck): void {
        store.selectedDeck = deck;
    }

    getSelectedDeck(): Deck {
        if (store.selectedDeck === null) {
            return {id: 0, name: "No Deck", cards: []};
        }
        return store.selectedDeck;
    }

    getDecks(): Deck[] {
        console.log("Getting decks from store");
        console.log(store.decks);
        return store.decks;
    }



}

const cardStore = new CardStore(store);

// @ts-ignore
function getCardStore(): CardStore {
    return cardStore;
}

export default getCardStore;