export declare const BookStatus: {
    readonly WANT_TO_READ: "WANT_TO_READ";
    readonly READING: "READING";
    readonly READ: "READ";
};
export type BookStatus = (typeof BookStatus)[keyof typeof BookStatus];
