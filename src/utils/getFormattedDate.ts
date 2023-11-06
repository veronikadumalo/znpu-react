export const getFormattedDate = (date: string) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getUTCMonth() + 1;
  const year = newDate.getFullYear();
  const formattedDay = day > 9 ? day : `0${day}`;
  const formattedMonth = month > 9 ? month : `0${month}`;
  return `${formattedDay}-${formattedMonth}-${year}`;
};
