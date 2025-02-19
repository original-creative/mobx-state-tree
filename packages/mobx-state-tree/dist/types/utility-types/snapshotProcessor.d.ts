import { IType, IAnyType } from "../../internal"
/** @hidden */
declare const $mstNotCustomized: unique symbol
/** @hidden */
export interface _NotCustomized {
    readonly [$mstNotCustomized]: undefined
}
/** @hidden */
export declare type _CustomOrOther<Custom, Other> = Custom extends _NotCustomized ? Other : Custom
/**
 * A type that has its snapshots processed.
 */
export interface ISnapshotProcessor<IT extends IAnyType, CustomC, CustomS>
    extends IType<
        _CustomOrOther<CustomC, IT["CreationType"]>,
        _CustomOrOther<CustomS, IT["SnapshotType"]>,
        IT["TypeWithoutSTN"]
    > {}
/**
 * Snapshot processors.
 */
export interface ISnapshotProcessors<C, CustomC, S, CustomS> {
    /**
     * Function that transforms an input snapshot.
     */
    preProcessor?(snapshot: CustomC): C
    /**
     * Function that transforms an output snapshot.
     * @param snapshot
     */
    postProcessor?(snapshot: S): CustomS
}
/**
 * `types.snapshotProcessor` - Runs a pre/post snapshot processor before/after serializing a given type.
 *
 * Example:
 * ```ts
 * const Todo1 = types.model({ text: types.string })
 * // in the backend the text type must be null when empty
 * interface BackendTodo {
 *     text: string | null
 * }
 * const Todo2 = types.snapshotProcessor(Todo1, {
 *     // from snapshot to instance
 *     preProcessor(sn: BackendTodo) {
 *         return {
 *             text: sn.text || "";
 *         }
 *     },
 *     // from instance to snapshot
 *     postProcessor(sn): BackendTodo {
 *         return {
 *             text: !sn.text ? null : sn.text
 *         }
 *     }
 * })
 * ```
 *
 * @param type Type to run the processors over.
 * @param processors Processors to run.
 * @param name Type name, or undefined to inherit the inner type one.
 * @returns
 */
export declare function snapshotProcessor<
    IT extends IAnyType,
    CustomC = _NotCustomized,
    CustomS = _NotCustomized
>(
    type: IT,
    processors: ISnapshotProcessors<IT["CreationType"], CustomC, IT["SnapshotType"], CustomS>,
    name?: string
): ISnapshotProcessor<IT, CustomC, CustomS>
export {}
