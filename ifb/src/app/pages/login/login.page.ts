import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { avaiableProviders, singIn } from 'src/app/shared/firebase/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  public providers = avaiableProviders();

  constructor(
    private r: Router
  ) { }

  ngOnInit() {}

  async login(id: string, provider: any) {
    const signed = await singIn(new provider()).catch(reason => {
      return undefined;
    })
    if (!!signed) this.r.navigate([signed]);
  }
}
