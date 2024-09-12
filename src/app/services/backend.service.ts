import { Injectable } from "@angular/core";
import { Reminder } from "../reminder/reminder";

@Injectable({
    providedIn: 'root'
})

export class BackendService {
    getRemindersArr(): Reminder[] {
      return this.reminders;
    }
    addReminder(reminder: Reminder) {
      this.reminders.push(reminder);
      console.log("Pushed");
    }
    deleteReminder(id: number) {
        this.reminders = this.reminders.filter(reminder => reminder.id!== id);
      }
    reminders:Reminder[] = [
        new Reminder(1, 'Buy groceries', false),
        new Reminder(2, 'Clean house', false),
        new Reminder(3, 'Exercise', false),
    ];
}