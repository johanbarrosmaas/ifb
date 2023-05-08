import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

type User = {
  loggedIn: boolean;
  name: string;
  photo?: string;
}

@Component({
  selector: 'ifb-btn-user',
  templateUrl: './btn-user.component.html',
  styleUrls: ['./btn-user.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class BtnUserComponent  implements OnInit {
  public user?: User;

  constructor() { }

  ngOnInit() {
    this.user = { loggedIn: true, name: 'John Doe' };
  }

  logout() {
    if (this.user === undefined) return;
    this.user.loggedIn = false;
  }
}
