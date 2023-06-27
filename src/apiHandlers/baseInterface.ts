export interface IMock<Input, Output> {
  mock(input: Input): Output;
}

export type ApiResponse<Data> = {
  success: boolean;
  message: string;
  data: Data;
};

export type Role = 'student' | 'parent' | 'teacher' | 'admin' | 'staff';
export const Role = {
  student: 'student' as Role,
  parent: 'parent' as Role,
  teacher: 'teacher' as Role,
  admin: 'admin' as Role,
  staff: 'staff' as Role,
};
