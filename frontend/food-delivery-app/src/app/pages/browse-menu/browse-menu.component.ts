import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/menu';
import { NgClass, NgFor } from '@angular/common';
import { MenuCategory } from '../../interfaces/menuCategory';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { MenuCardComponent } from '../../components/menu-card/menu-card.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-browse-menu',
  standalone: true,
  imports: [NgFor, MenuCardComponent],
  templateUrl: './browse-menu.component.html',
  styleUrl: './browse-menu.component.css'
})
export class BrowseMenuComponent implements OnInit {

  categories!: MenuCategory[]
  selectedCategory!: number
  menus!: Menu[]

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories = this.apiService.getMenuCategoryList()

    this.route.queryParams.subscribe(params => {
      let categoryId = Number(params['category'])
      this.selectedCategory = categoryId
      this.menus = this.apiService.getMenusByCategory(categoryId)
    })
    
  }

  onSelect(categoryId: number) {
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: { category: categoryId },
        queryParamsHandling: 'merge'
      }
    )

  }

}
