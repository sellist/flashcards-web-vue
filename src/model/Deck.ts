import {Card} from "./Card.ts";

export default interface Deck {
    id: number;
    name: string;
    cards: Card[];
}
