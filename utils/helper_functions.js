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

  const time = `${hours}:${minutes}:${seconds}`;
  const d_date = `${year}-${month}-${day}`;
  return { time, d_date };
}

const weatherToTextColor = {
  "01d": "text-black", // Clear sky (day)
  "01n": "text-white", // Clear sky (night)
  "02d": "text-black", // Few clouds (day)
  "02n": "text-white", // Few clouds (night)
  "03d": "text-black", // Scattered clouds (day)
  "03n": "text-white", // Scattered clouds (night)
  "04d": "text-black", // Broken clouds (day)
  "04n": "text-white", // Broken clouds (night)
  "09d": "text-white", // Showers (day)
  "09n": "text-white", // Showers (night)
  "10d": "text-white", // Rain (day)
  "10n": "text-white", // Rain (night)
  "11d": "text-white", // Thunderstorm (day)
  "11n": "text-white", // Thunderstorm (night)
  "13d": "text-black", // Snow (day)
  "13n": "text-white", // Snow (night)
  "50d": "text-black", // Mist (day)
  "50n": "text-white", // Mist (night)
};

const weatherToColor = {
  "01d": "bg-yellow-300", // Clear sky (day)
  "01n": "bg-blue-900 text-white", // Clear sky (night)
  "02d": "bg-yellow-100", // Few clouds (day)
  "02n": "bg-blue-800", // Few clouds (night)
  "03d": "bg-gray-300", // Scattered clouds (day)
  "03n": "bg-gray-800", // Scattered clouds (night)
  "04d": "bg-gray-400", // Broken clouds (day)
  "04n": "bg-gray-900", // Broken clouds (night)
  "09d": "bg-blue-600", // Showers (day)
  "09n": "bg-blue-900", // Showers (night)
  "10d": "bg-blue-600", // Rain (day)
  "10n": "bg-blue-900", // Rain (night)
  "11d": "bg-gray-600", // Thunderstorm (day)
  "11n": "bg-gray-900", // Thunderstorm (night)
  "13d": "bg-yellow-100", // Snow (day)
  "13n": "bg-blue-700", // Snow (night)
  "50d": "bg-gray-100", // Mist (day)
  "50n": "bg-gray-700", // Mist (night)
};

export { convertEpochToDateTime, weatherToColor, weatherToTextColor };
