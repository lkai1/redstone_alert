import notifee, {
  RepeatFrequency,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import {Alert, NewAlert} from '../types/interfaces';
import getFinDateFormat from '../utils/dateFormat';

const getTrigger = (
  value: NewAlert,
  reminder: string | undefined,
): TimestampTrigger => {
  const reminderStrParts = value.reminder.split(' ');
  const repetitionStrParts = value.repetition.split(' ');

  const date = new Date(
    `${value.date}T${value.time.hour}:${value.time.minute}`,
  );
  if (reminder) {
    date.setMinutes(date.getMinutes() - Number(reminderStrParts[0]));
  }
  console.log(date);
  if (repetitionStrParts[0] === 'Ei') {
    return {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
    };
  }
  return {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
    repeatFrequency:
      repetitionStrParts[1] === 'tunti'
        ? RepeatFrequency.HOURLY
        : repetitionStrParts[1] === 'päivä'
        ? RepeatFrequency.DAILY
        : RepeatFrequency.WEEKLY,
  };
};

const channelId = 'Red_Stone_Alert';

const createNotificationChannel = async () => {
  await notifee.createChannel({
    id: channelId,
    name: 'Red Stone Alert Notification channel',
  });
};

const createNotification = async (value: NewAlert) => {
  const notificationIds = {reminderNotification: '', notification: ''};

  await createNotificationChannel();

  notificationIds.reminderNotification =
    await notifee.createTriggerNotification(
      {
        title: value.header,
        body: `Muistutus: 
        ${getFinDateFormat(value.date)} ${value.time.hour}:${
          value.time.minute
        }`,
        android: {
          channelId,
          pressAction: {
            id: channelId,
          },
        },
      },
      getTrigger(value, 'reminder'),
    );

  notificationIds.notification = await notifee.createTriggerNotification(
    {
      title: value.header,
      body: `${getFinDateFormat(value.date)} ${value.time.hour}:${
        value.time.minute
      }`,
      android: {
        channelId,
        pressAction: {
          id: channelId,
        },
      },
    },
    getTrigger(value, ''),
  );
  return notificationIds;
};

const cancelNotification = (value: Alert) => {
  if (value.notificationIds.notificationReminder) {
    notifee.cancelNotification(value.notificationIds.notificationReminder);
  }
  notifee.cancelNotification(value.notificationIds.notification);
};

export default {
  createNotification,
  createNotificationChannel,
  cancelNotification,
};
