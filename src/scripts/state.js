const keyStorage = "book_state";

export function set(key, value) {
  const state = read();
  state[key] = value;
  write(state);
}

export function get(key) {
  const state = read();
  return state[key];
}

function read() {
  const state = localStorage.getItem(keyStorage) || "{}";
  return JSON.parse(state);
}

function write(state) {
  localStorage.setItem(keyStorage, JSON.stringify(state));
}
