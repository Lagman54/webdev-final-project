import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuCategory } from '../../interfaces/menuCategory';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  categories!: MenuCategory[]

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.categories = this.apiService.getMenuCategoryList()
  }

}
