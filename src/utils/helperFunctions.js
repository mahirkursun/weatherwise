export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatDateForecast = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-EN", {
    weekday: "short",
  });
};

export const formatDateHeader = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
