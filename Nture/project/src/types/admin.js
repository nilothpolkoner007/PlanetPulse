class AdminRole {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.role = 'admin';
  }

  getDetails() {
    return `Name: ${this.name}, Email: ${this.email}, Role: ${this.role}`;
  }

  setDetails(name, email) {
    this.name = name;
    this.email = email;
  }
}
class AdminUser {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.role = 'admin';
  }

  getDetails() {
    return `Name: ${this.name}, Email: ${this.email}, Role: ${this.role}`;
  }

  setDetails(name, email) {
    this.name = name;
    this.email = email;
  }
}

export { AdminUser, AdminRole };
