import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuCategory } from '../../models/menuCategory';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';
import { Menu } from '../../models/menu';
import { MenuCardComponent } from "../../components/menu-card/menu-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NgFor, RouterLink, MenuCardComponent]
})
export class HomeComponent implements OnInit {

  categories!: MenuCategory[]
  menus!: Menu[]

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getMenuCategoryList().subscribe(data => this.categories = data)
    this.apiService.getPopularMenus().subscribe(data => this.menus = data.results)
  }

}
