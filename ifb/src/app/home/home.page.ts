import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BtnUserComponent } from '../shared/ui/btn-user/btn-user.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, BtnUserComponent],
})
export class HomePage {
  constructor() {}
}
