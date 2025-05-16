import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';  // 👈 this is needed for ngModel
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        //AppComponent,
        // NavbarComponent,
        //CardComponent
        
    ],
    imports:[
        BrowserModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        CommonModule,
        FormsModule,
        LoginComponent
    ],
    providers: [HttpClientModule, provideHttpClient()
    ],
    bootstrap: []
})
export class AppModule { }