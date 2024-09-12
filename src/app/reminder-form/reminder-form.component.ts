import { Component, inject } from '@angular/core';
import { Reminder } from '../reminder/reminder';
import { BackendService } from '../services/backend.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'rmd-reminder-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reminder-form.component.html',
  styleUrl: './reminder-form.component.css'
})
export class ReminderFormComponent {

  service = inject(BackendService);
  reminderText: string = '';

  addReminder(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      let reminder = new Reminder(0, this.reminderText, false);
      this.service.addReminder(reminder);
      this.reminderText = '';
    }
  }
}
