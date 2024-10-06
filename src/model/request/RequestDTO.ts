interface ScaleRequest {
    tonic: string,
    scaleType: string
    octave: number
}

interface NotesNameRequest {
    notes: string[]
}

interface CardsRequest {
    startingNote: string,
    scaleType: string,
    octaves: number,
    instrument: string
}

export type { ScaleRequest, NotesNameRequest, CardsRequest }