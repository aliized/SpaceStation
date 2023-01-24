export const timeParser = (date) => {
  const d = 24 * 60 * 60;
  const h = 60 * 60;
  const m = 60;
  const passed = (-(Date.parse(date) - Date.now()) / 1000).toFixed(0);
  let days = parseInt((passed / d).toFixed());
  let hours = parseInt(((passed % d) / h).toFixed());
  let mins = parseInt(((passed % h) / m).toFixed());
  let secs = parseInt(passed % m);

  return { days, hours, mins, secs };
};
