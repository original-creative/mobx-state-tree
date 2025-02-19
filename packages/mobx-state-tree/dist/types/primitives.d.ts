import { ISimpleType, IType } from "../internal"
/**
 * `types.string` - Creates a type that can only contain a string value.
 * This type is used for string values by default
 *
 * Example:
 * ```ts
 * const Person = types.model({
 *   firstName: types.string,
 *   lastName: "Doe"
 * })
 * ```
 */
export declare const string: ISimpleType<string>
/**
 * `types.number` - Creates a type that can only contain a numeric value.
 * This type is used for numeric values by default
 *
 * Example:
 * ```ts
 * const Vector = types.model({
 *   x: types.number,
 *   y: 1.5
 * })
 * ```
 */
export declare const number: ISimpleType<number>
/**
 * `types.integer` - Creates a type that can only contain an integer value.
 * This type is used for integer values by default
 *
 * Example:
 * ```ts
 * const Size = types.model({
 *   width: types.integer,
 *   height: 10
 * })
 * ```
 */
export declare const integer: ISimpleType<number>
/**
 * `types.boolean` - Creates a type that can only contain a boolean value.
 * This type is used for boolean values by default
 *
 * Example:
 * ```ts
 * const Thing = types.model({
 *   isCool: types.boolean,
 *   isAwesome: false
 * })
 * ```
 */
export declare const boolean: ISimpleType<boolean>
/**
 * `types.null` - The type of the value `null`
 */
export declare const nullType: ISimpleType<null>
/**
 * `types.undefined` - The type of the value `undefined`
 */
export declare const undefinedType: ISimpleType<undefined>
/**
 * `types.Date` - Creates a type that can only contain a javascript Date value.
 *
 * Example:
 * ```ts
 * const LogLine = types.model({
 *   timestamp: types.Date,
 * })
 *
 * LogLine.create({ timestamp: new Date() })
 * ```
 */
export declare const DatePrimitive: IType<number | Date, number, Date>
/**
 * Returns if a given value represents a primitive type.
 *
 * @param type
 * @returns
 */
export declare function isPrimitiveType<
    IT extends
        | ISimpleType<string>
        | ISimpleType<number>
        | ISimpleType<boolean>
        | typeof DatePrimitive
>(type: IT): type is IT
