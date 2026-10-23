import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent, { providers: [provideIonicAngular(), provideRouter([{path: 'home', loadComponent: () => import('./app/home/home.page').then(m => m.HomePage)}, {path: '', redirectTo: 'home', pathMatch: 'full'}, {path: '**', redirectTo: 'home'}])] }).catch(console.error);
