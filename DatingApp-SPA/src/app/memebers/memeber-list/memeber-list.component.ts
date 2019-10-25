import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { AlertifyService } from '../../services/alertify.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-memeber-list',
  templateUrl: './memeber-list.component.html',
  styleUrls: ['./memeber-list.component.css']
})
export class MemeberListComponent implements OnInit {
   users: User[];

  constructor(private userService: UserService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.users = data['users'];
    });
  } 
}
