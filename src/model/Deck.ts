import Card from "./Card.ts";

export interface Deck {
    id: number;
    name: string;
    cards: Card[];
}