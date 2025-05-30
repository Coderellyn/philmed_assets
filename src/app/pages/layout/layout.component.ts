import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent, DashboardComponent, FooterComponent, RouterModule, ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  title = 'inventory';
     customer = {
    name: '',
    email: '',
    phone: '',
    product: '',
    quantity: 1,
    deliveryDays: [] as string[]
  };

  products = ['Apples', 'Bananas', 'Oranges'];

  submitOrder() {
    console.log('Submitted Order:', this.customer);
    alert('Order submitted! Check console for details.');
  }
}
