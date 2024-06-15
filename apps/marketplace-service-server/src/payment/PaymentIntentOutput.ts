import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("PaymentIntentOutputObject")
class PaymentIntentOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    clientSecret!: string;
}

export { PaymentIntentOutput as PaymentIntentOutput };