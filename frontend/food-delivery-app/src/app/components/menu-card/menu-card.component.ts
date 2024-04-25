import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { ApiService } from '../../services/api.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.css'
})
export class MenuCardComponent implements OnInit {
  @Input() menu!: Menu
  @Input() cnt = 0

  constructor(
    private apiService: ApiService
  ) {}

  onAdd(menu: Menu) {
    // this.apiService.addToCart(menu.id)
    this.cnt++
  }

  onDecrease(menu: Menu) {
    // this.apiService.deleteFromCart(menu.id)
    if(this.cnt > 0)
      this.cnt--
  }

  ngOnInit(): void {
   
  }

}
