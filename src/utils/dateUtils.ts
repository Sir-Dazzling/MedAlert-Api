import { Reminder } from "./../entities/Reminder";

export function dateRange(startDate: Date, endDate: Date, item: any, steps = 1) {
  const dateArray = [];
  const currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dateArray.push({ date: new Date(currentDate), reminder: item });
    currentDate.setUTCDate(currentDate.getUTCDate() + steps);
  }

  return dateArray;
}

export function spreadRemindersIntoRange(reminders: Reminder[]) {
  const convertedReminders: any[] = [];
  reminders.map((reminder) => {
    const result = dateRange(reminder.startDate as any, reminder.endDate as any, reminder);
    convertedReminders.push(result);
  });

  return convertedReminders;
}
