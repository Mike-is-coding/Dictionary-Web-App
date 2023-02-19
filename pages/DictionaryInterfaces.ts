export interface DictionaryData {
    word: string;
    phonetic: string;
    phonetics: Array<object>;
    origin: string;
    meanings: Array<object>;
  }

export interface Phonetics {
    text: string;
    audio: string;
}

export interface Meanings {
    partofSpeech: string;
    definitions: object[];
}

export interface Definitions {
    definition: string;
    example: string;
    synonyms: string[];
    antonyms: string[];
}