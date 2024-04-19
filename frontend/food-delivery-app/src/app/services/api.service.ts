import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuCategory } from '../interfaces/menuCategory';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getMenuCategoryList(): MenuCategory[] {
    return [
      {id: 1, title: "Burgers & Fast food", imgUrl: ""},
      {id: 2, title: "Salads", imgUrl: ""},
      {id: 3, title: "Pasta & Casuals", imgUrl: ""},
      {id: 4, title: "Pizza", imgUrl: ""},
      {id: 5, title: "Breakfast", imgUrl: ""},
      {id: 6, title: "Soups", imgUrl: ""},
    ]
  }

}
