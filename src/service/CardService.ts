import {Card} from "../model/Card.ts";
import CardRepository from "./CardRepository.ts";
import {NotesNameRequest, ScaleRequest} from "../model/request/RequestDTO.ts";

export default class CardService {
  private cardRepository: CardRepository;

  constructor(cardRepository: CardRepository) {
    this.cardRepository = cardRepository;
  }

  public async getCardByString(noteName: NotesNameRequest): Promise<Card> {
    return this.cardRepository.getCardByString(noteName);
  }

  public async getScalarCards(scaleRequest: ScaleRequest): Promise<Card[]> {
    return this.cardRepository.getScalarCards(scaleRequest);
  }
}