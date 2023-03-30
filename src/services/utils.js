let timerId = null;

export function debounce(cb, delay = 300) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    clearTimeout(timerId);
    cb();
  }, delay);
}
