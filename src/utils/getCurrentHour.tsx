const getCurrentDate = () => {
  const currentDate = new Date();

  const currentHour = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentMilliseconds = currentDate.getSeconds();

  return `${currentHour < 10 ? "0" + currentHour : currentHour}:${
    currentMinutes < 10 ? "0" + currentMinutes : currentMinutes
  }:${
    currentMilliseconds < 10 ? "0" + currentMilliseconds : currentMilliseconds
  }`;
};

export default getCurrentDate;
