import * as graphql from "@nestjs/graphql";
import { ConfirmPaymentInput } from "../payment/ConfirmPaymentInput";
import { PaymentOutput } from "../payment/PaymentOutput";
import { CreatePaymentIntentInput } from "../payment/CreatePaymentIntentInput";
import { PaymentIntentOutput } from "../payment/PaymentIntentOutput";
import { RefundPaymentInput } from "../payment/RefundPaymentInput";
import { PaymentService } from "./payment.service";

export class PaymentResolver {
  constructor(protected readonly service: PaymentService) {}

  @graphql.Mutation(() => PaymentOutput)
  async ConfirmPayment(
    @graphql.Args()
    args: ConfirmPaymentInput
  ): Promise<PaymentOutput> {
    return this.service.ConfirmPayment(args);
  }

  @graphql.Mutation(() => PaymentIntentOutput)
  async CreatePaymentIntent(
    @graphql.Args()
    args: CreatePaymentIntentInput
  ): Promise<PaymentIntentOutput> {
    return this.service.CreatePaymentIntent(args);
  }

  @graphql.Mutation(() => PaymentOutput)
  async RefundPayment(
    @graphql.Args()
    args: RefundPaymentInput
  ): Promise<PaymentOutput> {
    return this.service.RefundPayment(args);
  }
}
