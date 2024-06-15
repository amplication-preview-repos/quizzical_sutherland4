import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  receivedAtTimestamp?: DateTimeNullableFilter;
  receiver?: StringNullableFilter;
  sender?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
  sentAtTimestamp?: DateTimeNullableFilter;
};
