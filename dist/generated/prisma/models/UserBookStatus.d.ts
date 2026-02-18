import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserBookStatusModel = runtime.Types.Result.DefaultSelection<Prisma.$UserBookStatusPayload>;
export type AggregateUserBookStatus = {
    _count: UserBookStatusCountAggregateOutputType | null;
    _min: UserBookStatusMinAggregateOutputType | null;
    _max: UserBookStatusMaxAggregateOutputType | null;
};
export type UserBookStatusMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    bookId: string | null;
    status: $Enums.BookStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserBookStatusMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    bookId: string | null;
    status: $Enums.BookStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserBookStatusCountAggregateOutputType = {
    id: number;
    userId: number;
    bookId: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserBookStatusMinAggregateInputType = {
    id?: true;
    userId?: true;
    bookId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserBookStatusMaxAggregateInputType = {
    id?: true;
    userId?: true;
    bookId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserBookStatusCountAggregateInputType = {
    id?: true;
    userId?: true;
    bookId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserBookStatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserBookStatusWhereInput;
    orderBy?: Prisma.UserBookStatusOrderByWithRelationInput | Prisma.UserBookStatusOrderByWithRelationInput[];
    cursor?: Prisma.UserBookStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserBookStatusCountAggregateInputType;
    _min?: UserBookStatusMinAggregateInputType;
    _max?: UserBookStatusMaxAggregateInputType;
};
export type GetUserBookStatusAggregateType<T extends UserBookStatusAggregateArgs> = {
    [P in keyof T & keyof AggregateUserBookStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserBookStatus[P]> : Prisma.GetScalarType<T[P], AggregateUserBookStatus[P]>;
};
export type UserBookStatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserBookStatusWhereInput;
    orderBy?: Prisma.UserBookStatusOrderByWithAggregationInput | Prisma.UserBookStatusOrderByWithAggregationInput[];
    by: Prisma.UserBookStatusScalarFieldEnum[] | Prisma.UserBookStatusScalarFieldEnum;
    having?: Prisma.UserBookStatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserBookStatusCountAggregateInputType | true;
    _min?: UserBookStatusMinAggregateInputType;
    _max?: UserBookStatusMaxAggregateInputType;
};
export type UserBookStatusGroupByOutputType = {
    id: string;
    userId: string;
    bookId: string;
    status: $Enums.BookStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: UserBookStatusCountAggregateOutputType | null;
    _min: UserBookStatusMinAggregateOutputType | null;
    _max: UserBookStatusMaxAggregateOutputType | null;
};
type GetUserBookStatusGroupByPayload<T extends UserBookStatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserBookStatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserBookStatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserBookStatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserBookStatusGroupByOutputType[P]>;
}>>;
export type UserBookStatusWhereInput = {
    AND?: Prisma.UserBookStatusWhereInput | Prisma.UserBookStatusWhereInput[];
    OR?: Prisma.UserBookStatusWhereInput[];
    NOT?: Prisma.UserBookStatusWhereInput | Prisma.UserBookStatusWhereInput[];
    id?: Prisma.StringFilter<"UserBookStatus"> | string;
    userId?: Prisma.StringFilter<"UserBookStatus"> | string;
    bookId?: Prisma.StringFilter<"UserBookStatus"> | string;
    status?: Prisma.EnumBookStatusFilter<"UserBookStatus"> | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeFilter<"UserBookStatus"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserBookStatus"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    book?: Prisma.XOR<Prisma.BookScalarRelationFilter, Prisma.BookWhereInput>;
};
export type UserBookStatusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    book?: Prisma.BookOrderByWithRelationInput;
};
export type UserBookStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_bookId?: Prisma.UserBookStatusUserIdBookIdCompoundUniqueInput;
    AND?: Prisma.UserBookStatusWhereInput | Prisma.UserBookStatusWhereInput[];
    OR?: Prisma.UserBookStatusWhereInput[];
    NOT?: Prisma.UserBookStatusWhereInput | Prisma.UserBookStatusWhereInput[];
    userId?: Prisma.StringFilter<"UserBookStatus"> | string;
    bookId?: Prisma.StringFilter<"UserBookStatus"> | string;
    status?: Prisma.EnumBookStatusFilter<"UserBookStatus"> | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeFilter<"UserBookStatus"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserBookStatus"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    book?: Prisma.XOR<Prisma.BookScalarRelationFilter, Prisma.BookWhereInput>;
}, "id" | "userId_bookId">;
export type UserBookStatusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserBookStatusCountOrderByAggregateInput;
    _max?: Prisma.UserBookStatusMaxOrderByAggregateInput;
    _min?: Prisma.UserBookStatusMinOrderByAggregateInput;
};
export type UserBookStatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserBookStatusScalarWhereWithAggregatesInput | Prisma.UserBookStatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserBookStatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserBookStatusScalarWhereWithAggregatesInput | Prisma.UserBookStatusScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserBookStatus"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"UserBookStatus"> | string;
    bookId?: Prisma.StringWithAggregatesFilter<"UserBookStatus"> | string;
    status?: Prisma.EnumBookStatusWithAggregatesFilter<"UserBookStatus"> | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserBookStatus"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserBookStatus"> | Date | string;
};
export type UserBookStatusCreateInput = {
    id?: string;
    status?: $Enums.BookStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBookStatusInput;
    book: Prisma.BookCreateNestedOneWithoutUserStatusInput;
};
export type UserBookStatusUncheckedCreateInput = {
    id?: string;
    userId: string;
    bookId: string;
    status?: $Enums.BookStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserBookStatusUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBookStatusNestedInput;
    book?: Prisma.BookUpdateOneRequiredWithoutUserStatusNestedInput;
};
export type UserBookStatusUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBookStatusCreateManyInput = {
    id?: string;
    userId: string;
    bookId: string;
    status?: $Enums.BookStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserBookStatusUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBookStatusUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBookStatusListRelationFilter = {
    every?: Prisma.UserBookStatusWhereInput;
    some?: Prisma.UserBookStatusWhereInput;
    none?: Prisma.UserBookStatusWhereInput;
};
export type UserBookStatusOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserBookStatusUserIdBookIdCompoundUniqueInput = {
    userId: string;
    bookId: string;
};
export type UserBookStatusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserBookStatusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserBookStatusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserBookStatusCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserBookStatusCreateWithoutUserInput, Prisma.UserBookStatusUncheckedCreateWithoutUserInput> | Prisma.UserBookStatusCreateWithoutUserInput[] | Prisma.UserBookStatusUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserBookStatusCreateOrConnectWithoutUserInput | Prisma.UserBookStatusCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserBookStatusCreateManyUserInputEnvelope;
    connect?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
};
export type UserBookStatusUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserBookStatusCreateWithoutUserInput, Prisma.UserBookStatusUncheckedCreateWithoutUserInput> | Prisma.UserBookStatusCreateWithoutUserInput[] | Prisma.UserBookStatusUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserBookStatusCreateOrConnectWithoutUserInput | Prisma.UserBookStatusCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserBookStatusCreateManyUserInputEnvelope;
    connect?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
};
export type UserBookStatusUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserBookStatusCreateWithoutUserInput, Prisma.UserBookStatusUncheckedCreateWithoutUserInput> | Prisma.UserBookStatusCreateWithoutUserInput[] | Prisma.UserBookStatusUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserBookStatusCreateOrConnectWithoutUserInput | Prisma.UserBookStatusCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserBookStatusUpsertWithWhereUniqueWithoutUserInput | Prisma.UserBookStatusUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserBookStatusCreateManyUserInputEnvelope;
    set?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    disconnect?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    delete?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    connect?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    update?: Prisma.UserBookStatusUpdateWithWhereUniqueWithoutUserInput | Prisma.UserBookStatusUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserBookStatusUpdateManyWithWhereWithoutUserInput | Prisma.UserBookStatusUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserBookStatusScalarWhereInput | Prisma.UserBookStatusScalarWhereInput[];
};
export type UserBookStatusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserBookStatusCreateWithoutUserInput, Prisma.UserBookStatusUncheckedCreateWithoutUserInput> | Prisma.UserBookStatusCreateWithoutUserInput[] | Prisma.UserBookStatusUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserBookStatusCreateOrConnectWithoutUserInput | Prisma.UserBookStatusCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserBookStatusUpsertWithWhereUniqueWithoutUserInput | Prisma.UserBookStatusUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserBookStatusCreateManyUserInputEnvelope;
    set?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    disconnect?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    delete?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    connect?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    update?: Prisma.UserBookStatusUpdateWithWhereUniqueWithoutUserInput | Prisma.UserBookStatusUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserBookStatusUpdateManyWithWhereWithoutUserInput | Prisma.UserBookStatusUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserBookStatusScalarWhereInput | Prisma.UserBookStatusScalarWhereInput[];
};
export type UserBookStatusCreateNestedManyWithoutBookInput = {
    create?: Prisma.XOR<Prisma.UserBookStatusCreateWithoutBookInput, Prisma.UserBookStatusUncheckedCreateWithoutBookInput> | Prisma.UserBookStatusCreateWithoutBookInput[] | Prisma.UserBookStatusUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.UserBookStatusCreateOrConnectWithoutBookInput | Prisma.UserBookStatusCreateOrConnectWithoutBookInput[];
    createMany?: Prisma.UserBookStatusCreateManyBookInputEnvelope;
    connect?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
};
export type UserBookStatusUncheckedCreateNestedManyWithoutBookInput = {
    create?: Prisma.XOR<Prisma.UserBookStatusCreateWithoutBookInput, Prisma.UserBookStatusUncheckedCreateWithoutBookInput> | Prisma.UserBookStatusCreateWithoutBookInput[] | Prisma.UserBookStatusUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.UserBookStatusCreateOrConnectWithoutBookInput | Prisma.UserBookStatusCreateOrConnectWithoutBookInput[];
    createMany?: Prisma.UserBookStatusCreateManyBookInputEnvelope;
    connect?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
};
export type UserBookStatusUpdateManyWithoutBookNestedInput = {
    create?: Prisma.XOR<Prisma.UserBookStatusCreateWithoutBookInput, Prisma.UserBookStatusUncheckedCreateWithoutBookInput> | Prisma.UserBookStatusCreateWithoutBookInput[] | Prisma.UserBookStatusUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.UserBookStatusCreateOrConnectWithoutBookInput | Prisma.UserBookStatusCreateOrConnectWithoutBookInput[];
    upsert?: Prisma.UserBookStatusUpsertWithWhereUniqueWithoutBookInput | Prisma.UserBookStatusUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: Prisma.UserBookStatusCreateManyBookInputEnvelope;
    set?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    disconnect?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    delete?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    connect?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    update?: Prisma.UserBookStatusUpdateWithWhereUniqueWithoutBookInput | Prisma.UserBookStatusUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?: Prisma.UserBookStatusUpdateManyWithWhereWithoutBookInput | Prisma.UserBookStatusUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: Prisma.UserBookStatusScalarWhereInput | Prisma.UserBookStatusScalarWhereInput[];
};
export type UserBookStatusUncheckedUpdateManyWithoutBookNestedInput = {
    create?: Prisma.XOR<Prisma.UserBookStatusCreateWithoutBookInput, Prisma.UserBookStatusUncheckedCreateWithoutBookInput> | Prisma.UserBookStatusCreateWithoutBookInput[] | Prisma.UserBookStatusUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.UserBookStatusCreateOrConnectWithoutBookInput | Prisma.UserBookStatusCreateOrConnectWithoutBookInput[];
    upsert?: Prisma.UserBookStatusUpsertWithWhereUniqueWithoutBookInput | Prisma.UserBookStatusUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: Prisma.UserBookStatusCreateManyBookInputEnvelope;
    set?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    disconnect?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    delete?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    connect?: Prisma.UserBookStatusWhereUniqueInput | Prisma.UserBookStatusWhereUniqueInput[];
    update?: Prisma.UserBookStatusUpdateWithWhereUniqueWithoutBookInput | Prisma.UserBookStatusUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?: Prisma.UserBookStatusUpdateManyWithWhereWithoutBookInput | Prisma.UserBookStatusUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: Prisma.UserBookStatusScalarWhereInput | Prisma.UserBookStatusScalarWhereInput[];
};
export type EnumBookStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookStatus;
};
export type UserBookStatusCreateWithoutUserInput = {
    id?: string;
    status?: $Enums.BookStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    book: Prisma.BookCreateNestedOneWithoutUserStatusInput;
};
export type UserBookStatusUncheckedCreateWithoutUserInput = {
    id?: string;
    bookId: string;
    status?: $Enums.BookStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserBookStatusCreateOrConnectWithoutUserInput = {
    where: Prisma.UserBookStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserBookStatusCreateWithoutUserInput, Prisma.UserBookStatusUncheckedCreateWithoutUserInput>;
};
export type UserBookStatusCreateManyUserInputEnvelope = {
    data: Prisma.UserBookStatusCreateManyUserInput | Prisma.UserBookStatusCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserBookStatusUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserBookStatusWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserBookStatusUpdateWithoutUserInput, Prisma.UserBookStatusUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserBookStatusCreateWithoutUserInput, Prisma.UserBookStatusUncheckedCreateWithoutUserInput>;
};
export type UserBookStatusUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserBookStatusWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserBookStatusUpdateWithoutUserInput, Prisma.UserBookStatusUncheckedUpdateWithoutUserInput>;
};
export type UserBookStatusUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserBookStatusScalarWhereInput;
    data: Prisma.XOR<Prisma.UserBookStatusUpdateManyMutationInput, Prisma.UserBookStatusUncheckedUpdateManyWithoutUserInput>;
};
export type UserBookStatusScalarWhereInput = {
    AND?: Prisma.UserBookStatusScalarWhereInput | Prisma.UserBookStatusScalarWhereInput[];
    OR?: Prisma.UserBookStatusScalarWhereInput[];
    NOT?: Prisma.UserBookStatusScalarWhereInput | Prisma.UserBookStatusScalarWhereInput[];
    id?: Prisma.StringFilter<"UserBookStatus"> | string;
    userId?: Prisma.StringFilter<"UserBookStatus"> | string;
    bookId?: Prisma.StringFilter<"UserBookStatus"> | string;
    status?: Prisma.EnumBookStatusFilter<"UserBookStatus"> | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeFilter<"UserBookStatus"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserBookStatus"> | Date | string;
};
export type UserBookStatusCreateWithoutBookInput = {
    id?: string;
    status?: $Enums.BookStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBookStatusInput;
};
export type UserBookStatusUncheckedCreateWithoutBookInput = {
    id?: string;
    userId: string;
    status?: $Enums.BookStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserBookStatusCreateOrConnectWithoutBookInput = {
    where: Prisma.UserBookStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserBookStatusCreateWithoutBookInput, Prisma.UserBookStatusUncheckedCreateWithoutBookInput>;
};
export type UserBookStatusCreateManyBookInputEnvelope = {
    data: Prisma.UserBookStatusCreateManyBookInput | Prisma.UserBookStatusCreateManyBookInput[];
    skipDuplicates?: boolean;
};
export type UserBookStatusUpsertWithWhereUniqueWithoutBookInput = {
    where: Prisma.UserBookStatusWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserBookStatusUpdateWithoutBookInput, Prisma.UserBookStatusUncheckedUpdateWithoutBookInput>;
    create: Prisma.XOR<Prisma.UserBookStatusCreateWithoutBookInput, Prisma.UserBookStatusUncheckedCreateWithoutBookInput>;
};
export type UserBookStatusUpdateWithWhereUniqueWithoutBookInput = {
    where: Prisma.UserBookStatusWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserBookStatusUpdateWithoutBookInput, Prisma.UserBookStatusUncheckedUpdateWithoutBookInput>;
};
export type UserBookStatusUpdateManyWithWhereWithoutBookInput = {
    where: Prisma.UserBookStatusScalarWhereInput;
    data: Prisma.XOR<Prisma.UserBookStatusUpdateManyMutationInput, Prisma.UserBookStatusUncheckedUpdateManyWithoutBookInput>;
};
export type UserBookStatusCreateManyUserInput = {
    id?: string;
    bookId: string;
    status?: $Enums.BookStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserBookStatusUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    book?: Prisma.BookUpdateOneRequiredWithoutUserStatusNestedInput;
};
export type UserBookStatusUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBookStatusUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBookStatusCreateManyBookInput = {
    id?: string;
    userId: string;
    status?: $Enums.BookStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserBookStatusUpdateWithoutBookInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBookStatusNestedInput;
};
export type UserBookStatusUncheckedUpdateWithoutBookInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBookStatusUncheckedUpdateManyWithoutBookInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBookStatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    bookId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userBookStatus"]>;
export type UserBookStatusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    bookId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userBookStatus"]>;
export type UserBookStatusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    bookId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userBookStatus"]>;
export type UserBookStatusSelectScalar = {
    id?: boolean;
    userId?: boolean;
    bookId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserBookStatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "bookId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["userBookStatus"]>;
export type UserBookStatusInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
};
export type UserBookStatusIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
};
export type UserBookStatusIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
};
export type $UserBookStatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserBookStatus";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        book: Prisma.$BookPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        bookId: string;
        status: $Enums.BookStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["userBookStatus"]>;
    composites: {};
};
export type UserBookStatusGetPayload<S extends boolean | null | undefined | UserBookStatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserBookStatusPayload, S>;
export type UserBookStatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserBookStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserBookStatusCountAggregateInputType | true;
};
export interface UserBookStatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserBookStatus'];
        meta: {
            name: 'UserBookStatus';
        };
    };
    findUnique<T extends UserBookStatusFindUniqueArgs>(args: Prisma.SelectSubset<T, UserBookStatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserBookStatusClient<runtime.Types.Result.GetResult<Prisma.$UserBookStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserBookStatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserBookStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserBookStatusClient<runtime.Types.Result.GetResult<Prisma.$UserBookStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserBookStatusFindFirstArgs>(args?: Prisma.SelectSubset<T, UserBookStatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserBookStatusClient<runtime.Types.Result.GetResult<Prisma.$UserBookStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserBookStatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserBookStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserBookStatusClient<runtime.Types.Result.GetResult<Prisma.$UserBookStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserBookStatusFindManyArgs>(args?: Prisma.SelectSubset<T, UserBookStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserBookStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserBookStatusCreateArgs>(args: Prisma.SelectSubset<T, UserBookStatusCreateArgs<ExtArgs>>): Prisma.Prisma__UserBookStatusClient<runtime.Types.Result.GetResult<Prisma.$UserBookStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserBookStatusCreateManyArgs>(args?: Prisma.SelectSubset<T, UserBookStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserBookStatusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserBookStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserBookStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserBookStatusDeleteArgs>(args: Prisma.SelectSubset<T, UserBookStatusDeleteArgs<ExtArgs>>): Prisma.Prisma__UserBookStatusClient<runtime.Types.Result.GetResult<Prisma.$UserBookStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserBookStatusUpdateArgs>(args: Prisma.SelectSubset<T, UserBookStatusUpdateArgs<ExtArgs>>): Prisma.Prisma__UserBookStatusClient<runtime.Types.Result.GetResult<Prisma.$UserBookStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserBookStatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserBookStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserBookStatusUpdateManyArgs>(args: Prisma.SelectSubset<T, UserBookStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserBookStatusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserBookStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserBookStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserBookStatusUpsertArgs>(args: Prisma.SelectSubset<T, UserBookStatusUpsertArgs<ExtArgs>>): Prisma.Prisma__UserBookStatusClient<runtime.Types.Result.GetResult<Prisma.$UserBookStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserBookStatusCountArgs>(args?: Prisma.Subset<T, UserBookStatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserBookStatusCountAggregateOutputType> : number>;
    aggregate<T extends UserBookStatusAggregateArgs>(args: Prisma.Subset<T, UserBookStatusAggregateArgs>): Prisma.PrismaPromise<GetUserBookStatusAggregateType<T>>;
    groupBy<T extends UserBookStatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserBookStatusGroupByArgs['orderBy'];
    } : {
        orderBy?: UserBookStatusGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserBookStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBookStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserBookStatusFieldRefs;
}
export interface Prisma__UserBookStatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    book<T extends Prisma.BookDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BookDefaultArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserBookStatusFieldRefs {
    readonly id: Prisma.FieldRef<"UserBookStatus", 'String'>;
    readonly userId: Prisma.FieldRef<"UserBookStatus", 'String'>;
    readonly bookId: Prisma.FieldRef<"UserBookStatus", 'String'>;
    readonly status: Prisma.FieldRef<"UserBookStatus", 'BookStatus'>;
    readonly createdAt: Prisma.FieldRef<"UserBookStatus", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"UserBookStatus", 'DateTime'>;
}
export type UserBookStatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookStatusSelect<ExtArgs> | null;
    omit?: Prisma.UserBookStatusOmit<ExtArgs> | null;
    include?: Prisma.UserBookStatusInclude<ExtArgs> | null;
    where: Prisma.UserBookStatusWhereUniqueInput;
};
export type UserBookStatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookStatusSelect<ExtArgs> | null;
    omit?: Prisma.UserBookStatusOmit<ExtArgs> | null;
    include?: Prisma.UserBookStatusInclude<ExtArgs> | null;
    where: Prisma.UserBookStatusWhereUniqueInput;
};
export type UserBookStatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookStatusSelect<ExtArgs> | null;
    omit?: Prisma.UserBookStatusOmit<ExtArgs> | null;
    include?: Prisma.UserBookStatusInclude<ExtArgs> | null;
    where?: Prisma.UserBookStatusWhereInput;
    orderBy?: Prisma.UserBookStatusOrderByWithRelationInput | Prisma.UserBookStatusOrderByWithRelationInput[];
    cursor?: Prisma.UserBookStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserBookStatusScalarFieldEnum | Prisma.UserBookStatusScalarFieldEnum[];
};
export type UserBookStatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookStatusSelect<ExtArgs> | null;
    omit?: Prisma.UserBookStatusOmit<ExtArgs> | null;
    include?: Prisma.UserBookStatusInclude<ExtArgs> | null;
    where?: Prisma.UserBookStatusWhereInput;
    orderBy?: Prisma.UserBookStatusOrderByWithRelationInput | Prisma.UserBookStatusOrderByWithRelationInput[];
    cursor?: Prisma.UserBookStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserBookStatusScalarFieldEnum | Prisma.UserBookStatusScalarFieldEnum[];
};
export type UserBookStatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookStatusSelect<ExtArgs> | null;
    omit?: Prisma.UserBookStatusOmit<ExtArgs> | null;
    include?: Prisma.UserBookStatusInclude<ExtArgs> | null;
    where?: Prisma.UserBookStatusWhereInput;
    orderBy?: Prisma.UserBookStatusOrderByWithRelationInput | Prisma.UserBookStatusOrderByWithRelationInput[];
    cursor?: Prisma.UserBookStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserBookStatusScalarFieldEnum | Prisma.UserBookStatusScalarFieldEnum[];
};
export type UserBookStatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookStatusSelect<ExtArgs> | null;
    omit?: Prisma.UserBookStatusOmit<ExtArgs> | null;
    include?: Prisma.UserBookStatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserBookStatusCreateInput, Prisma.UserBookStatusUncheckedCreateInput>;
};
export type UserBookStatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserBookStatusCreateManyInput | Prisma.UserBookStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserBookStatusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookStatusSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserBookStatusOmit<ExtArgs> | null;
    data: Prisma.UserBookStatusCreateManyInput | Prisma.UserBookStatusCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserBookStatusIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserBookStatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookStatusSelect<ExtArgs> | null;
    omit?: Prisma.UserBookStatusOmit<ExtArgs> | null;
    include?: Prisma.UserBookStatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserBookStatusUpdateInput, Prisma.UserBookStatusUncheckedUpdateInput>;
    where: Prisma.UserBookStatusWhereUniqueInput;
};
export type UserBookStatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserBookStatusUpdateManyMutationInput, Prisma.UserBookStatusUncheckedUpdateManyInput>;
    where?: Prisma.UserBookStatusWhereInput;
    limit?: number;
};
export type UserBookStatusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookStatusSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserBookStatusOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserBookStatusUpdateManyMutationInput, Prisma.UserBookStatusUncheckedUpdateManyInput>;
    where?: Prisma.UserBookStatusWhereInput;
    limit?: number;
    include?: Prisma.UserBookStatusIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserBookStatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookStatusSelect<ExtArgs> | null;
    omit?: Prisma.UserBookStatusOmit<ExtArgs> | null;
    include?: Prisma.UserBookStatusInclude<ExtArgs> | null;
    where: Prisma.UserBookStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserBookStatusCreateInput, Prisma.UserBookStatusUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserBookStatusUpdateInput, Prisma.UserBookStatusUncheckedUpdateInput>;
};
export type UserBookStatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookStatusSelect<ExtArgs> | null;
    omit?: Prisma.UserBookStatusOmit<ExtArgs> | null;
    include?: Prisma.UserBookStatusInclude<ExtArgs> | null;
    where: Prisma.UserBookStatusWhereUniqueInput;
};
export type UserBookStatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserBookStatusWhereInput;
    limit?: number;
};
export type UserBookStatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookStatusSelect<ExtArgs> | null;
    omit?: Prisma.UserBookStatusOmit<ExtArgs> | null;
    include?: Prisma.UserBookStatusInclude<ExtArgs> | null;
};
export {};
