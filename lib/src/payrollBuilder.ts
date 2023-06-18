import { BigNumberish, Signer, ethers } from "ethers";
import { Employee } from "./type";
import { Payroll } from "./payroll";
import { map_employee_to_contract_arguments } from "./helper";

export class PayrollBuilder {
  private employee: Employee[] = [];
  private signer: Signer | undefined = undefined;

  public addEmployee(employee: Employee | Employee[]) {
    const _employee = structuredClone(employee);

    if (Array.isArray(_employee)) {
      this.employee = [...this.employee, ..._employee];
    } else {
      this.employee.push(_employee);
    }

    return this;
  }

  public setSigner(signer: Signer) {
    this.signer = signer;
    return this;
  }

  public build() {
    if (!this.signer) {
      throw new Error("Signer is not set");
    }

    const [to, value] = map_employee_to_contract_arguments(this.employee);

    return new Payroll(this.signer, to, value);
  }
}
