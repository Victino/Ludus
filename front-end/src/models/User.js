export class User {
  id;
  username;
  password;
  email;

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
