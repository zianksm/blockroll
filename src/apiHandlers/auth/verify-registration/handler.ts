import { data } from 'autoprefixer';
import { config } from 'process';

import { newConfig } from '@/config/config';

import {
  IVerifyRegistrationController,
  VerifyRegistrationRequest,
  VerifyRegistrationResponse,
} from './interface';

export class VerifyRegistrationController
  implements IVerifyRegistrationController
{
  async submit(
    data: VerifyRegistrationRequest,
  ): Promise<VerifyRegistrationResponse> {
    if (newConfig.mock === 'true') {
      console.log('without');
      if (data?.code === this.getOTP()) {
        return this.mock(data);
      } else {
        throw new Error('Invalid OTP');
      }
    } else {
      return this.fetch(data);
    }
  }
  // new auth mock

  private async fetch(
    data: VerifyRegistrationRequest,
  ): Promise<VerifyRegistrationResponse> {
    const resp = await fetch('https://urtech.einstein.space', {
      body: JSON.stringify(data),
      method: 'POST',
    });

    return await resp.json();
  }

  private mock(data: VerifyRegistrationRequest) {
    let resp = {
      message: '',
      success: '',
    };
    this.setOtpResponse(resp);
    return resp;
  }

  private getOTP() {
    console.log('getting otp');
    if (typeof window !== 'undefined') {
      const otp = localStorage.getItem('otp');
      console.log('otp mock', otp);

      if (otp) {
        const otpData = JSON.parse(otp);
        return otpData;
      }
    }
    return null;
  }

  private setOtpResponse(data: VerifyRegistrationResponse) {
    const user = 'otpResponse';
    localStorage.setItem(user, JSON.stringify(data));
  }
}
