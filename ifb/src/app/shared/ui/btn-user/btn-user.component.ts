import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BehaviorSubject, Subscription } from 'rxjs';
import { authChanged, getUser, logout } from '../../firebase/auth';
import { app } from '../../firebase/cfg';
import { Router } from '@angular/router';

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
  public redirectLogin = new BehaviorSubject(true);
  public user?: any;
  private _subcriptions = new Subscription();
  private _app = app;

  constructor(private r: Router) {}

  ngOnInit() {
    this._subcriptions.add(
      authChanged.subscribe((data) => {
        console.log('StateChanged', data);
        if (data == null) {
          this.user = undefined;
          this.redirectLogin.next(true);
        } else {
          this.user = getUser();
          if (this.user?.uid) this.redirectLogin.next(false);
        }
      })
    )
  }

  ngOnDestroy() {
    this._subcriptions.unsubscribe();
  }

  logout = logout;
}
