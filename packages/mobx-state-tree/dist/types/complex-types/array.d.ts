import { IObservableArray } from "mobx"
import { ExtractCSTWithSTN, IAnyType, IHooksGetter, IType } from "../../internal"
/** @hidden */
export interface IMSTArray<IT extends IAnyType> extends IObservableArray<IT["Type"]> {
    push(...items: IT["Type"][]): number
    push(...items: ExtractCSTWithSTN<IT>[]): number
    concat(...items: ConcatArray<IT["Type"]>[]): IT["Type"][]
    concat(...items: ConcatArray<ExtractCSTWithSTN<IT>>[]): IT["Type"][]
    concat(...items: (IT["Type"] | ConcatArray<IT["Type"]>)[]): IT["Type"][]
    concat(...items: (ExtractCSTWithSTN<IT> | ConcatArray<ExtractCSTWithSTN<IT>>)[]): IT["Type"][]
    splice(start: number, deleteCount?: number): IT["Type"][]
    splice(start: number, deleteCount: number, ...items: IT["Type"][]): IT["Type"][]
    splice(start: number, deleteCount: number, ...items: ExtractCSTWithSTN<IT>[]): IT["Type"][]
    unshift(...items: IT["Type"][]): number
    unshift(...items: ExtractCSTWithSTN<IT>[]): number
}
/** @hidden */
export interface IArrayType<IT extends IAnyType>
    extends IType<IT["CreationType"][] | undefined, IT["SnapshotType"][], IMSTArray<IT>> {
    hooks(hooks: IHooksGetter<IMSTArray<IAnyType>>): IArrayType<IT>
}
/**
 * `types.array` - Creates an index based collection type who's children are all of a uniform declared type.
 *
 * This type will always produce [observable arrays](https://mobx.js.org/api.html#observablearray)
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   task: types.string
 * })
 *
 * const TodoStore = types.model({
 *   todos: types.array(Todo)
 * })
 *
 * const s = TodoStore.create({ todos: [] })
 * unprotect(s) // needed to allow modifying outside of an action
 * s.todos.push({ task: "Grab coffee" })
 * console.log(s.todos[0]) // prints: "Grab coffee"
 * ```
 *
 * @param subtype
 * @returns
 */
export declare function array<IT extends IAnyType>(subtype: IT): IArrayType<IT>
/**
 * Returns if a given value represents an array type.
 *
 * @param type
 * @returns `true` if the type is an array type.
 */
export declare function isArrayType<Items extends IAnyType = IAnyType>(
    type: IAnyType
): type is IArrayType<Items>
