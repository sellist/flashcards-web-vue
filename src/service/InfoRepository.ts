class FormInfoRepository {

    constructor() {
        // implementation
    //     do api call here to get current form info
    }

    public async getAvailableNotes(): Promise<string[]> {
        // implementation
        return ["C", "D", "E", "F", "G", "A", "B"];
    }

    public async getAvailableScales(): Promise<string[]> {
        // implementation
        return ["Major", "Minor", "Pentatonic"];
    }

    public async getAvailableInstruments(): Promise<string[]> {
        // implementation
        return ["Guitar", "Piano", "Violin"];
    }

    public async getAvailableSteps(): Promise<string[]> {
        // implementation
        return ["M2", "M3", "P4", "P5", "M6", "M7", "P8", "m2", "m3", "m6", "m7"];
    }
}

export default function getAvailableInfo(): FormInfoRepository {
    return new FormInfoRepository();
}