import { BigNumberish, Signer, BytesLike, ContractReceipt } from "ethers";
import * as payrollContract from "./types/contracts";

const MOONBEAM_PRECOMPILE_CONTRACT_ADDRESS =
  "0x0000000000000000000000000000000000000808";

const DEFAULT_CALLDATA: BytesLike[] = [];
const DEFAULT_GAS_LIMIT: BigNumberish[] = [];

/**
 *  payroll. this class is used for sending payroll to employees.
 *  you should prefer using payrollBuilder for building a new instance of this class.
 *
 *  ## Example
 *
 *  ```typescript
 * function buildPayroll(signer: Signer, employees: Employee[] | Employee) {
 *   const payrollBuilder = new PayrollBuilder()
 *   payrollBuilder.setSigner(signer)
 *   payrollBuilder.addEmployee(employees)
 *
 *   const payroll  = payroll.build();
 *
 *   // dry run the transaction
 *   await payroll.dry_run()
 *
 *   // execute the transaction
 *   await payroll.execute()
 * }
 *  ```
 */
export class Payroll {
  private precompile_contract_address: string;
  private signer: Signer;
  private to: string[];
  private value: BigNumberish[];
  private contractInstance: payrollContract.BatchPrecompileInterface;

  constructor(signer: Signer, to: string[], value: BigNumberish[]) {
    this.precompile_contract_address = MOONBEAM_PRECOMPILE_CONTRACT_ADDRESS;
    this.signer = signer;
    this.to = to;
    this.value = value;
    this.contractInstance = this.connectToContract();
  }

  /**
   * execute payroll batch transaction. this method will send payroll to all employees.
   *
   * this method uses batchAll method from BatchPrecompile contract.
   * means that if one of the transaction fails to executes, all of the transactions will be reverted.
   *
   * @param dryRun will dry run the transaction first if set to true.
   */
  public async execute(dryRun = true): Promise<ContractReceipt> {
    const contract = this.connectToContract();

    if (dryRun) await this.dry_run();

    const send_payroll = await contract.batchAll(
      this.to,
      this.value,
      DEFAULT_CALLDATA,
      DEFAULT_GAS_LIMIT
    );

    const receipt = send_payroll.wait();

    return receipt;
  }

  /**
   *
   * dry run the transaction.
   * will throw an error if one of the transaction fails to execute.
   *
   */
  public async dry_run() {
    return this.contractInstance.callStatic.batchAll(
      this.to,
      this.value,
      DEFAULT_CALLDATA,
      DEFAULT_GAS_LIMIT
    );
  }

  private connectToContract() {
    return payrollContract.BatchPrecompileInterface__factory.connect(
      this.precompile_contract_address,
      this.signer
    );
  }
}
