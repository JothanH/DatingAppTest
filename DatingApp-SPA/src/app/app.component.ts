import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.authService.decodedToken = this.authService.jwtHelper.decodeToken(token);
    }
    if (user) {
      this.authService.currentUSer = user;
      this.authService.changeMemberPhoto(user.photoUrl);
    }
  }
}
