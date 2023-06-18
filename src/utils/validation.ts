const validateNewAlert = (newAlert: any) => {
  if (
    !!newAlert.header &&
    !!newAlert.date &&
    !!newAlert.time.hour &&
    !!newAlert.time.minute &&
    !!newAlert.reminder &&
    !!newAlert.repetition
  ) {
    return true;
  }
  return false;
};

export default validateNewAlert;
