import { BigNumberish, BytesLike, Signer } from "ethers";
import * as payrollContract from "./types/contracts";

const MOONBEAM_PRECOMPILE_CONTRACT_ADDRESS =
  "0x0000000000000000000000000000000000000808";

const DEFAULT_CALLDATA: BytesLike[] = [];
const DEFAULT_GAS_LIMIT: BigNumberish[] = [];

export class Payroll {
  private precompile_contract_address: string;
  private signer: Signer;
  private to: string[];
  private value: BigNumberish[];

  constructor(signer: Signer, to: string[], value: BigNumberish[]) {
    this.precompile_contract_address = MOONBEAM_PRECOMPILE_CONTRACT_ADDRESS;
    this.signer = signer;
    this.to = to;
    this.value = value;
  }

  public async execute() {
    const contract = this.connectToContract();

    await this.dry_run(contract, this.to, this.value);

    const send_payroll = await contract.batchAll(
      this.to,
      this.value,
      DEFAULT_CALLDATA,
      DEFAULT_GAS_LIMIT
    );

    const receipt = send_payroll.wait();

    return receipt;
  }

  private dry_run(
    contract: payrollContract.BatchPrecompileInterface,
    to: string[],
    value: BigNumberish[]
  ) {
    return contract.callStatic.batchAll(
      to,
      value,
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
