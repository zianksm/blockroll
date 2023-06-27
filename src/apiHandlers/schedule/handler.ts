import { newConfig } from '../../config/config';
import {
  IScheduleController,
  ScheduleData,
  ScheduleRequest,
  ScheduleResponse,
} from './interface';
import { mockScheduleData } from './scheduleMockData';
const API_URL = 'https://einstein.urtech.space/api/';
let MOCK_STATUS = 'true';
export class ScheduleController implements IScheduleController {
  public mock(input: ScheduleRequest): ScheduleResponse {
    return {
      success: true,
      message: 'success',
      data: getRandomizedData(mockScheduleData),
    };
  }

  public async getSchedule(
    request: ScheduleRequest,
  ): Promise<ScheduleResponse> {
    if (MOCK_STATUS === 'true') {
      console.log('without');
      return this.mock(request);
    } else {
      return this.fetch(request);
    }
    // return this.mock(request);
  }

  private async fetch(
    request: ScheduleRequest,
  ): Promise<Promise<ScheduleResponse | PromiseLike<ScheduleResponse>>> {
    const resp = await fetch('https://urtech.einstein.space', {
      body: JSON.stringify(request),
      method: 'POST',
    });

    return await resp.json();
  }
}

function getRandomizedData(data: ScheduleData[]): ScheduleData[] {
  // Create a copy of the original array
  const randomizedData = [...data];

  // Randomize the order using the Fisher-Yates algorithm
  for (let i = randomizedData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomizedData[i], randomizedData[j]] = [
      randomizedData[j],
      randomizedData[i],
    ];
  }

  return randomizedData;
}
