import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
