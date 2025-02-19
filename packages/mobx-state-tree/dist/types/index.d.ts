import {
    enumeration,
    model,
    compose,
    custom,
    reference,
    safeReference,
    union,
    optional,
    literal,
    maybe,
    maybeNull,
    refinement,
    map,
    array,
    frozen,
    late,
    snapshotProcessor
} from "../internal"
export declare const types: {
    enumeration: typeof enumeration
    model: typeof model
    compose: typeof compose
    custom: typeof custom
    reference: typeof reference
    safeReference: typeof safeReference
    union: typeof union
    optional: typeof optional
    literal: typeof literal
    maybe: typeof maybe
    maybeNull: typeof maybeNull
    refinement: typeof refinement
    string: import("../internal").ISimpleType<string>
    boolean: import("../internal").ISimpleType<boolean>
    number: import("../internal").ISimpleType<number>
    integer: import("../internal").ISimpleType<number>
    Date: import("../internal").IType<number | Date, number, Date>
    map: typeof map
    array: typeof array
    frozen: typeof frozen
    identifier: import("../internal").ISimpleType<string>
    identifierNumber: import("../internal").ISimpleType<number>
    late: typeof late
    undefined: import("../internal").ISimpleType<undefined>
    null: import("../internal").ISimpleType<null>
    snapshotProcessor: typeof snapshotProcessor
}
