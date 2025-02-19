import {
    IAnyStateTreeNode,
    IType,
    IAnyModelType,
    IStateTreeNode,
    IJsonPatch,
    IDisposer,
    IAnyType,
    ReferenceIdentifier,
    TypeOfValue,
    IActionContext,
    IAnyComplexType
} from "../internal"
/** @hidden */
export declare type TypeOrStateTreeNodeToStateTreeNode<T extends IAnyType | IAnyStateTreeNode> =
    T extends IType<any, any, infer TT> ? TT & IStateTreeNode<T> : T
/**
 * Returns the _actual_ type of the given tree node. (Or throws)
 *
 * @param object
 * @returns
 */
export declare function getType(object: IAnyStateTreeNode): IAnyComplexType
/**
 * Returns the _declared_ type of the given sub property of an object, array or map.
 * In the case of arrays and maps the property name is optional and will be ignored.
 *
 * Example:
 * ```ts
 * const Box = types.model({ x: 0, y: 0 })
 * const box = Box.create()
 *
 * console.log(getChildType(box, "x").name) // 'number'
 * ```
 *
 * @param object
 * @param propertyName
 * @returns
 */
export declare function getChildType(object: IAnyStateTreeNode, propertyName?: string): IAnyType
/**
 * Registers a function that will be invoked for each mutation that is applied to the provided model instance, or to any of its children.
 * See [patches](https://github.com/mobxjs/mobx-state-tree#patches) for more details. onPatch events are emitted immediately and will not await the end of a transaction.
 * Patches can be used to deep observe a model tree.
 *
 * @param target the model instance from which to receive patches
 * @param callback the callback that is invoked for each patch. The reversePatch is a patch that would actually undo the emitted patch
 * @returns function to remove the listener
 */
export declare function onPatch(
    target: IAnyStateTreeNode,
    callback: (patch: IJsonPatch, reversePatch: IJsonPatch) => void
): IDisposer
/**
 * Registers a function that is invoked whenever a new snapshot for the given model instance is available.
 * The listener will only be fire at the end of the current MobX (trans)action.
 * See [snapshots](https://github.com/mobxjs/mobx-state-tree#snapshots) for more details.
 *
 * @param target
 * @param callback
 * @returns
 */
export declare function onSnapshot<S>(
    target: IStateTreeNode<IType<any, S, any>>,
    callback: (snapshot: S) => void
): IDisposer
/**
 * Applies a JSON-patch to the given model instance or bails out if the patch couldn't be applied
 * See [patches](https://github.com/mobxjs/mobx-state-tree#patches) for more details.
 *
 * Can apply a single past, or an array of patches.
 *
 * @param target
 * @param patch
 * @returns
 */
export declare function applyPatch(
    target: IAnyStateTreeNode,
    patch: IJsonPatch | ReadonlyArray<IJsonPatch>
): void
export interface IPatchRecorder {
    patches: ReadonlyArray<IJsonPatch>
    inversePatches: ReadonlyArray<IJsonPatch>
    reversedInversePatches: ReadonlyArray<IJsonPatch>
    readonly recording: boolean
    stop(): void
    resume(): void
    replay(target?: IAnyStateTreeNode): void
    undo(target?: IAnyStateTreeNode): void
}
/**
 * Small abstraction around `onPatch` and `applyPatch`, attaches a patch listener to a tree and records all the patches.
 * Returns an recorder object with the following signature:
 *
 * Example:
 * ```ts
 * export interface IPatchRecorder {
 *      // the recorded patches
 *      patches: IJsonPatch[]
 *      // the inverse of the recorded patches
 *      inversePatches: IJsonPatch[]
 *      // true if currently recording
 *      recording: boolean
 *      // stop recording patches
 *      stop(): void
 *      // resume recording patches
 *      resume(): void
 *      // apply all the recorded patches on the given target (the original subject if omitted)
 *      replay(target?: IAnyStateTreeNode): void
 *      // reverse apply the recorded patches on the given target  (the original subject if omitted)
 *      // stops the recorder if not already stopped
 *      undo(): void
 * }
 * ```
 *
 * The optional filter function allows to skip recording certain patches.
 *
 * @param subject
 * @param filter
 * @returns
 */
export declare function recordPatches(
    subject: IAnyStateTreeNode,
    filter?: (
        patch: IJsonPatch,
        inversePatch: IJsonPatch,
        actionContext: IActionContext | undefined
    ) => boolean
): IPatchRecorder
/**
 * The inverse of `unprotect`.
 *
 * @param target
 */
export declare function protect(target: IAnyStateTreeNode): void
/**
 * By default it is not allowed to directly modify a model. Models can only be modified through actions.
 * However, in some cases you don't care about the advantages (like replayability, traceability, etc) this yields.
 * For example because you are building a PoC or don't have any middleware attached to your tree.
 *
 * In that case you can disable this protection by calling `unprotect` on the root of your tree.
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *     done: false
 * }).actions(self => ({
 *     toggle() {
 *         self.done = !self.done
 *     }
 * }))
 *
 * const todo = Todo.create()
 * todo.done = true // throws!
 * todo.toggle() // OK
 * unprotect(todo)
 * todo.done = false // OK
 * ```
 */
export declare function unprotect(target: IAnyStateTreeNode): void
/**
 * Returns true if the object is in protected mode, @see protect
 */
export declare function isProtected(target: IAnyStateTreeNode): boolean
/**
 * Applies a snapshot to a given model instances. Patch and snapshot listeners will be invoked as usual.
 *
 * @param target
 * @param snapshot
 * @returns
 */
export declare function applySnapshot<C>(
    target: IStateTreeNode<IType<C, any, any>>,
    snapshot: C
): void
/**
 * Calculates a snapshot from the given model instance. The snapshot will always reflect the latest state but use
 * structural sharing where possible. Doesn't require MobX transactions to be completed.
 *
 * @param target
 * @param applyPostProcess If true (the default) then postProcessSnapshot gets applied.
 * @returns
 */
export declare function getSnapshot<S>(
    target: IStateTreeNode<IType<any, S, any>>,
    applyPostProcess?: boolean
): S
/**
 * Given a model instance, returns `true` if the object has a parent, that is, is part of another object, map or array.
 *
 * @param target
 * @param depth How far should we look upward? 1 by default.
 * @returns
 */
export declare function hasParent(target: IAnyStateTreeNode, depth?: number): boolean
/**
 * Returns the immediate parent of this object, or throws.
 *
 * Note that the immediate parent can be either an object, map or array, and
 * doesn't necessarily refer to the parent model.
 *
 * Please note that in child nodes access to the root is only possible
 * once the `afterAttach` hook has fired.
 *
 * @param target
 * @param depth How far should we look upward? 1 by default.
 * @returns
 */
export declare function getParent<IT extends IAnyStateTreeNode | IAnyComplexType>(
    target: IAnyStateTreeNode,
    depth?: number
): TypeOrStateTreeNodeToStateTreeNode<IT>
/**
 * Given a model instance, returns `true` if the object has a parent of given type, that is, is part of another object, map or array
 *
 * @param target
 * @param type
 * @returns
 */
export declare function hasParentOfType(target: IAnyStateTreeNode, type: IAnyComplexType): boolean
/**
 * Returns the target's parent of a given type, or throws.
 *
 * @param target
 * @param type
 * @returns
 */
export declare function getParentOfType<IT extends IAnyComplexType>(
    target: IAnyStateTreeNode,
    type: IT
): IT["Type"]
/**
 * Given an object in a model tree, returns the root object of that tree.
 *
 * Please note that in child nodes access to the root is only possible
 * once the `afterAttach` hook has fired.
 *
 * @param target
 * @returns
 */
export declare function getRoot<IT extends IAnyComplexType | IAnyStateTreeNode>(
    target: IAnyStateTreeNode
): TypeOrStateTreeNodeToStateTreeNode<IT>
/**
 * Returns the path of the given object in the model tree
 *
 * @param target
 * @returns
 */
export declare function getPath(target: IAnyStateTreeNode): string
/**
 * Returns the path of the given object as unescaped string array.
 *
 * @param target
 * @returns
 */
export declare function getPathParts(target: IAnyStateTreeNode): string[]
/**
 * Returns true if the given object is the root of a model tree.
 *
 * @param target
 * @returns
 */
export declare function isRoot(target: IAnyStateTreeNode): boolean
/**
 * Resolves a path relatively to a given object.
 * Returns undefined if no value can be found.
 *
 * @param target
 * @param path escaped json path
 * @returns
 */
export declare function resolvePath(target: IAnyStateTreeNode, path: string): any
/**
 * Resolves a model instance given a root target, the type and the identifier you are searching for.
 * Returns undefined if no value can be found.
 *
 * @param type
 * @param target
 * @param identifier
 * @returns
 */
export declare function resolveIdentifier<IT extends IAnyModelType>(
    type: IT,
    target: IAnyStateTreeNode,
    identifier: ReferenceIdentifier
): IT["Type"] | undefined
/**
 * Returns the identifier of the target node.
 * This is the *string normalized* identifier, which might not match the type of the identifier attribute
 *
 * @param target
 * @returns
 */
export declare function getIdentifier(target: IAnyStateTreeNode): string | null
/**
 * Tests if a reference is valid (pointing to an existing node and optionally if alive) and returns such reference if it the check passes,
 * else it returns undefined.
 *
 * @param getter Function to access the reference.
 * @param checkIfAlive true to also make sure the referenced node is alive (default), false to skip this check.
 * @returns
 */
export declare function tryReference<N extends IAnyStateTreeNode>(
    getter: () => N | null | undefined,
    checkIfAlive?: boolean
): N | undefined
/**
 * Tests if a reference is valid (pointing to an existing node and optionally if alive) and returns if the check passes or not.
 *
 * @param getter Function to access the reference.
 * @param checkIfAlive true to also make sure the referenced node is alive (default), false to skip this check.
 * @returns
 */
export declare function isValidReference<N extends IAnyStateTreeNode>(
    getter: () => N | null | undefined,
    checkIfAlive?: boolean
): boolean
/**
 * Try to resolve a given path relative to a given node.
 *
 * @param target
 * @param path
 * @returns
 */
export declare function tryResolve(target: IAnyStateTreeNode, path: string): any
/**
 * Given two state tree nodes that are part of the same tree,
 * returns the shortest jsonpath needed to navigate from the one to the other
 *
 * @param base
 * @param target
 * @returns
 */
export declare function getRelativePath(base: IAnyStateTreeNode, target: IAnyStateTreeNode): string
/**
 * Returns a deep copy of the given state tree node as new tree.
 * Short hand for `snapshot(x) = getType(x).create(getSnapshot(x))`
 *
 * _Tip: clone will create a literal copy, including the same identifiers. To modify identifiers etc during cloning, don't use clone but take a snapshot of the tree, modify it, and create new instance_
 *
 * @param source
 * @param keepEnvironment indicates whether the clone should inherit the same environment (`true`, the default), or not have an environment (`false`). If an object is passed in as second argument, that will act as the environment for the cloned tree.
 * @returns
 */
export declare function clone<T extends IAnyStateTreeNode>(
    source: T,
    keepEnvironment?: boolean | any
): T
/**
 * Removes a model element from the state tree, and let it live on as a new state tree
 */
export declare function detach<T extends IAnyStateTreeNode>(target: T): T
/**
 * Removes a model element from the state tree, and mark it as end-of-life; the element should not be used anymore
 */
export declare function destroy(target: IAnyStateTreeNode): void
/**
 * Returns true if the given state tree node is not killed yet.
 * This means that the node is still a part of a tree, and that `destroy`
 * has not been called. If a node is not alive anymore, the only thing one can do with it
 * is requesting it's last path and snapshot
 *
 * @param target
 * @returns
 */
export declare function isAlive(target: IAnyStateTreeNode): boolean
/**
 * Use this utility to register a function that should be called whenever the
 * targeted state tree node is destroyed. This is a useful alternative to managing
 * cleanup methods yourself using the `beforeDestroy` hook.
 *
 * This methods returns the same disposer that was passed as argument.
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   title: types.string
 * }).actions(self => ({
 *   afterCreate() {
 *     const autoSaveDisposer = reaction(
 *       () => getSnapshot(self),
 *       snapshot => sendSnapshotToServerSomehow(snapshot)
 *     )
 *     // stop sending updates to server if this
 *     // instance is destroyed
 *     addDisposer(self, autoSaveDisposer)
 *   }
 * }))
 * ```
 *
 * @param target
 * @param disposer
 * @returns The same disposer that was passed as argument
 */
export declare function addDisposer(target: IAnyStateTreeNode, disposer: IDisposer): IDisposer
/**
 * Returns the environment of the current state tree. For more info on environments,
 * see [Dependency injection](https://github.com/mobxjs/mobx-state-tree#dependency-injection)
 *
 * Please note that in child nodes access to the root is only possible
 * once the `afterAttach` hook has fired
 *
 * Returns an empty environment if the tree wasn't initialized with an environment
 *
 * @param target
 * @returns
 */
export declare function getEnv<T = any>(target: IAnyStateTreeNode): T
/**
 * Performs a depth first walk through a tree.
 */
export declare function walk(
    target: IAnyStateTreeNode,
    processor: (item: IAnyStateTreeNode) => void
): void
export interface IModelReflectionPropertiesData {
    name: string
    properties: {
        [K: string]: IAnyType
    }
}
/**
 * Returns a reflection of the model type properties and name for either a model type or model node.
 *
 * @param typeOrNode
 * @returns
 */
export declare function getPropertyMembers(
    typeOrNode: IAnyModelType | IAnyStateTreeNode
): IModelReflectionPropertiesData
export interface IModelReflectionData extends IModelReflectionPropertiesData {
    actions: string[]
    views: string[]
    volatile: string[]
}
/**
 * Returns a reflection of the model node, including name, properties, views, volatile and actions.
 *
 * @param target
 * @returns
 */
export declare function getMembers(target: IAnyStateTreeNode): IModelReflectionData
export declare function cast<O extends string | number | boolean | null | undefined = never>(
    snapshotOrInstance: O
): O
export declare function cast<O = never>(
    snapshotOrInstance:
        | TypeOfValue<O>["CreationType"]
        | TypeOfValue<O>["SnapshotType"]
        | TypeOfValue<O>["Type"]
): O
/**
 * Casts a node instance type to an snapshot type so it can be assigned to a type snapshot (e.g. to be used inside a create call).
 * Note that this is just a cast for the type system, this is, it won't actually convert an instance to a snapshot,
 * but just fool typescript into thinking so.
 *
 * Example:
 * ```ts
 * const ModelA = types.model({
 *   n: types.number
 * }).actions(self => ({
 *   setN(aNumber: number) {
 *     self.n = aNumber
 *   }
 * }))
 *
 * const ModelB = types.model({
 *   innerModel: ModelA
 * })
 *
 * const a = ModelA.create({ n: 5 });
 * // this will allow the compiler to use a model as if it were a snapshot
 * const b = ModelB.create({ innerModel: castToSnapshot(a)})
 * ```
 *
 * @param snapshotOrInstance Snapshot or instance
 * @returns The same object casted as an input (creation) snapshot
 */
export declare function castToSnapshot<I>(
    snapshotOrInstance: I
): Extract<I, IAnyStateTreeNode> extends never ? I : TypeOfValue<I>["CreationType"]
/**
 * Casts a node instance type to a reference snapshot type so it can be assigned to a refernence snapshot (e.g. to be used inside a create call).
 * Note that this is just a cast for the type system, this is, it won't actually convert an instance to a refererence snapshot,
 * but just fool typescript into thinking so.
 *
 * Example:
 * ```ts
 * const ModelA = types.model({
 *   id: types.identifier,
 *   n: types.number
 * }).actions(self => ({
 *   setN(aNumber: number) {
 *     self.n = aNumber
 *   }
 * }))
 *
 * const ModelB = types.model({
 *   refA: types.reference(ModelA)
 * })
 *
 * const a = ModelA.create({ id: 'someId', n: 5 });
 * // this will allow the compiler to use a model as if it were a reference snapshot
 * const b = ModelB.create({ refA: castToReferenceSnapshot(a)})
 * ```
 *
 * @param instance Instance
 * @returns The same object casted as an reference snapshot (string or number)
 */
export declare function castToReferenceSnapshot<I>(
    instance: I
): Extract<I, IAnyStateTreeNode> extends never ? I : ReferenceIdentifier
/**
 * Returns the unique node id (not to be confused with the instance identifier) for a
 * given instance.
 * This id is a number that is unique for each instance.
 *
 * @export
 * @param target
 * @returns
 */
export declare function getNodeId(target: IAnyStateTreeNode): number
