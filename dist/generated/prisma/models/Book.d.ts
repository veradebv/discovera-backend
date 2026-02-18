import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BookModel = runtime.Types.Result.DefaultSelection<Prisma.$BookPayload>;
export type AggregateBook = {
    _count: BookCountAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
};
export type BookMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    author: string | null;
    description: string | null;
    coverUrl: string | null;
    isbn: string | null;
    publishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BookMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    author: string | null;
    description: string | null;
    coverUrl: string | null;
    isbn: string | null;
    publishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BookCountAggregateOutputType = {
    id: number;
    title: number;
    author: number;
    description: number;
    coverUrl: number;
    isbn: number;
    publishedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BookMinAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    description?: true;
    coverUrl?: true;
    isbn?: true;
    publishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BookMaxAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    description?: true;
    coverUrl?: true;
    isbn?: true;
    publishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BookCountAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    description?: true;
    coverUrl?: true;
    isbn?: true;
    publishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BookAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BookCountAggregateInputType;
    _min?: BookMinAggregateInputType;
    _max?: BookMaxAggregateInputType;
};
export type GetBookAggregateType<T extends BookAggregateArgs> = {
    [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBook[P]> : Prisma.GetScalarType<T[P], AggregateBook[P]>;
};
export type BookGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithAggregationInput | Prisma.BookOrderByWithAggregationInput[];
    by: Prisma.BookScalarFieldEnum[] | Prisma.BookScalarFieldEnum;
    having?: Prisma.BookScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookCountAggregateInputType | true;
    _min?: BookMinAggregateInputType;
    _max?: BookMaxAggregateInputType;
};
export type BookGroupByOutputType = {
    id: string;
    title: string;
    author: string;
    description: string | null;
    coverUrl: string | null;
    isbn: string | null;
    publishedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BookCountAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
};
type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BookGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BookGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BookGroupByOutputType[P]>;
}>>;
export type BookWhereInput = {
    AND?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    OR?: Prisma.BookWhereInput[];
    NOT?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    id?: Prisma.StringFilter<"Book"> | string;
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringFilter<"Book"> | string;
    description?: Prisma.StringNullableFilter<"Book"> | string | null;
    coverUrl?: Prisma.StringNullableFilter<"Book"> | string | null;
    isbn?: Prisma.StringNullableFilter<"Book"> | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"Book"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    reviews?: Prisma.ReviewListRelationFilter;
    userStatus?: Prisma.UserBookStatusListRelationFilter;
};
export type BookOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isbn?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    reviews?: Prisma.ReviewOrderByRelationAggregateInput;
    userStatus?: Prisma.UserBookStatusOrderByRelationAggregateInput;
};
export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    isbn?: string;
    AND?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    OR?: Prisma.BookWhereInput[];
    NOT?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringFilter<"Book"> | string;
    description?: Prisma.StringNullableFilter<"Book"> | string | null;
    coverUrl?: Prisma.StringNullableFilter<"Book"> | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"Book"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    reviews?: Prisma.ReviewListRelationFilter;
    userStatus?: Prisma.UserBookStatusListRelationFilter;
}, "id" | "isbn">;
export type BookOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isbn?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BookCountOrderByAggregateInput;
    _max?: Prisma.BookMaxOrderByAggregateInput;
    _min?: Prisma.BookMinOrderByAggregateInput;
};
export type BookScalarWhereWithAggregatesInput = {
    AND?: Prisma.BookScalarWhereWithAggregatesInput | Prisma.BookScalarWhereWithAggregatesInput[];
    OR?: Prisma.BookScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BookScalarWhereWithAggregatesInput | Prisma.BookScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    author?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    coverUrl?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    isbn?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    publishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Book"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Book"> | Date | string;
};
export type BookCreateInput = {
    id?: string;
    title: string;
    author: string;
    description?: string | null;
    coverUrl?: string | null;
    isbn?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: Prisma.ReviewCreateNestedManyWithoutBookInput;
    userStatus?: Prisma.UserBookStatusCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateInput = {
    id?: string;
    title: string;
    author: string;
    description?: string | null;
    coverUrl?: string | null;
    isbn?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutBookInput;
    userStatus?: Prisma.UserBookStatusUncheckedCreateNestedManyWithoutBookInput;
};
export type BookUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.ReviewUpdateManyWithoutBookNestedInput;
    userStatus?: Prisma.UserBookStatusUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutBookNestedInput;
    userStatus?: Prisma.UserBookStatusUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookCreateManyInput = {
    id?: string;
    title: string;
    author: string;
    description?: string | null;
    coverUrl?: string | null;
    isbn?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    coverUrl?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    coverUrl?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    coverUrl?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookScalarRelationFilter = {
    is?: Prisma.BookWhereInput;
    isNot?: Prisma.BookWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type BookCreateNestedOneWithoutUserStatusInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutUserStatusInput, Prisma.BookUncheckedCreateWithoutUserStatusInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutUserStatusInput;
    connect?: Prisma.BookWhereUniqueInput;
};
export type BookUpdateOneRequiredWithoutUserStatusNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutUserStatusInput, Prisma.BookUncheckedCreateWithoutUserStatusInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutUserStatusInput;
    upsert?: Prisma.BookUpsertWithoutUserStatusInput;
    connect?: Prisma.BookWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BookUpdateToOneWithWhereWithoutUserStatusInput, Prisma.BookUpdateWithoutUserStatusInput>, Prisma.BookUncheckedUpdateWithoutUserStatusInput>;
};
export type BookCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutReviewsInput, Prisma.BookUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.BookWhereUniqueInput;
};
export type BookUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutReviewsInput, Prisma.BookUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.BookUpsertWithoutReviewsInput;
    connect?: Prisma.BookWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BookUpdateToOneWithWhereWithoutReviewsInput, Prisma.BookUpdateWithoutReviewsInput>, Prisma.BookUncheckedUpdateWithoutReviewsInput>;
};
export type BookCreateWithoutUserStatusInput = {
    id?: string;
    title: string;
    author: string;
    description?: string | null;
    coverUrl?: string | null;
    isbn?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: Prisma.ReviewCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateWithoutUserStatusInput = {
    id?: string;
    title: string;
    author: string;
    description?: string | null;
    coverUrl?: string | null;
    isbn?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutBookInput;
};
export type BookCreateOrConnectWithoutUserStatusInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutUserStatusInput, Prisma.BookUncheckedCreateWithoutUserStatusInput>;
};
export type BookUpsertWithoutUserStatusInput = {
    update: Prisma.XOR<Prisma.BookUpdateWithoutUserStatusInput, Prisma.BookUncheckedUpdateWithoutUserStatusInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutUserStatusInput, Prisma.BookUncheckedCreateWithoutUserStatusInput>;
    where?: Prisma.BookWhereInput;
};
export type BookUpdateToOneWithWhereWithoutUserStatusInput = {
    where?: Prisma.BookWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutUserStatusInput, Prisma.BookUncheckedUpdateWithoutUserStatusInput>;
};
export type BookUpdateWithoutUserStatusInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.ReviewUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateWithoutUserStatusInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookCreateWithoutReviewsInput = {
    id?: string;
    title: string;
    author: string;
    description?: string | null;
    coverUrl?: string | null;
    isbn?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userStatus?: Prisma.UserBookStatusCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateWithoutReviewsInput = {
    id?: string;
    title: string;
    author: string;
    description?: string | null;
    coverUrl?: string | null;
    isbn?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userStatus?: Prisma.UserBookStatusUncheckedCreateNestedManyWithoutBookInput;
};
export type BookCreateOrConnectWithoutReviewsInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutReviewsInput, Prisma.BookUncheckedCreateWithoutReviewsInput>;
};
export type BookUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.BookUpdateWithoutReviewsInput, Prisma.BookUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutReviewsInput, Prisma.BookUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.BookWhereInput;
};
export type BookUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.BookWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutReviewsInput, Prisma.BookUncheckedUpdateWithoutReviewsInput>;
};
export type BookUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userStatus?: Prisma.UserBookStatusUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userStatus?: Prisma.UserBookStatusUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookCountOutputType = {
    reviews: number;
    userStatus: number;
};
export type BookCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reviews?: boolean | BookCountOutputTypeCountReviewsArgs;
    userStatus?: boolean | BookCountOutputTypeCountUserStatusArgs;
};
export type BookCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookCountOutputTypeSelect<ExtArgs> | null;
};
export type BookCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
};
export type BookCountOutputTypeCountUserStatusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserBookStatusWhereInput;
};
export type BookSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    author?: boolean;
    description?: boolean;
    coverUrl?: boolean;
    isbn?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    reviews?: boolean | Prisma.Book$reviewsArgs<ExtArgs>;
    userStatus?: boolean | Prisma.Book$userStatusArgs<ExtArgs>;
    _count?: boolean | Prisma.BookCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    author?: boolean;
    description?: boolean;
    coverUrl?: boolean;
    isbn?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["book"]>;
export type BookSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    author?: boolean;
    description?: boolean;
    coverUrl?: boolean;
    isbn?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["book"]>;
export type BookSelectScalar = {
    id?: boolean;
    title?: boolean;
    author?: boolean;
    description?: boolean;
    coverUrl?: boolean;
    isbn?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BookOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "author" | "description" | "coverUrl" | "isbn" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["book"]>;
export type BookInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reviews?: boolean | Prisma.Book$reviewsArgs<ExtArgs>;
    userStatus?: boolean | Prisma.Book$userStatusArgs<ExtArgs>;
    _count?: boolean | Prisma.BookCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BookIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type BookIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $BookPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Book";
    objects: {
        reviews: Prisma.$ReviewPayload<ExtArgs>[];
        userStatus: Prisma.$UserBookStatusPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        author: string;
        description: string | null;
        coverUrl: string | null;
        isbn: string | null;
        publishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["book"]>;
    composites: {};
};
export type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BookPayload, S>;
export type BookCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookCountAggregateInputType | true;
};
export interface BookDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Book'];
        meta: {
            name: 'Book';
        };
    };
    findUnique<T extends BookFindUniqueArgs>(args: Prisma.SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BookFindFirstArgs>(args?: Prisma.SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BookFindManyArgs>(args?: Prisma.SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BookCreateArgs>(args: Prisma.SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BookCreateManyArgs>(args?: Prisma.SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BookDeleteArgs>(args: Prisma.SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BookUpdateArgs>(args: Prisma.SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BookDeleteManyArgs>(args?: Prisma.SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BookUpdateManyArgs>(args: Prisma.SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BookUpsertArgs>(args: Prisma.SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BookCountArgs>(args?: Prisma.Subset<T, BookCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BookCountAggregateOutputType> : number>;
    aggregate<T extends BookAggregateArgs>(args: Prisma.Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>;
    groupBy<T extends BookGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BookGroupByArgs['orderBy'];
    } : {
        orderBy?: BookGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BookFieldRefs;
}
export interface Prisma__BookClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reviews<T extends Prisma.Book$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    userStatus<T extends Prisma.Book$userStatusArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$userStatusArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserBookStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BookFieldRefs {
    readonly id: Prisma.FieldRef<"Book", 'String'>;
    readonly title: Prisma.FieldRef<"Book", 'String'>;
    readonly author: Prisma.FieldRef<"Book", 'String'>;
    readonly description: Prisma.FieldRef<"Book", 'String'>;
    readonly coverUrl: Prisma.FieldRef<"Book", 'String'>;
    readonly isbn: Prisma.FieldRef<"Book", 'String'>;
    readonly publishedAt: Prisma.FieldRef<"Book", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Book", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Book", 'DateTime'>;
}
export type BookFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookCreateInput, Prisma.BookUncheckedCreateInput>;
};
export type BookCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BookCreateManyInput | Prisma.BookCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BookCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    data: Prisma.BookCreateManyInput | Prisma.BookCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BookUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookUpdateInput, Prisma.BookUncheckedUpdateInput>;
    where: Prisma.BookWhereUniqueInput;
};
export type BookUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyInput>;
    where?: Prisma.BookWhereInput;
    limit?: number;
};
export type BookUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyInput>;
    where?: Prisma.BookWhereInput;
    limit?: number;
};
export type BookUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateInput, Prisma.BookUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BookUpdateInput, Prisma.BookUncheckedUpdateInput>;
};
export type BookDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    limit?: number;
};
export type Book$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
export type Book$userStatusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BookDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
};
export {};
