/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsNumber,
  IsEnum,
  IsInt,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { Type } from "class-transformer";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";
import { EnumProductShippingOptions } from "./EnumProductShippingOptions";
import { EnumProductStatus } from "./EnumProductStatus";
import { WishlistUpdateManyWithoutProductsInput } from "./WishlistUpdateManyWithoutProductsInput";

@InputType()
class ProductUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  category?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dimensions?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  images?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  reviews?: ReviewUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    enum: EnumProductShippingOptions,
    isArray: true,
  })
  @IsEnum(EnumProductShippingOptions, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumProductShippingOptions], {
    nullable: true,
  })
  shippingOptions?: Array<"Option1">;

  @ApiProperty({
    required: false,
    enum: EnumProductStatus,
  })
  @IsEnum(EnumProductStatus)
  @IsOptional()
  @Field(() => EnumProductStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  stockQuantity?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  weight?: number | null;

  @ApiProperty({
    required: false,
    type: () => WishlistUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => WishlistUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => WishlistUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  wishlists?: WishlistUpdateManyWithoutProductsInput;
}

export { ProductUpdateInput as ProductUpdateInput };
