import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuCategory } from '../models/menuCategory';
import { Menu } from '../models/menu';
import { Token } from '../models/token';
import { OrderItem } from '../models/orderItem';
import { MenuResults } from '../models/menuResults';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://127.0.0.1:8000/api/v1"

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<Token> {
    const url = `${this.baseUrl}/login/`
    return this.http.post<Token>(
      url,
      {username, password}
    )
  }

  getMenuCategoryList(): Observable<MenuCategory[]> {
    const url = `${this.baseUrl}/categories`
    return this.http.get<MenuCategory[]>(url)
  }

  getMenusByCategory(categoryId: number): Observable<Menu[]> {
    const url = `${this.baseUrl}/categories/${categoryId}/products`
    return this.http.get<Menu[]>(url)
  }

  getPopularMenus(): Observable<MenuResults> {
    const url = `${this.baseUrl}/products?page_size=6`
    return this.http.get<MenuResults>(url)
  }

  getMenusFromCart(): Observable<OrderItem[]> {
    const url = `${this.baseUrl}/orders`
    return this.http.get<OrderItem[]>(url)
  }

  addToCart(orderItem: OrderItem) {
    const url = `${this.baseUrl}/orders`
    this.http.post(url, orderItem)
  }

  deleteFromCart(menuId: number, deleteAll = false) {
    if (deleteAll) {
      
      return
    }
    
    
  }

}
