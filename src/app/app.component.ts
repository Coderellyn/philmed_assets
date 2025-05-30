import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory';
  isLoggedIn = false;

  constructor() {
    // Simulate login state for demonstration purposes
    this.isLoggedIn = true; // Change to false to simulate logged out state
  }

}
