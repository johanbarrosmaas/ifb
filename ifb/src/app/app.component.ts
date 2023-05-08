import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BtnUserComponent } from './shared/ui/btn-user/btn-user.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, BtnUserComponent],
})
export class AppComponent {
  constructor() {}
}
