import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentService } from "./payment.service";
import { RefundPaymentInput } from "../payment/RefundPaymentInput";
import { PaymentOutput } from "../payment/PaymentOutput";
import { PaymentIntentOutput } from "../payment/PaymentIntentOutput";

@swagger.ApiTags("payments")
@common.Controller("payments")
export class PaymentController {
  constructor(protected readonly service: PaymentService) {}

  @common.Post("/confirm-payment")
  @swagger.ApiOkResponse({
    type: PaymentOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConfirmPayment(
    @common.Body()
    body: RefundPaymentInput
  ): Promise<PaymentOutput> {
        return this.service.ConfirmPayment(body);
      }

  @common.Post("/create-payment-intent")
  @swagger.ApiOkResponse({
    type: PaymentIntentOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePaymentIntent(
    @common.Body()
    body: RefundPaymentInput
  ): Promise<PaymentIntentOutput> {
        return this.service.CreatePaymentIntent(body);
      }

  @common.Post("/refund-payment")
  @swagger.ApiOkResponse({
    type: PaymentOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RefundPayment(
    @common.Body()
    body: RefundPaymentInput
  ): Promise<PaymentOutput> {
        return this.service.RefundPayment(body);
      }
}
