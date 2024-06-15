import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class RefundPaymentInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    paymentIntentId!: string;

    @Field(() => Number, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Number
    })
    @Type(() => Number)
    amount?: number;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    reason?: string;

    @Field(() => GraphQLJSON, {
        nullable: true
    })
    metadata?: InputJsonValue;

    @Field(() => Boolean, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Boolean
    })
    @Type(() => Boolean)
    refundApplicationFee?: boolean;

    @Field(() => Boolean, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Boolean
    })
    @Type(() => Boolean)
    reverseTransfer?: boolean;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    currency?: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    description?: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    refundReason?: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    errorMessage?: string;

    @Field(() => Number, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Number
    })
    @Type(() => Number)
    errorCode?: number;

    @Field(() => Number, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Number
    })
    @Type(() => Number)
    responseCode?: number;
}

export { RefundPaymentInput as RefundPaymentInput };