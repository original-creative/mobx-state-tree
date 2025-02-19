import { ISimpleType } from "../../internal"
/** @hidden */
export declare type UnionStringArray<T extends string[]> = T[number]
export declare function enumeration<T extends string>(
    options: T[]
): ISimpleType<UnionStringArray<T[]>>
export declare function enumeration<T extends string>(
    name: string,
    options: T[]
): ISimpleType<UnionStringArray<T[]>>
