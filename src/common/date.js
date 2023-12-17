export const toMauritiusLocaleDateString = (date) => {
  return new Date(date).toLocaleDateString('en-MU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
