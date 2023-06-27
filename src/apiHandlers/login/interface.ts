export interface ILoginController<UserData, Response> {
  submit(data: UserData): Promise<Response>;
}
