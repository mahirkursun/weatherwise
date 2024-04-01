export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("tr-TR", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
};
