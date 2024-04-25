import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  logged: boolean = false;
  username: string = "";
  password: string = "";

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const access = localStorage.getItem("access");
    if (access) {
      this.logged = true;
    }
  }

  login() {
    this.apiService
      .login(this.username, this.password)
      .subscribe((data) => {
        this.logged = true;
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
      })
  }

  logout() {
    this.logged = false;
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }

}
