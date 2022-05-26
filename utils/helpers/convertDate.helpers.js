export const convertDate = (date) => {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateConvert = new Date(date);
  const day = dateConvert.getDate();
  const month = dateConvert.getMonth();
  const year = dateConvert.getFullYear();
  const hour = dateConvert.getHours();
  const minute = dateConvert.getMinutes();
  const second = dateConvert.getSeconds();
  const dateConvertString = `${day} ${monthName[month]} ${year}, ${hour}.${minute}`;
  return dateConvertString;
};
