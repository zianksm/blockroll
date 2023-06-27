import { data } from 'autoprefixer';
import { config } from 'process';

import { newConfig } from '@/config/config';

import {
  IResendVerificationController,
  ResendVerificationRequest,
  ResendVerificationResponse,
} from './interface';

export class ResendVerifyRegistrationController
  implements IResendVerificationController
{
  async submit(
    data: ResendVerificationRequest,
  ): Promise<ResendVerificationResponse> {
    if (newConfig.mock === 'true') {
      console.log('without');
      return this.mock(data);
    } else {
      return this.fetch(data);
    }
  }
  // new auth mock

  private async fetch(
    data: ResendVerificationRequest,
  ): Promise<ResendVerificationResponse> {
    const resp = await fetch('https://urtech.einstein.space', {
      body: JSON.stringify(data),
      method: 'POST',
    });

    return await resp.json();
  }

  public mock(data: ResendVerificationRequest) {
    const response: ResendVerificationResponse = {
      success: true,
      message: 'Resend verification successful',
      data: {
        expired_in_sec: 30,
      },
    };

    this.setOtpResponse(response);
    return response;
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

  private setOtpResponse(data: ResendVerificationResponse) {
    const user = 'otpnumber';
    localStorage.setItem(user, JSON.stringify(data));
  }
}
