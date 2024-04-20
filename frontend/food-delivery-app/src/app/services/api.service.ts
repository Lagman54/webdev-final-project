import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuCategory } from '../interfaces/menuCategory';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  cart: Map<number, number> = new Map<number, number>()

  constructor(
    private http: HttpClient
  ) { }

  getMenuCategoryList(): MenuCategory[] {
    return [
      { id: 1, title: "Burgers", imgUrl: "" },
      { id: 2, title: "Salads", imgUrl: "" },
      { id: 3, title: "Pasta & Casuals", imgUrl: "" },
      { id: 4, title: "Pizza", imgUrl: "" },
      { id: 5, title: "Breakfast", imgUrl: "" },
      { id: 6, title: "Soups", imgUrl: "" },
    ]
  }

  getMenusByCategory(categoryId: number): Menu[] {
    if (categoryId == 1) {
      return [
        { id: 1, title: "Royal Cheese Burger with extra Fries", categoryId: 1, description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: 3225, imgUrl: "https://drive.google.com/thumbnail?id=1vLibV4xpiZOhLOVBkeVFsLXYZIU1eumW" },
        { id: 2, title: "Royal Cheese Burger with extra Fries", categoryId: 1, description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: 3225, imgUrl: "https://drive.google.com/thumbnail?id=1vLibV4xpiZOhLOVBkeVFsLXYZIU1eumW" },
        { id: 3, title: "Royal Cheese Burger with extra Fries", categoryId: 1, description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: 3225, imgUrl: "https://drive.google.com/thumbnail?id=1vLibV4xpiZOhLOVBkeVFsLXYZIU1eumW" },
        { id: 4, title: "Royal Cheese Burger with extra Fries", categoryId: 1, description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: 3225, imgUrl: "https://drive.google.com/thumbnail?id=1vLibV4xpiZOhLOVBkeVFsLXYZIU1eumW" },
        { id: 5, title: "Royal Cheese Burger with extra Fries", categoryId: 1, description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: 3225, imgUrl: "https://drive.google.com/thumbnail?id=1vLibV4xpiZOhLOVBkeVFsLXYZIU1eumW" },
        { id: 6, title: "Royal Cheese Burger with extra Fries", categoryId: 1, description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: 3225, imgUrl: "https://drive.google.com/thumbnail?id=1vLibV4xpiZOhLOVBkeVFsLXYZIU1eumW" },
      ]
    }
    if (categoryId == 2) {
      return [
        { id: 7, title: "The classics for 3", categoryId: 2, description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: 3225, imgUrl: "https://drive.google.com/thumbnail?id=1vLibV4xpiZOhLOVBkeVFsLXYZIU1eumW" },
        { id: 8, title: "The classics for 3", categoryId: 2, description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: 3225, imgUrl: "https://drive.google.com/thumbnail?id=1vLibV4xpiZOhLOVBkeVFsLXYZIU1eumW" },
        { id: 9, title: "The classics for 3", categoryId: 2, description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: 3225, imgUrl: "https://drive.google.com/thumbnail?id=1vLibV4xpiZOhLOVBkeVFsLXYZIU1eumW" },
        { id: 10, title: "The classics for 3", categoryId: 2, description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: 3225, imgUrl: "https://drive.google.com/thumbnail?id=1vLibV4xpiZOhLOVBkeVFsLXYZIU1eumW" },
        { id: 11, title: "The classics for 3", categoryId: 2, description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: 3225, imgUrl: "https://drive.google.com/thumbnail?id=1vLibV4xpiZOhLOVBkeVFsLXYZIU1eumW" },
        { id: 12, title: "The classics for 3", categoryId: 2, description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium", price: 3225, imgUrl: "https://drive.google.com/thumbnail?id=1vLibV4xpiZOhLOVBkeVFsLXYZIU1eumW" },
      ]
    }
    return []
  }

  addToCart(menuId: number) {
    this.cart.set(menuId, (this.cart.get(menuId) ?? 0) + 1)
  }

  deleteFromCart(menuId: number, deleteAll = false) {
    if (deleteAll) {
      this.cart.set(menuId, 0)
      return
    }
    if (this.cart.get(menuId) ?? 0 > 0) {
      this.cart.set(menuId, (this.cart.get(menuId) ?? 0) - 1)
    }
  }

  countMenus(menuId: number): number {
    return (this.cart.get(menuId) ?? 0)
  }

}
