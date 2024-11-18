import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterLink, RouterOutlet],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,  
  // template: `<h1>Hello World!</h1>`,
  /*
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
    </header>
  </main>
  `,
  */
  /*
  imports: [HomeComponent, RouterModule, RouterLink, RouterOutlet],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
    </header>
    <section class="content">
      <router-outlet></router-outlet>
      <!-- <app-home></app-home> -->
    </section>
  </main>
  `,
  */
  styleUrls: ['./app.component.css'],
}) // end @Component
export class AppComponent {
  title = 'homes'; // original: title = 'default';
} // end class AppComponent
