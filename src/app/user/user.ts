import { Component } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
 public selectedUser = DUMMY_USERS[randomIndex];
 public users = DUMMY_USERS;
 
 onSelectUser() {
  const randomIndex = Math.floor(Math.random() * this.users.length);
  this.selectedUser = this.users[randomIndex];
 }

  get ImagePath(){
  return 'assets/users/' + this.selectedUser.avatar;
 }
}
