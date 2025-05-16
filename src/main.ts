import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { LoginComponent } from './app/login/login.component';
import { RootComponent } from './app/root.component';

bootstrapApplication(RootComponent, {
  providers: [
    provideRouter(routes), 
    provideHttpClient()
  ]
}).catch((err) => console.error(err));
