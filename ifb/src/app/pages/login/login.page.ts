import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { avaiableProviders, singIn } from 'src/app/shared/firebase/auth';
import { AuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  public providers = avaiableProviders();

  constructor() { }

  ngOnInit() {}

  login(id: string, provider: any) {
    singIn(provider())
  }

}
