class User {
  public id?: string;
  public name: string;
  public email: string;
  public password: string;
  constructor(data: User) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  };
} export { User };