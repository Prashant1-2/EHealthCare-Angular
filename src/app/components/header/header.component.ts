import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  username: string = '';
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.username = this.authService.getUserName();
  }
}
