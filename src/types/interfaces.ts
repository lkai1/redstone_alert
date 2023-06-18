export type NewAlert = {
  header: string;
  date: string;
  time: {hour: string; minute: string};
  reminder: string;
  repetition: string;
};
export type Alert = {
  id: number;
  header: string;
  date: string;
  time: {hour: string; minute: string};
  reminder: string;
  repetition: string;
  notificationIds: {notificationReminder: string; notification: string};
};
