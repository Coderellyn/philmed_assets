import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weekday-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weekday-picker.component.html',
  styleUrls: ['./weekday-picker.component.css']
})
export class WeekdayPickerComponent {
  weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  @Input() selectedDays: string[] = [];
  @Output() selectedDaysChange = new EventEmitter<string[]>();

  toggleDay(day: string) {
    if (this.selectedDays.includes(day)) {
      this.selectedDays = this.selectedDays.filter(d => d !== day);
    } else {
      this.selectedDays.push(day);
    }
    this.selectedDaysChange.emit(this.selectedDays);
  }
}
