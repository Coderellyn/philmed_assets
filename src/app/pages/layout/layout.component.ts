import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-layout',
  imports: [DashboardComponent, CommonModule, RouterModule, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  title = 'inventory';

}
