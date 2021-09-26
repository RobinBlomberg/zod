import { z } from 'zod';
export { z };
export declare const $and: <T extends z.ZodTypeAny, U extends z.ZodTypeAny>(left: T, right: U, params?: {
    errorMap?: ((issue: z.ZodIssueOptionalMessage, _ctx: {
        defaultError: string;
        data: any;
    }) => {
        message: string;
    }) | undefined;
    invalid_type_error?: string | undefined;
    required_error?: string | undefined;
} | undefined) => z.ZodIntersection<T, U>;
export declare const $array: <T extends z.ZodTypeAny>(schema: T, params?: {
    errorMap?: ((issue: z.ZodIssueOptionalMessage, _ctx: {
        defaultError: string;
        data: any;
    }) => {
        message: string;
    }) | undefined;
    invalid_type_error?: string | undefined;
    required_error?: string | undefined;
} | undefined) => z.ZodArray<T, "many">;
export declare const $bigint: z.ZodBigInt;
export declare const $boolean: z.ZodBoolean;
export declare const $cuid: z.ZodString;
export declare const $date: z.ZodDate;
export declare const $email: z.ZodString;
export declare const $enum: {
    <U extends string, T extends readonly [U, ...U[]]>(values: T): z.ZodEnum<{ -readonly [P in keyof T]: T[P]; }>;
    <U_1 extends string, T_1 extends [U_1, ...U_1[]]>(values: T_1): z.ZodEnum<T_1>;
};
export declare const $function: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
export declare const $instanceof: <T extends new (...args: any[]) => any>(cls: T, params?: string | Partial<import("zod/lib/helpers/util").util.Omit<z.ZodCustomIssue, "code">> | ((arg: any) => Partial<import("zod/lib/helpers/util").util.Omit<z.ZodCustomIssue, "code">>) | undefined) => z.ZodType<InstanceType<T>, z.ZodTypeDef, InstanceType<T>>;
export declare const $int: z.ZodNumber;
export declare const $map: <Key extends z.ZodTypeAny = z.ZodTypeAny, Value extends z.ZodTypeAny = z.ZodTypeAny>(keyType: Key, valueType: Value, params?: {
    errorMap?: ((issue: z.ZodIssueOptionalMessage, _ctx: {
        defaultError: string;
        data: any;
    }) => {
        message: string;
    }) | undefined;
    invalid_type_error?: string | undefined;
    required_error?: string | undefined;
} | undefined) => z.ZodMap<Key, Value>;
export declare const $nestring: z.ZodString;
export declare const $null: z.ZodNull;
export declare const $regex: (regex: RegExp) => z.ZodString;
export declare const $port: z.ZodString;
export declare const $promise: <T extends z.ZodTypeAny>(schema: T, params?: {
    errorMap?: ((issue: z.ZodIssueOptionalMessage, _ctx: {
        defaultError: string;
        data: any;
    }) => {
        message: string;
    }) | undefined;
    invalid_type_error?: string | undefined;
    required_error?: string | undefined;
} | undefined) => z.ZodPromise<T>;
export declare const $object: <T extends z.ZodRawShape>(schema: T) => z.ZodObject<T, "strict", z.ZodTypeAny, { [k_1 in keyof z.objectUtil.addQuestionMarks<{ [k in keyof T]: T[k]["_output"]; }>]: z.objectUtil.addQuestionMarks<{ [k in keyof T]: T[k]["_output"]; }>[k_1]; }, { [k_3 in keyof z.objectUtil.addQuestionMarks<{ [k_2 in keyof T]: T[k_2]["_input"]; }>]: z.objectUtil.addQuestionMarks<{ [k_2 in keyof T]: T[k_2]["_input"]; }>[k_3]; }>;
export declare const $or: <T extends [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]>(types: T, params?: {
    errorMap?: ((issue: z.ZodIssueOptionalMessage, _ctx: {
        defaultError: string;
        data: any;
    }) => {
        message: string;
    }) | undefined;
    invalid_type_error?: string | undefined;
    required_error?: string | undefined;
} | undefined) => z.ZodUnion<T>;
export declare const $record: typeof z.ZodRecord.create;
export declare const $set: <Value extends z.ZodTypeAny = z.ZodTypeAny>(valueType: Value, params?: {
    errorMap?: ((issue: z.ZodIssueOptionalMessage, _ctx: {
        defaultError: string;
        data: any;
    }) => {
        message: string;
    }) | undefined;
    invalid_type_error?: string | undefined;
    required_error?: string | undefined;
} | undefined) => z.ZodSet<Value>;
export declare const $string: z.ZodString;
export declare const $tuple: <T extends [] | [z.ZodTypeAny, ...z.ZodTypeAny[]]>(schemas: T, params?: {
    errorMap?: ((issue: z.ZodIssueOptionalMessage, _ctx: {
        defaultError: string;
        data: any;
    }) => {
        message: string;
    }) | undefined;
    invalid_type_error?: string | undefined;
    required_error?: string | undefined;
} | undefined) => z.ZodTuple<T, null>;
export declare const $uint: z.ZodNumber;
export declare const $undefined: z.ZodUndefined;
export declare const $unknown: z.ZodUnknown;
export declare const $uuid: z.ZodString;
export declare const $url: z.ZodString;
