export interface IUser<Data> {
  get(): Data;
}

export type MockUserData = {
  email: string;
};

export class User implements IUser<MockUserData> {
  get(): MockUserData {
    return this.getUSerFromLocalStorage();
  }

  private getUSerFromLocalStorage() {
    const user = 'user';

    const userData: string = localStorage.getItem(user) as string;
    const data: MockUserData = JSON.parse(userData);

    return data;
  }
}
