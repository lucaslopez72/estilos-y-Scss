import { Component } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
@Component({selector: 'app-home', standalone: true, imports: [IonContent, IonButton], templateUrl: './home.page.html', styleUrl: './home.page.sass'})
export class HomePage {
  // Interacción sencilla para comprobar que el botón funciona.
  clicks = 0;
}
