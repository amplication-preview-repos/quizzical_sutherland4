import { Injectable } from "@nestjs/common";
import { ConfirmPaymentInput } from "../payment/ConfirmPaymentInput";
import { PaymentOutput } from "../payment/PaymentOutput";
import { CreatePaymentIntentInput } from "../payment/CreatePaymentIntentInput";
import { PaymentIntentOutput } from "../payment/PaymentIntentOutput";
import { RefundPaymentInput } from "../payment/RefundPaymentInput";

@Injectable()
export class PaymentService {
  constructor() {}
  async ConfirmPayment(args: ConfirmPaymentInput): Promise<PaymentOutput> {
    throw new Error("Not implemented");
  }
  async CreatePaymentIntent(args: CreatePaymentIntentInput): Promise<PaymentIntentOutput> {
    throw new Error("Not implemented");
  }
  async RefundPayment(args: RefundPaymentInput): Promise<PaymentOutput> {
    throw new Error("Not implemented");
  }
}
