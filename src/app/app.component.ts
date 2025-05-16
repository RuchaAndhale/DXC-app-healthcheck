import { Component, ViewChild,  AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dxc-healthcheck-dashboard';

  @ViewChild(CardComponent) cardComponent!: CardComponent;

  // optional if you need to act immediately after view initializes
  ngAfterViewInit() {
    // console.log(this.cardComponent);  // should log CardComponent instance
  }

  runAllHealthChecks() {
    if (this.cardComponent) {
      this.cardComponent.runAllChecks();
    } else {
      console.error('CardComponent not yet available');
    }
  }
}
