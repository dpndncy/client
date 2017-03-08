export class User {
  id: number;
  createdAt: number;
  updatedAt: number;
  name: string;
  email: string;
  login: string;
  role: string;
  lastLoginDate: number;

  get createdAt(): Date {
    return new Date(this.createdAt);
  }

  get updatedAt(): Date {
    return new Date(this.updatedAt);
  }

  get lastLoginDate(): Date {
    return new Date(this.lastLoginDate);
  }
}
