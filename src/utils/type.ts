export type cardType = {
    name: string;
    manaCost: string;
    cmc: number;
    colors: string[];
    colorIdentity: string[];
    type: string;
    types: string[];
    rarity: string;
    originalType: string;
    originalText: string;
    set: string;
    setName: string;
    text: string;
    flavor: string;
    artist: string;
    number: string;
    layout: string;
    imageUrl: string;
    variations: string [];
    printings: string[];
    legalities: {
        format: string;
        legality: string;
    }[];
    id: string;
}