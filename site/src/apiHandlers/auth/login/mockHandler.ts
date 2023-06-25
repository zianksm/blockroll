import { data } from 'autoprefixer';
import { config } from 'process';

import { newConfig } from '@/config/config';

import { Role } from '../../baseInterface';
import {
  ILoginController,
  LoginData,
  LoginRequest,
  LoginResponse,
} from './interface';

const teacher = 0;
const parent = 1;
const student = 2;

const API_URL = 'https://einstein.urtech.space/api/';
let MOCK_STATUS = 'false';

const demoAccounts = [
  { email: 'teacher@example.com', password: 'teacher123', role: 0 }, // teacher
  { email: 'parent@example.com', password: 'parent123', role: 1 }, // parent
  { email: 'student@example.com', password: 'student123', role: 2 }, // student
];

export class LoginController
  implements ILoginController<LoginRequest, LoginResponse>
{
  // new login mock
  async submit(data: LoginRequest): Promise<LoginResponse> {
    const matchedAccount = demoAccounts.find(
      (account) =>
        account.email === data.email && account.password === data.password,
    );

    console.log(newConfig);

    if (MOCK_STATUS === 'true') {
      console.log('without');
      if (matchedAccount) {
        return this.mock(data);
      } else {
        throw new Error('Invalid username or password');
      }
    } else {
      return this.fetch(data);
    }
  }

  private async fetch(data: LoginRequest): Promise<LoginResponse> {
    console.log('fetch api');

    const loginUri = 'auth/login';
    const url = API_URL + loginUri;

    console.log('url', url);

    const resp = await fetch(url, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const body = await resp.json();
    console.log('resp', resp);
    console.log('body', body);

    this.setUser(body);

    return body;
  }

  public mock(data: LoginRequest): LoginResponse {
    let resp: LoginResponse = {
      message: '',
      success: true,
      data: {
        access_token: 'token',
        user: {
          email: data.email,
          name: '',
          phone_code: '',
          phone_number: '',
          uuid: '',
          role: this.checkRoleByEmail(data.email),
        },
      },
    };

    this.setUser(resp.data);
    return resp;
  }

  private setUser(data: LoginData) {
    const user = 'user';
    localStorage.setItem(user, JSON.stringify(data));
  }

  getUserRole() {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      if (user) {
        const userData: LoginResponse = JSON.parse(user);
        console.log('user data', userData);

        return userData.data.user.role;
      }
    }
    return null;
  }

  getUserProfile() {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      if (user) {
        const userData: LoginResponse = JSON.parse(user);
        console.log('user data', userData);
        return userData.data.user;
      }
    }
    return null;
  }
  checkRoleByEmail(email: string): Role {
    const lowerCaseEmail = email.toLowerCase(); // Convert email to lowercase for case-insensitive comparison

    if (lowerCaseEmail.includes('teacher')) {
      return 'teacher';
    } else if (lowerCaseEmail.includes('parent')) {
      return 'parent';
    } else {
      return 'student';
    }
  }
}
