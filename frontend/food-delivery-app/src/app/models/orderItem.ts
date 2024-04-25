import { Menu } from "./menu";

export interface OrderItem {
    id: number,
    product: Menu,
    quantity: number,
    order: number
}