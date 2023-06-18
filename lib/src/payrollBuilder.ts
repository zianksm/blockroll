import { BigNumberish, Signer, ethers } from "ethers";
import { Employee } from "./type";
import { Payroll } from "./payroll";

type InternalEmployee = {
  address: string;
  salary: BigNumberish;
};

/**
 * payroll builder.
 * you should prefer using this class for building a new instance of payroll.
 *
 *
 * ## Example
 *
 * ```typescript
 *
 * function buildPayroll(signer: Signer, employees: Employee[] | Employee) {
 *   const payroll = new PayrollBuilder()
 *   payroll.setSigner(signer)
 *   payroll.addEmployee(employees)
 *
 *   return payroll.build()
 * }
 *
 * ```
 */
export class PayrollBuilder {
  private to: string[] = [];
  private value: BigNumberish[] = [];
  private signer: Signer | undefined = undefined;

  /**
   * add employee or employees to payroll.
   *
   * @param employee employee or employees to add to payroll.
   *
   * ## Example
   *
   * ```typescript
   * function addEmployee(builder: PayrollBuilder, employee: Employee | Employee[]) {
   *     builder.addEmployee(employee)
   * }
   * ```
   */
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

  /**
   * signer to use for signing payroll transactions. this is also 
   * where the payroll funds will be deducted from.   
   * 
   * @param signer signer to use for signing payroll transactions.
   */
  public setSigner(signer: Signer) {
    this.signer = signer;
    return this;
  }

  /**
   * build a new payroll instance, will throw an error if the signer is not set.
   * 
   * @returns a new instance of payroll.
   */
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
