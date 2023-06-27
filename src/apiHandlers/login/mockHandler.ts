import { Role } from '../baseInterface';
import { ILoginController } from './interface';

export type MockLoginData = {
  email: string;
  password: string;
  role: number;
};
export type MockLoginResponse = {
  status: string;
};

const teacher = 0;
const parent = 1;
const student = 2;

export class LoginController
  implements ILoginController<MockLoginData, MockLoginResponse>
{
  async submit(data: MockLoginData): Promise<MockLoginResponse> {
    const demoAccounts = [
      { email: 'teacher@example.com', password: 'teacher123', role: 0 }, // teacher
      { email: 'parent@example.com', password: 'parent123', role: 1 }, // parent
      { email: 'student@example.com', password: 'student123', role: 2 }, // student
    ];

    const matchedAccount = demoAccounts.find(
      (account) =>
        account.email === data.email && account.password === data.password,
    );
    if (matchedAccount) {
      this.setUser(data, matchedAccount?.role);
      return {
        status: 'success',
      };
    } else {
      throw new Error('Invalid username or password');
    }
  }

  private setUser(data: MockLoginData, role: number) {
    const user = 'user';
    data.role = role;
    localStorage.setItem(user, JSON.stringify(data));
  }

  getUserRole() {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        return userData.role as Role;
      }
    }
    return null;
  }
}
