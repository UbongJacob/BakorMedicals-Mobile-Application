export function getWeekdaysInNext30Days() {
  const weekdays = [];
  const today = new Date();
  const endDate = new Date();

  endDate.setDate(today.getDate() + 30); // Set the end date 30 days from today

  // Loop through the dates from today to the end date
  let currentDate = new Date(today);

  while (currentDate <= endDate) {
    // Check if the current date is a weekday (0: Sunday, 6: Saturday)
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      weekdays.push(new Date(currentDate)); // Push the current date to the weekdays array
    }

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return weekdays;
}
interface DateInfo {
  dayOfWeek: string;
  dayOfMonth: number;
  month: string;
}

export function extractDateInfo(date: Date): DateInfo {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate();
  const month = months[date.getUTCMonth()];

  const dateInfo: DateInfo = {
    dayOfWeek,
    dayOfMonth,
    month,
  };

  return dateInfo;
}

export function getWorkingHoursWithDifference(day: Date | null) {
  if (!day) return null;
  const today = new Date();

  let pickedDayofthemonth = day;

  if (day.getUTCDate() !== today.getUTCDate()) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    pickedDayofthemonth = currentDate;
  }

  const nextTwoHours = new Date(
    pickedDayofthemonth.getTime() + 2 * 60 * 60 * 1000
  ); // Add 2 hours to the current time

  // Define working hours (9:00 AM to 5:00 PM)
  const startHour = 8;
  const endHour = 15;

  const workingHours = [];

  // Loop through hours starting from the next two hours
  for (let hour = nextTwoHours.getHours(); hour <= endHour; hour++) {
    // Skip hours before the start of working hours
    if (hour < startHour) {
      continue;
    }

    // Calculate the time for the current hour
    const time = new Date(
      day.getFullYear(),
      day.getMonth(),
      day.getDate(),
      hour,
      0,
      0
    );

    // Add the time to the working hours array
    workingHours.push(time);
  }

  // Add a one-hour difference to each time in the working hours array
  const workingHoursWithDifference = workingHours.map((time) => {
    return new Date(time.getTime() + 60 * 60 * 1000);
  });

  return workingHoursWithDifference;
}

export function formatTimeToAmPm(hours: number) {
  if (hours === 0) {
    return "12 am";
  } else if (hours === 12) {
    return "12 pm";
  } else if (hours < 12) {
    return hours + " am";
  } else {
    return hours - 12 + " pm";
  }
}

export function greetUser() {
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning!";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Good afternoon!";
  } else if (currentHour >= 17 && currentHour < 21) {
    return "Good evening!";
  } else {
    return "Good night!";
  }
}
