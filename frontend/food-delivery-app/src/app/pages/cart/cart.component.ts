import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { ApiService } from '../../services/api.service';
import { OrderItem } from '../../models/orderItem';
import { MenuCardComponent } from '../../components/menu-card/menu-card.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor, MenuCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  logged!: boolean

  orderItems!: OrderItem[]

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const access = localStorage.getItem("access");
    if (access) {
      this.logged = true;
      this.apiService.getMenusFromCart().subscribe(
        data => {
          this.orderItems = data
          console.log(data)
      }
      )
    }
  }

}
