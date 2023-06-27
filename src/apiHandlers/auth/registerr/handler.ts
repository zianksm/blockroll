import { data } from 'autoprefixer';
import { config } from 'process';

import { newConfig } from '@/config/config';

import {
  IResgiserController,
  RegisterData,
  RegisterRequest,
  RegisterResponse,
} from './interface';

export class RegisterConroller
  implements IResgiserController<RegisterRequest, RegisterResponse>
{
  // new auth mock

  public async submit(data: RegisterRequest): Promise<RegisterResponse> {
    if (newConfig.mock === 'true') {
      console.log('without');
      return this.mock(data);
    } else {
      return this.fetch(data);
    }
  }

  private async fetch(data: RegisterRequest): Promise<RegisterResponse> {
    const resp = await fetch('https://urtech.einstein.space', {
      body: JSON.stringify(data),
      method: 'POST',
    });

    return await resp.json();
  }

  public mock(data: RegisterRequest) {
    let resp = {
      message: '',
      success: true,
      data: {
        uuid: '',
        name: data.name,
        email: data.email,
        phone_code: '',
        phone_number: data.phone_number,
      },
    };

    this.MockgenerateOTP();
    this.setUser(resp?.data);
    return resp;
  }

  private setUser(data: RegisterData) {
    const user = 'registration';
    localStorage.setItem(user, JSON.stringify(data));
  }
  public MockgenerateOTP() {
    const digits = '0123456789';
    let otp = '';
    // new auth mock

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      otp += digits[randomIndex];
    }
    localStorage.setItem('otp', JSON.stringify(otp));

    return otp;
  }
}
