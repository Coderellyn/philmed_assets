import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assets-table',
  imports: [CommonModule],
  templateUrl: './assets-table.component.html',
  styleUrl: './assets-table.component.css'
})
export class AssetsTableComponent {
    assets = [
    { id: 1, name: 'Laptop', brand: 'Dell', model: 'XPS 13', status: 'In Use' },
    { id: 2, name: 'Monitor', brand: 'Samsung', model: 'S24F350', status: 'Available' },
    { id: 3, name: 'Printer', brand: 'HP', model: 'LaserJet Pro', status: 'In Repair' },
  ];

  submitOrder() {
    console.log('Submitted Order:', this.assets);
    alert('Order submitted! Check console for details.');
  }

}
