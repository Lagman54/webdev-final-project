import { Menu } from "./menu";

export interface MenuResults {
    count: number,
    next: string,
    previous: string,
    results: Menu[]
}