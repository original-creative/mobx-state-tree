import { IDisposer, IAnyStateTreeNode, IActionContext } from "../internal"
export declare type IMiddlewareEventType =
    | "action"
    | "flow_spawn"
    | "flow_resume"
    | "flow_resume_error"
    | "flow_return"
    | "flow_throw"
export interface IMiddlewareEvent extends IActionContext {
    /** Event type */
    readonly type: IMiddlewareEventType
    /** Parent event unique id */
    readonly parentId: number
    /** Parent event object */
    readonly parentEvent: IMiddlewareEvent | undefined
    /** Root event unique id */
    readonly rootId: number
    /** Id of all events, from root until current (excluding current) */
    readonly allParentIds: number[]
}
export declare type IMiddlewareHandler = (
    actionCall: IMiddlewareEvent,
    next: (actionCall: IMiddlewareEvent, callback?: (value: any) => any) => void,
    abort: (value: any) => void
) => any
/**
 * Middleware can be used to intercept any action is invoked on the subtree where it is attached.
 * If a tree is protected (by default), this means that any mutation of the tree will pass through your middleware.
 *
 * For more details, see the [middleware docs](concepts/middleware.md)
 *
 * @param target Node to apply the middleware to.
 * @param middleware Middleware to apply.
 * @returns A callable function to dispose the middleware.
 */
export declare function addMiddleware(
    target: IAnyStateTreeNode,
    handler: IMiddlewareHandler,
    includeHooks?: boolean
): IDisposer
/**
 * Binds middleware to a specific action.
 *
 * Example:
 * ```ts
 * type.actions(self => {
 *   function takeA____() {
 *       self.toilet.donate()
 *       self.wipe()
 *       self.wipe()
 *       self.toilet.flush()
 *   }
 *   return {
 *     takeA____: decorate(atomic, takeA____)
 *   }
 * })
 * ```
 *
 * @param handler
 * @param fn
 * @param includeHooks
 * @returns The original function
 */
export declare function decorate<T extends Function>(
    handler: IMiddlewareHandler,
    fn: T,
    includeHooks?: boolean
): T
