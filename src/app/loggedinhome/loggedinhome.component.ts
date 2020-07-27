import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-loggedinhome',
  templateUrl: './loggedinhome.component.html',
  styleUrls: ['./loggedinhome.component.css']
})
export class LoggedinhomeComponent implements OnInit {
  currentUser: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
