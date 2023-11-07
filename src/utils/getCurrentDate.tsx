const getCurrentDate = () => {
  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDay();

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const daysOfWeek: { [key: number]: string } = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  };

  const monthsOfYear: { [key: number]: string } = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const currentDayOfWeek = daysOfWeek[currentDayOfMonth];
  const currentMonthName = monthsOfYear[currentMonth];

  return `${currentDayOfWeek}, ${currentDay} ${currentMonthName} ${currentYear}`;
};

export default getCurrentDate;
