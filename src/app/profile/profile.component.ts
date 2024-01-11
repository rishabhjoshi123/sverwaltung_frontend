import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authservice.getUser();
  }
}
