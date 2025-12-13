export const formatDate = (date?: Date) => {
  if (!date) {
    return "Present";
  }

  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  });
};
