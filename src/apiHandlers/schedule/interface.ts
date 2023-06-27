import { ApiResponse, IMock } from '../baseInterface';

export interface IScheduleController
  extends IMock<ScheduleRequest, ScheduleResponse> {
  getSchedule(request: ScheduleRequest): Promise<ScheduleResponse>;
}

export type ScheduleRequest = {
  date: string;
};
export type ScheduleResponse = ApiResponse<ScheduleData[]>;

export type ScheduleData = {
  time: string;
  program: string;
  duration: string;
  lecturer: string;
  badges: string;
  icon: string;
};
