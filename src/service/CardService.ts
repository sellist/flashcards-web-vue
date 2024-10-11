import {Card} from "../model/Card.ts";
import CardRepository from "./CardRepository.ts";
import {NotesNameRequest, ScaleRequest} from "../model/request/RequestDTO.ts";
import Deck from "../model/Deck.ts";

class CardService {
  private cardRepository: CardRepository;

  constructor(cardRepository: CardRepository) {
    this.cardRepository = cardRepository;
  }

  public async getCardByString(noteName: NotesNameRequest): Promise<Card> {
    return this.cardRepository.getCardByString(noteName);
  }

  public async getScalarDeck(scaleRequest: ScaleRequest): Promise<Deck> {

    console.log(scaleRequest);

    let notes = this.testResponse.data.notes;
    let deck: Deck = {id: 0, name: "", cards: []};
    deck.name = "Scale Deck";
    deck.cards = [];
    for (let i = 0; i < notes.length; i++) {
      let card: Card = {front: "", back: ""};
      card.front = notes[i].noteName;
      card.back = notes[i].midiValue.toString();
      deck.cards.push(card);
    }
    return deck;
  }

  public getTestResponse(): any {
    return this.testResponse;
  }

  testResponse =
      {
        "data": {
          "notes": [
            {
              "octave": 4,
              "noteName": "C",
              "modifier": 0,
              "midiValue": 60,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 4,
              "noteName": "D",
              "modifier": 0,
              "midiValue": 62,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 4,
              "noteName": "E",
              "modifier": 0,
              "midiValue": 64,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 4,
              "noteName": "F",
              "modifier": 0,
              "midiValue": 65,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 4,
              "noteName": "G",
              "modifier": 0,
              "midiValue": 67,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 4,
              "noteName": "A",
              "modifier": 0,
              "midiValue": 69,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 4,
              "noteName": "B",
              "modifier": 0,
              "midiValue": 71,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 5,
              "noteName": "C",
              "modifier": 0,
              "midiValue": 72,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 5,
              "noteName": "D",
              "modifier": 0,
              "midiValue": 74,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 5,
              "noteName": "E",
              "modifier": 0,
              "midiValue": 76,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 5,
              "noteName": "F",
              "modifier": 0,
              "midiValue": 77,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 5,
              "noteName": "G",
              "modifier": 0,
              "midiValue": 79,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 5,
              "noteName": "A",
              "modifier": 0,
              "midiValue": 81,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 5,
              "noteName": "B",
              "modifier": 0,
              "midiValue": 83,
              "transposition": 0,
              "transposedNote": null
            },
            {
              "octave": 6,
              "noteName": "C",
              "modifier": 0,
              "midiValue": 84,
              "transposition": 0,
              "transposedNote": null
            }
          ],
          "scaleInfo": {
            "root": {
              "octave": 4,
              "noteName": "C",
              "modifier": 0,
              "midiValue": 60,
              "transposition": 0,
              "transposedNote": null
            },
            "scaleType": "W,W,H,W,W,W,H",
            "numOctaves": 2
          }
        },
        "metadata": {
          "status": "OK",
          "code": 200,
          "message": "Success"
        }
      };
}

export default function getCardService(): CardService {
  return new CardService(new CardRepository());
}