import { Character } from "./RickMorty.model";

export interface ResponseModel{
    info: Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

type Result = Character;