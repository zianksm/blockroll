import { BigNumberish, BytesLike, Signer } from "ethers";
import * as payrollContract from "./types/contracts";

export class Payroll {
  private address: string;
  private signer: Signer;
  private to: string[];
  private value: BigNumberish[];

  constructor(
    address: string,
    signer: Signer,
    to: string[],
    value: BigNumberish[]
  ) {
    this.address = address;
    this.signer = signer;
    this.to = to;
    this.value = value;
  }

  public async send() {
    const contract = this.connectToContract();

    const DEFAULT_CALLDATA: BytesLike[] = [];
    const DEFAULT_GAS_LIMIT: BigNumberish[] = [];

    const send_payroll = await contract.batchAll(
      this.to,
      this.value,
      DEFAULT_CALLDATA,
      DEFAULT_GAS_LIMIT
    );

    const receipt = send_payroll.wait();

    return receipt;
  }

  private connectToContract() {
    return payrollContract.BatchPrecompileInterface__factory.connect(
      this.address,
      this.signer
    );
  }
}
