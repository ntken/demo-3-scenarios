export function randomEmail() {
  return `user_${Date.now()}@mail.com`;
}

export function randomName() {
  return `User${Math.floor(Math.random() * 10000)}`;
}
