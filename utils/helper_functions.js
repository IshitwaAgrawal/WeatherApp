function convertEpochToDateTime(epochTimestamp, timezone_offset) {
  const utcDate = new Date(epochTimestamp * 1000);
  const userTimezoneOffset = new Date().getTimezoneOffset();
  const date = new Date(
    utcDate.getTime() + (timezone_offset + userTimezoneOffset * 60) * 1000
  );

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const dayOfWeekIndex = date.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const time = `${hours}:${minutes}:${seconds}`;
  const d_date = `${year}-${month}-${day}`;
  const dayOfWeek = `${daysOfWeek[dayOfWeekIndex]}`;
  return { time, d_date, dayOfWeek };
}

export { convertEpochToDateTime };
