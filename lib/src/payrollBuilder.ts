import { BigNumberish, Signer, ethers } from "ethers";
import { Employee } from "./type";
import { Payroll } from "./payroll";

type InternalEmployee = {
  address: string;
  salary: BigNumberish;
};

export class PayrollBuilder {
  private to: string[] = [];
  private value: BigNumberish[] = [];
  private signer: Signer | undefined = undefined;

  public addEmployee(employee: Employee | Employee[]) {
    const _employee = structuredClone(employee);
    const employees = Array.isArray(_employee) ? _employee : [_employee];

    this.add(employees);

    return this;
  }

  private add(employee: Employee[]) {
    employee.forEach((_employee) => {
      const employee = to_internal_employee(_employee);
      this.to.push(employee.address);
      this.value.push(employee.salary);
    });
  }

  public setSigner(signer: Signer) {
    this.signer = signer;
    return this;
  }

  public build() {
    if (!this.signer) {
      throw new Error("Signer is not set");
    }

    return new Payroll(this.signer, this.to, this.value);
  }
}
function to_internal_employee(employee: Employee): InternalEmployee {
  return {
    address: employee.address,
    salary: toBigNumber(employee.salary),
  };
}

function toBigNumber(value: string) {
  return ethers.utils.parseEther(value);
}
