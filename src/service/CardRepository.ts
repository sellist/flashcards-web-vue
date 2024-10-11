import {Card} from "../model/Card.ts";
import {NotesNameRequest, ScaleRequest} from "../model/request/RequestDTO.ts";


export default class CardRepository {
    public async getCardByString(notesRequest: NotesNameRequest): Promise<Card> {
        // implementation
        console.log(notesRequest);
        return {front: "front", back: "back"};
    }

    public async getScalarCards(scaleRequest: ScaleRequest): Promise<Card[]> {
        // implementation
        console.log(scaleRequest);
        return [];


    }
}