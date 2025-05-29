import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeekdayPickerComponent } from './weekday-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WeekdayPickerComponent // <-- Import the standalone component here
  ],
  exports: [
    WeekdayPickerComponent,
    CommonModule,
    FormsModule
  ],
})
export class WeekdayPickerModule {}
