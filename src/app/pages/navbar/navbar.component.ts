import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-navbar',
  imports: [LayoutComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
