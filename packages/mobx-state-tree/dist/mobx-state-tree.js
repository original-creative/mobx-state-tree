"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

var mobx = require("mobx")

var livelinessChecking = "warn"
/**
 * Defines what MST should do when running into reads / writes to objects that have died.
 * By default it will print a warning.
 * Use the `"error"` option to easy debugging to see where the error was thrown and when the offending read / write took place
 *
 * @param mode `"warn"`, `"error"` or `"ignore"`
 */
function setLivelinessChecking(mode) {
    livelinessChecking = mode
}
/**
 * Returns the current liveliness checking mode.
 *
 * @returns `"warn"`, `"error"` or `"ignore"`
 */
function getLivelinessChecking() {
    return livelinessChecking
}
/**
 * @deprecated use setLivelinessChecking instead
 * @hidden
 *
 * Defines what MST should do when running into reads / writes to objects that have died.
 * By default it will print a warning.
 * Use the `"error"` option to easy debugging to see where the error was thrown and when the offending read / write took place
 *
 * @param mode `"warn"`, `"error"` or `"ignore"`
 */
function setLivelynessChecking(mode) {
    setLivelinessChecking(mode)
}

/**
 * @hidden
 */
var Hook
;(function (Hook) {
    Hook["afterCreate"] = "afterCreate"
    Hook["afterAttach"] = "afterAttach"
    Hook["afterCreationFinalization"] = "afterCreationFinalization"
    Hook["beforeDetach"] = "beforeDetach"
    Hook["beforeDestroy"] = "beforeDestroy"
})(Hook || (Hook = {}))

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
    extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
            function (d, b) {
                d.__proto__ = b
            }) ||
        function (d, b) {
            for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
        }
    return extendStatics(d, b)
}

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null")
    extendStatics(d, b)
    function __() {
        this.constructor = d
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
}

var __assign = function () {
    __assign =
        Object.assign ||
        function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i]
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
            }
            return t
        }
    return __assign.apply(this, arguments)
}

function __rest(s, e) {
    var t = {}
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
        }
    return t
}

function __generator(thisArg, body) {
    var _ = {
            label: 0,
            sent: function () {
                if (t[0] & 1) throw t[1]
                return t[1]
            },
            trys: [],
            ops: []
        },
        f,
        y,
        t,
        g
    return (
        (g = { next: verb(0), throw: verb(1), return: verb(2) }),
        typeof Symbol === "function" &&
            (g[Symbol.iterator] = function () {
                return this
            }),
        g
    )
    function verb(n) {
        return function (v) {
            return step([n, v])
        }
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.")
        while (_)
            try {
                if (
                    ((f = 1),
                    y &&
                        (t =
                            op[0] & 2
                                ? y["return"]
                                : op[0]
                                ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                                : y.next) &&
                        !(t = t.call(y, op[1])).done)
                )
                    return t
                if (((y = 0), t)) op = [op[0] & 2, t.value]
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op
                        break
                    case 4:
                        _.label++
                        return { value: op[1], done: false }
                    case 5:
                        _.label++
                        y = op[1]
                        op = [0]
                        continue
                    case 7:
                        op = _.ops.pop()
                        _.trys.pop()
                        continue
                    default:
                        if (
                            !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                            (op[0] === 6 || op[0] === 2)
                        ) {
                            _ = 0
                            continue
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1]
                            break
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1]
                            t = op
                            break
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2]
                            _.ops.push(op)
                            break
                        }
                        if (t[2]) _.ops.pop()
                        _.trys.pop()
                        continue
                }
                op = body.call(thisArg, _)
            } catch (e) {
                op = [6, e]
                y = 0
            } finally {
                f = t = 0
            }
        if (op[0] & 5) throw op[1]
        return { value: op[0] ? op[1] : void 0, done: true }
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0
    if (m) return m.call(o)
    if (o && typeof o.length === "number")
        return {
            next: function () {
                if (o && i >= o.length) o = void 0
                return { value: o && o[i++], done: !o }
            }
        }
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator]
    if (!m) return o
    var i = m.call(o),
        r,
        ar = [],
        e
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) {
        e = { error: error }
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i)
        } finally {
            if (e) throw e.error
        }
    }
    return ar
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]))
    return ar
}

/**
 * Returns the _actual_ type of the given tree node. (Or throws)
 *
 * @param object
 * @returns
 */
function getType(object) {
    return getStateTreeNode(object).type
}
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
function getChildType(object, propertyName) {
    return getStateTreeNode(object).getChildType(propertyName)
}
/**
 * Registers a function that will be invoked for each mutation that is applied to the provided model instance, or to any of its children.
 * See [patches](https://github.com/mobxjs/mobx-state-tree#patches) for more details. onPatch events are emitted immediately and will not await the end of a transaction.
 * Patches can be used to deep observe a model tree.
 *
 * @param target the model instance from which to receive patches
 * @param callback the callback that is invoked for each patch. The reversePatch is a patch that would actually undo the emitted patch
 * @returns function to remove the listener
 */
function onPatch(target, callback) {
    return getStateTreeNode(target).onPatch(callback)
}
/**
 * Registers a function that is invoked whenever a new snapshot for the given model instance is available.
 * The listener will only be fire at the end of the current MobX (trans)action.
 * See [snapshots](https://github.com/mobxjs/mobx-state-tree#snapshots) for more details.
 *
 * @param target
 * @param callback
 * @returns
 */
function onSnapshot(target, callback) {
    return getStateTreeNode(target).onSnapshot(callback)
}
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
function applyPatch(target, patch) {
    getStateTreeNode(target).applyPatches(asArray(patch))
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
function recordPatches(subject, filter) {
    var data = {
        patches: [],
        reversedInversePatches: []
    }
    // we will generate the immutable copy of patches on demand for public consumption
    var publicData = {}
    var disposer
    var recorder = {
        get recording() {
            return !!disposer
        },
        get patches() {
            if (!publicData.patches) {
                publicData.patches = data.patches.slice()
            }
            return publicData.patches
        },
        get reversedInversePatches() {
            if (!publicData.reversedInversePatches) {
                publicData.reversedInversePatches = data.reversedInversePatches.slice()
            }
            return publicData.reversedInversePatches
        },
        get inversePatches() {
            if (!publicData.inversePatches) {
                publicData.inversePatches = data.reversedInversePatches.slice().reverse()
            }
            return publicData.inversePatches
        },
        stop: function () {
            if (disposer) {
                disposer()
                disposer = undefined
            }
        },
        resume: function () {
            if (disposer) return
            disposer = onPatch(subject, function (patch, inversePatch) {
                // skip patches that are asked to be filtered if there's a filter in place
                if (filter && !filter(patch, inversePatch, getRunningActionContext())) {
                    return
                }
                data.patches.push(patch)
                data.reversedInversePatches.unshift(inversePatch)
                // mark immutable public patches as dirty
                publicData.patches = undefined
                publicData.inversePatches = undefined
                publicData.reversedInversePatches = undefined
            })
        },
        replay: function (target) {
            applyPatch(target || subject, data.patches)
        },
        undo: function (target) {
            applyPatch(target || subject, data.reversedInversePatches)
        }
    }
    recorder.resume()
    return recorder
}
/**
 * The inverse of `unprotect`.
 *
 * @param target
 */
function protect(target) {
    var node = getStateTreeNode(target)
    if (!node.isRoot) throw fail("`protect` can only be invoked on root nodes")
    node.isProtectionEnabled = true
}
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
function unprotect(target) {
    var node = getStateTreeNode(target)
    if (!node.isRoot) throw fail("`unprotect` can only be invoked on root nodes")
    node.isProtectionEnabled = false
}
/**
 * Returns true if the object is in protected mode, @see protect
 */
function isProtected(target) {
    return getStateTreeNode(target).isProtected
}
/**
 * Applies a snapshot to a given model instances. Patch and snapshot listeners will be invoked as usual.
 *
 * @param target
 * @param snapshot
 * @returns
 */
function applySnapshot(target, snapshot) {
    return getStateTreeNode(target).applySnapshot(snapshot)
}
/**
 * Calculates a snapshot from the given model instance. The snapshot will always reflect the latest state but use
 * structural sharing where possible. Doesn't require MobX transactions to be completed.
 *
 * @param target
 * @param applyPostProcess If true (the default) then postProcessSnapshot gets applied.
 * @returns
 */
function getSnapshot(target, applyPostProcess) {
    if (applyPostProcess === void 0) {
        applyPostProcess = true
    }
    var node = getStateTreeNode(target)
    if (applyPostProcess) return node.snapshot
    return freeze(node.type.getSnapshot(node, false))
}
/**
 * Given a model instance, returns `true` if the object has a parent, that is, is part of another object, map or array.
 *
 * @param target
 * @param depth How far should we look upward? 1 by default.
 * @returns
 */
function hasParent(target, depth) {
    if (depth === void 0) {
        depth = 1
    }
    var parent = getStateTreeNode(target).parent
    while (parent) {
        if (--depth === 0) return true
        parent = parent.parent
    }
    return false
}
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
function getParent(target, depth) {
    if (depth === void 0) {
        depth = 1
    }
    var d = depth
    var parent = getStateTreeNode(target).parent
    while (parent) {
        if (--d === 0) return parent.storedValue
        parent = parent.parent
    }
    throw fail("Failed to find the parent of " + getStateTreeNode(target) + " at depth " + depth)
}
/**
 * Given a model instance, returns `true` if the object has a parent of given type, that is, is part of another object, map or array
 *
 * @param target
 * @param type
 * @returns
 */
function hasParentOfType(target, type) {
    var parent = getStateTreeNode(target).parent
    while (parent) {
        if (type.is(parent.storedValue)) return true
        parent = parent.parent
    }
    return false
}
/**
 * Returns the target's parent of a given type, or throws.
 *
 * @param target
 * @param type
 * @returns
 */
function getParentOfType(target, type) {
    var parent = getStateTreeNode(target).parent
    while (parent) {
        if (type.is(parent.storedValue)) return parent.storedValue
        parent = parent.parent
    }
    throw fail("Failed to find the parent of " + getStateTreeNode(target) + " of a given type")
}
/**
 * Given an object in a model tree, returns the root object of that tree.
 *
 * Please note that in child nodes access to the root is only possible
 * once the `afterAttach` hook has fired.
 *
 * @param target
 * @returns
 */
function getRoot(target) {
    return getStateTreeNode(target).root.storedValue
}
/**
 * Returns the path of the given object in the model tree
 *
 * @param target
 * @returns
 */
function getPath(target) {
    return getStateTreeNode(target).path
}
/**
 * Returns the path of the given object as unescaped string array.
 *
 * @param target
 * @returns
 */
function getPathParts(target) {
    return splitJsonPath(getStateTreeNode(target).path)
}
/**
 * Returns true if the given object is the root of a model tree.
 *
 * @param target
 * @returns
 */
function isRoot(target) {
    return getStateTreeNode(target).isRoot
}
/**
 * Resolves a path relatively to a given object.
 * Returns undefined if no value can be found.
 *
 * @param target
 * @param path escaped json path
 * @returns
 */
function resolvePath(target, path) {
    var node = resolveNodeByPath(getStateTreeNode(target), path)
    return node ? node.value : undefined
}
/**
 * Resolves a model instance given a root target, the type and the identifier you are searching for.
 * Returns undefined if no value can be found.
 *
 * @param type
 * @param target
 * @param identifier
 * @returns
 */
function resolveIdentifier(type, target, identifier) {
    var node = getStateTreeNode(target).root.identifierCache.resolve(
        type,
        normalizeIdentifier(identifier)
    )
    return node ? node.value : undefined
}
/**
 * Returns the identifier of the target node.
 * This is the *string normalized* identifier, which might not match the type of the identifier attribute
 *
 * @param target
 * @returns
 */
function getIdentifier(target) {
    return getStateTreeNode(target).identifier
}
/**
 * Tests if a reference is valid (pointing to an existing node and optionally if alive) and returns such reference if it the check passes,
 * else it returns undefined.
 *
 * @param getter Function to access the reference.
 * @param checkIfAlive true to also make sure the referenced node is alive (default), false to skip this check.
 * @returns
 */
function tryReference(getter, checkIfAlive) {
    if (checkIfAlive === void 0) {
        checkIfAlive = true
    }
    try {
        var node = getter()
        if (node === undefined || node === null) {
            return undefined
        } else if (isStateTreeNode(node)) {
            if (!checkIfAlive) {
                return node
            } else {
                return isAlive(node) ? node : undefined
            }
        } else {
            throw fail("The reference to be checked is not one of node, null or undefined")
        }
    } catch (e) {
        if (e instanceof InvalidReferenceError) {
            return undefined
        }
        throw e
    }
}
/**
 * Tests if a reference is valid (pointing to an existing node and optionally if alive) and returns if the check passes or not.
 *
 * @param getter Function to access the reference.
 * @param checkIfAlive true to also make sure the referenced node is alive (default), false to skip this check.
 * @returns
 */
function isValidReference(getter, checkIfAlive) {
    if (checkIfAlive === void 0) {
        checkIfAlive = true
    }
    try {
        var node = getter()
        if (node === undefined || node === null) {
            return false
        } else if (isStateTreeNode(node)) {
            return checkIfAlive ? isAlive(node) : true
        } else {
            throw fail("The reference to be checked is not one of node, null or undefined")
        }
    } catch (e) {
        if (e instanceof InvalidReferenceError) {
            return false
        }
        throw e
    }
}
/**
 * Try to resolve a given path relative to a given node.
 *
 * @param target
 * @param path
 * @returns
 */
function tryResolve(target, path) {
    var node = resolveNodeByPath(getStateTreeNode(target), path, false)
    if (node === undefined) return undefined
    try {
        return node.value
    } catch (e) {
        // For what ever reason not resolvable (e.g. totally not existing path, or value that cannot be fetched)
        // see test / issue: 'try resolve doesn't work #686'
        return undefined
    }
}
/**
 * Given two state tree nodes that are part of the same tree,
 * returns the shortest jsonpath needed to navigate from the one to the other
 *
 * @param base
 * @param target
 * @returns
 */
function getRelativePath(base, target) {
    return getRelativePathBetweenNodes(getStateTreeNode(base), getStateTreeNode(target))
}
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
function clone(source, keepEnvironment) {
    if (keepEnvironment === void 0) {
        keepEnvironment = true
    }
    var node = getStateTreeNode(source)
    return node.type.create(
        node.snapshot,
        keepEnvironment === true
            ? node.root.environment
            : keepEnvironment === false
            ? undefined
            : keepEnvironment
    ) // it's an object or something else
}
/**
 * Removes a model element from the state tree, and let it live on as a new state tree
 */
function detach(target) {
    getStateTreeNode(target).detach()
    return target
}
/**
 * Removes a model element from the state tree, and mark it as end-of-life; the element should not be used anymore
 */
function destroy(target) {
    var node = getStateTreeNode(target)
    if (node.isRoot) node.die()
    else node.parent.removeChild(node.subpath)
}
/**
 * Returns true if the given state tree node is not killed yet.
 * This means that the node is still a part of a tree, and that `destroy`
 * has not been called. If a node is not alive anymore, the only thing one can do with it
 * is requesting it's last path and snapshot
 *
 * @param target
 * @returns
 */
function isAlive(target) {
    return getStateTreeNode(target).observableIsAlive
}
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
function addDisposer(target, disposer) {
    var node = getStateTreeNode(target)
    node.addDisposer(disposer)
    return disposer
}
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
function getEnv(target) {
    var node = getStateTreeNode(target)
    var env = node.root.environment
    if (!env) return EMPTY_OBJECT
    return env
}
/**
 * Performs a depth first walk through a tree.
 */
function walk(target, processor) {
    var node = getStateTreeNode(target)
    // tslint:disable-next-line:no_unused-variable
    node.getChildren().forEach(function (child) {
        if (isStateTreeNode(child.storedValue)) walk(child.storedValue, processor)
    })
    processor(node.storedValue)
}
/**
 * Returns a reflection of the model type properties and name for either a model type or model node.
 *
 * @param typeOrNode
 * @returns
 */
function getPropertyMembers(typeOrNode) {
    var type
    if (isStateTreeNode(typeOrNode)) {
        type = getType(typeOrNode)
    } else {
        type = typeOrNode
    }
    return {
        name: type.name,
        properties: __assign({}, type.properties)
    }
}
/**
 * Returns a reflection of the model node, including name, properties, views, volatile and actions.
 *
 * @param target
 * @returns
 */
function getMembers(target) {
    var type = getStateTreeNode(target).type
    var reflected = __assign(__assign({}, getPropertyMembers(type)), {
        actions: [],
        volatile: [],
        views: []
    })
    var props = Object.getOwnPropertyNames(target)
    props.forEach(function (key) {
        if (key in reflected.properties) return
        var descriptor = Object.getOwnPropertyDescriptor(target, key)
        if (descriptor.get) {
            if (mobx.isComputedProp(target, key)) reflected.views.push(key)
            else reflected.volatile.push(key)
            return
        }
        if (descriptor.value._isMSTAction === true) reflected.actions.push(key)
        else if (mobx.isObservableProp(target, key)) reflected.volatile.push(key)
        else reflected.views.push(key)
    })
    return reflected
}
/**
 * Casts a node snapshot or instance type to an instance type so it can be assigned to a type instance.
 * Note that this is just a cast for the type system, this is, it won't actually convert a snapshot to an instance,
 * but just fool typescript into thinking so.
 * Either way, casting when outside an assignation operation won't compile.
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
 * }).actions(self => ({
 *   someAction() {
 *     // this will allow the compiler to assign a snapshot to the property
 *     self.innerModel = cast({ a: 5 })
 *   }
 * }))
 * ```
 *
 * @param snapshotOrInstance Snapshot or instance
 * @returns The same object casted as an instance
 */
function cast(snapshotOrInstance) {
    return snapshotOrInstance
}
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
function castToSnapshot(snapshotOrInstance) {
    return snapshotOrInstance
}
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
function castToReferenceSnapshot(instance) {
    return instance
}
/**
 * Returns the unique node id (not to be confused with the instance identifier) for a
 * given instance.
 * This id is a number that is unique for each instance.
 *
 * @export
 * @param target
 * @returns
 */
function getNodeId(target) {
    return getStateTreeNode(target).nodeId
}

/**
 * @internal
 * @hidden
 */
var BaseNode = /** @class */ (function () {
    function BaseNode(type, parent, subpath, environment) {
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: type
        })
        Object.defineProperty(this, "environment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: environment
        })
        Object.defineProperty(this, "_escapedSubpath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(this, "_subpath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(this, "_subpathUponDeath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(this, "_pathUponDeath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(this, "storedValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        }) // usually the same type as the value, but not always (such as with references)
        Object.defineProperty(this, "aliveAtom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(this, "_state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: NodeLifeCycle.INITIALIZING
        })
        Object.defineProperty(this, "_hookSubscribers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(this, "_parent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(this, "pathAtom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        this.environment = environment
        this.baseSetParent(parent, subpath)
    }
    Object.defineProperty(BaseNode.prototype, "subpath", {
        get: function () {
            return this._subpath
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseNode.prototype, "subpathUponDeath", {
        get: function () {
            return this._subpathUponDeath
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseNode.prototype, "pathUponDeath", {
        get: function () {
            return this._pathUponDeath
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseNode.prototype, "value", {
        get: function () {
            return this.type.getValue(this)
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseNode.prototype, "state", {
        get: function () {
            return this._state
        },
        set: function (val) {
            var wasAlive = this.isAlive
            this._state = val
            var isAlive = this.isAlive
            if (this.aliveAtom && wasAlive !== isAlive) {
                this.aliveAtom.reportChanged()
            }
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseNode.prototype, "fireInternalHook", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (name) {
            if (this._hookSubscribers) {
                this._hookSubscribers.emit(name, this, name)
            }
        }
    })
    Object.defineProperty(BaseNode.prototype, "registerHook", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (hook, hookHandler) {
            if (!this._hookSubscribers) {
                this._hookSubscribers = new EventHandlers()
            }
            return this._hookSubscribers.register(hook, hookHandler)
        }
    })
    Object.defineProperty(BaseNode.prototype, "parent", {
        get: function () {
            return this._parent
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseNode.prototype, "getReconciliationType", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.type
        }
    })
    Object.defineProperty(BaseNode.prototype, "baseSetParent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath) {
            this._parent = parent
            this._subpath = subpath
            this._escapedSubpath = undefined // regenerate when needed
            if (this.pathAtom) {
                this.pathAtom.reportChanged()
            }
        }
    })
    Object.defineProperty(BaseNode.prototype, "path", {
        /*
         * Returns (escaped) path representation as string
         */
        get: function () {
            return this.getEscapedPath(true)
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseNode.prototype, "getEscapedPath", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (reportObserved) {
            if (reportObserved) {
                if (!this.pathAtom) {
                    this.pathAtom = mobx.createAtom("path")
                }
                this.pathAtom.reportObserved()
            }
            if (!this.parent) return ""
            // regenerate escaped subpath if needed
            if (this._escapedSubpath === undefined) {
                this._escapedSubpath = !this._subpath ? "" : escapeJsonPath(this._subpath)
            }
            return this.parent.getEscapedPath(reportObserved) + "/" + this._escapedSubpath
        }
    })
    Object.defineProperty(BaseNode.prototype, "isRoot", {
        get: function () {
            return this.parent === null
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseNode.prototype, "isAlive", {
        get: function () {
            return this.state !== NodeLifeCycle.DEAD
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseNode.prototype, "isDetaching", {
        get: function () {
            return this.state === NodeLifeCycle.DETACHING
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseNode.prototype, "observableIsAlive", {
        get: function () {
            if (!this.aliveAtom) {
                this.aliveAtom = mobx.createAtom("alive")
            }
            this.aliveAtom.reportObserved()
            return this.isAlive
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseNode.prototype, "baseFinalizeCreation", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (whenFinalized) {
            // goal: afterCreate hooks runs depth-first. After attach runs parent first, so on afterAttach the parent has completed already
            if (this.state === NodeLifeCycle.CREATED) {
                if (this.parent) {
                    if (this.parent.state !== NodeLifeCycle.FINALIZED) {
                        // parent not ready yet, postpone
                        return
                    }
                    this.fireHook(Hook.afterAttach)
                }
                this.state = NodeLifeCycle.FINALIZED
                if (whenFinalized) {
                    whenFinalized()
                }
            }
        }
    })
    Object.defineProperty(BaseNode.prototype, "baseFinalizeDeath", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (this._hookSubscribers) {
                this._hookSubscribers.clearAll()
            }
            this._subpathUponDeath = this._subpath
            this._pathUponDeath = this.getEscapedPath(false)
            this.baseSetParent(null, "")
            this.state = NodeLifeCycle.DEAD
        }
    })
    Object.defineProperty(BaseNode.prototype, "baseAboutToDie", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.fireHook(Hook.beforeDestroy)
        }
    })
    return BaseNode
})()

/**
 * @internal
 * @hidden
 */
var ScalarNode = /** @class */ (function (_super) {
    __extends(ScalarNode, _super)
    function ScalarNode(simpleType, parent, subpath, environment, initialSnapshot) {
        var _this = _super.call(this, simpleType, parent, subpath, environment) || this
        try {
            _this.storedValue = simpleType.createNewInstance(initialSnapshot)
        } catch (e) {
            // short-cut to die the instance, to avoid the snapshot computed starting to throw...
            _this.state = NodeLifeCycle.DEAD
            throw e
        }
        _this.state = NodeLifeCycle.CREATED
        // for scalar nodes there's no point in firing this event since it would fire on the constructor, before
        // anybody can actually register for/listen to it
        // this.fireHook(Hook.AfterCreate)
        _this.finalizeCreation()
        return _this
    }
    Object.defineProperty(ScalarNode.prototype, "root", {
        get: function () {
            // future optimization: store root ref in the node and maintain it
            if (!this.parent) throw fail("This scalar node is not part of a tree")
            return this.parent.root
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(ScalarNode.prototype, "setParent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (newParent, subpath) {
            var parentChanged = this.parent !== newParent
            var subpathChanged = this.subpath !== subpath
            if (!parentChanged && !subpathChanged) {
                return
            }
            this.environment = undefined // use parent's
            this.baseSetParent(this.parent, subpath)
        }
    })
    Object.defineProperty(ScalarNode.prototype, "snapshot", {
        get: function () {
            return freeze(this.getSnapshot())
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(ScalarNode.prototype, "getSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.type.getSnapshot(this)
        }
    })
    Object.defineProperty(ScalarNode.prototype, "toString", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var path = (this.isAlive ? this.path : this.pathUponDeath) || "<root>"
            return this.type.name + "@" + path + (this.isAlive ? "" : " [dead]")
        }
    })
    Object.defineProperty(ScalarNode.prototype, "die", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (!this.isAlive || this.state === NodeLifeCycle.DETACHING) return
            this.aboutToDie()
            this.finalizeDeath()
        }
    })
    Object.defineProperty(ScalarNode.prototype, "finalizeCreation", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.baseFinalizeCreation()
        }
    })
    Object.defineProperty(ScalarNode.prototype, "aboutToDie", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.baseAboutToDie()
        }
    })
    Object.defineProperty(ScalarNode.prototype, "finalizeDeath", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.baseFinalizeDeath()
        }
    })
    Object.defineProperty(ScalarNode.prototype, "fireHook", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (name) {
            this.fireInternalHook(name)
        }
    })
    return ScalarNode
})(BaseNode)
ScalarNode.prototype.die = mobx.action(ScalarNode.prototype.die)

var nextNodeId = 1
var snapshotReactionOptions = {
    onError: function (e) {
        throw e
    }
}
/**
 * @internal
 * @hidden
 */
var ObjectNode = /** @class */ (function (_super) {
    __extends(ObjectNode, _super)
    function ObjectNode(complexType, parent, subpath, environment, initialValue) {
        var _this = _super.call(this, complexType, parent, subpath, environment) || this
        Object.defineProperty(_this, "nodeId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ++nextNodeId
        })
        Object.defineProperty(_this, "identifierAttribute", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "identifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        }) // Identifier is always normalized to string, even if the identifier property isn't
        Object.defineProperty(_this, "unnormalizedIdentifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "identifierCache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "isProtectionEnabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        })
        Object.defineProperty(_this, "middlewares", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "_applyPatches", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "_applySnapshot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "_autoUnbox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        }) // unboxing is disabled when reading child nodes
        Object.defineProperty(_this, "_isRunningAction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        }) // only relevant for root
        Object.defineProperty(_this, "_hasSnapshotReaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        })
        Object.defineProperty(_this, "_observableInstanceState", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0 /* UNINITIALIZED */
        })
        Object.defineProperty(_this, "_childNodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "_initialSnapshot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "_cachedInitialSnapshot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "_cachedInitialSnapshotCreated", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        })
        Object.defineProperty(_this, "_snapshotComputed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "_snapshotUponDeath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        // #region internal event handling
        Object.defineProperty(_this, "_internalEvents", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        _this._snapshotComputed = mobx.computed(function () {
            return freeze(_this.getSnapshot())
        })
        _this.unbox = _this.unbox.bind(_this)
        _this._initialSnapshot = freeze(initialValue)
        _this.identifierAttribute = complexType.identifierAttribute
        if (!parent) {
            _this.identifierCache = new IdentifierCache()
        }
        _this._childNodes = complexType.initializeChildNodes(_this, _this._initialSnapshot)
        // identifier can not be changed during lifecycle of a node
        // so we safely can read it from initial snapshot
        _this.identifier = null
        _this.unnormalizedIdentifier = null
        if (_this.identifierAttribute && _this._initialSnapshot) {
            var id = _this._initialSnapshot[_this.identifierAttribute]
            if (id === undefined) {
                // try with the actual node if not (for optional identifiers)
                var childNode = _this._childNodes[_this.identifierAttribute]
                if (childNode) {
                    id = childNode.value
                }
            }
            if (typeof id !== "string" && typeof id !== "number") {
                throw fail(
                    "Instance identifier '" +
                        _this.identifierAttribute +
                        "' for type '" +
                        _this.type.name +
                        "' must be a string or a number"
                )
            }
            // normalize internal identifier to string
            _this.identifier = normalizeIdentifier(id)
            _this.unnormalizedIdentifier = id
        }
        if (!parent) {
            _this.identifierCache.addNodeToCache(_this)
        } else {
            parent.root.identifierCache.addNodeToCache(_this)
        }
        return _this
    }
    Object.defineProperty(ObjectNode.prototype, "applyPatches", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (patches) {
            this.createObservableInstanceIfNeeded()
            this._applyPatches(patches)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "applySnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (snapshot) {
            this.createObservableInstanceIfNeeded()
            this._applySnapshot(snapshot)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "createObservableInstanceIfNeeded", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (this._observableInstanceState === 0 /* UNINITIALIZED */) {
                this.createObservableInstance()
            }
        }
    })
    Object.defineProperty(ObjectNode.prototype, "createObservableInstance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var e_1, _a
            this._observableInstanceState = 1 /* CREATING */
            // make sure the parent chain is created as well
            // array with parent chain from parent to child
            var parentChain = []
            var parent = this.parent
            // for performance reasons we never go back further than the most direct
            // uninitialized parent
            // this is done to avoid traversing the whole tree to the root when using
            // the same reference again
            while (parent && parent._observableInstanceState === 0 /* UNINITIALIZED */) {
                parentChain.unshift(parent)
                parent = parent.parent
            }
            try {
                // initialize the uninitialized parent chain from parent to child
                for (
                    var parentChain_1 = __values(parentChain),
                        parentChain_1_1 = parentChain_1.next();
                    !parentChain_1_1.done;
                    parentChain_1_1 = parentChain_1.next()
                ) {
                    var p = parentChain_1_1.value
                    p.createObservableInstanceIfNeeded()
                }
            } catch (e_1_1) {
                e_1 = { error: e_1_1 }
            } finally {
                try {
                    if (parentChain_1_1 && !parentChain_1_1.done && (_a = parentChain_1.return))
                        _a.call(parentChain_1)
                } finally {
                    if (e_1) throw e_1.error
                }
            }
            var type = this.type
            try {
                this.storedValue = type.createNewInstance(this._childNodes)
                this.preboot()
                this._isRunningAction = true
                type.finalizeNewInstance(this, this.storedValue)
            } catch (e) {
                // short-cut to die the instance, to avoid the snapshot computed starting to throw...
                this.state = NodeLifeCycle.DEAD
                throw e
            } finally {
                this._isRunningAction = false
            }
            this._observableInstanceState = 2 /* CREATED */
            this._snapshotComputed.trackAndCompute()
            if (this.isRoot) this._addSnapshotReaction()
            this._childNodes = EMPTY_OBJECT
            this.state = NodeLifeCycle.CREATED
            this.fireHook(Hook.afterCreate)
            this.finalizeCreation()
        }
    })
    Object.defineProperty(ObjectNode.prototype, "root", {
        get: function () {
            var parent = this.parent
            return parent ? parent.root : this
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(ObjectNode.prototype, "clearParent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (!this.parent) return
            // detach if attached
            this.fireHook(Hook.beforeDetach)
            var previousState = this.state
            this.state = NodeLifeCycle.DETACHING
            var root = this.root
            var newEnv = root.environment
            var newIdCache = root.identifierCache.splitCache(this)
            try {
                this.parent.removeChild(this.subpath)
                this.baseSetParent(null, "")
                this.environment = newEnv
                this.identifierCache = newIdCache
            } finally {
                this.state = previousState
            }
        }
    })
    Object.defineProperty(ObjectNode.prototype, "setParent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (newParent, subpath) {
            var parentChanged = newParent !== this.parent
            var subpathChanged = subpath !== this.subpath
            if (!parentChanged && !subpathChanged) {
                return
            }
            if (parentChanged) {
                // attach to new parent
                this.environment = undefined // will use root's
                newParent.root.identifierCache.mergeCache(this)
                this.baseSetParent(newParent, subpath)
                this.fireHook(Hook.afterAttach)
            } else if (subpathChanged) {
                // moving to a new subpath on the same parent
                this.baseSetParent(this.parent, subpath)
            }
        }
    })
    Object.defineProperty(ObjectNode.prototype, "fireHook", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (name) {
            var _this = this
            this.fireInternalHook(name)
            var fn =
                this.storedValue && typeof this.storedValue === "object" && this.storedValue[name]
            if (typeof fn === "function") {
                // we check for it to allow old mobx peer dependencies that don't have the method to work (even when still bugged)
                if (mobx._allowStateChangesInsideComputed) {
                    mobx._allowStateChangesInsideComputed(function () {
                        fn.apply(_this.storedValue)
                    })
                } else {
                    fn.apply(this.storedValue)
                }
            }
        }
    })
    Object.defineProperty(ObjectNode.prototype, "snapshot", {
        // advantage of using computed for a snapshot is that nicely respects transactions etc.
        get: function () {
            return this._snapshotComputed.get()
        },
        enumerable: false,
        configurable: true
    })
    // NOTE: we use this method to get snapshot without creating @computed overhead
    Object.defineProperty(ObjectNode.prototype, "getSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (!this.isAlive) return this._snapshotUponDeath
            return this._observableInstanceState === 2 /* CREATED */
                ? this._getActualSnapshot()
                : this._getCachedInitialSnapshot()
        }
    })
    Object.defineProperty(ObjectNode.prototype, "_getActualSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.type.getSnapshot(this)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "_getCachedInitialSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (!this._cachedInitialSnapshotCreated) {
                var type = this.type
                var childNodes = this._childNodes
                var snapshot = this._initialSnapshot
                this._cachedInitialSnapshot = type.processInitialSnapshot(childNodes, snapshot)
                this._cachedInitialSnapshotCreated = true
            }
            return this._cachedInitialSnapshot
        }
    })
    Object.defineProperty(ObjectNode.prototype, "isRunningAction", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (this._isRunningAction) return true
            if (this.isRoot) return false
            return this.parent.isRunningAction()
        }
    })
    Object.defineProperty(ObjectNode.prototype, "assertAlive", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (context) {
            var livelinessChecking = getLivelinessChecking()
            if (!this.isAlive && livelinessChecking !== "ignore") {
                var error = this._getAssertAliveError(context)
                switch (livelinessChecking) {
                    case "error":
                        throw fail(error)
                    case "warn":
                        warnError(error)
                }
            }
        }
    })
    Object.defineProperty(ObjectNode.prototype, "_getAssertAliveError", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (context) {
            var escapedPath = this.getEscapedPath(false) || this.pathUponDeath || ""
            var subpath = (context.subpath && escapeJsonPath(context.subpath)) || ""
            var actionContext = context.actionContext || getCurrentActionContext()
            // try to use a real action context if possible since it includes the action name
            if (
                actionContext &&
                actionContext.type !== "action" &&
                actionContext.parentActionEvent
            ) {
                actionContext = actionContext.parentActionEvent
            }
            var actionFullPath = ""
            if (actionContext && actionContext.name != null) {
                // try to use the context, and if it not available use the node one
                var actionPath =
                    (actionContext && actionContext.context && getPath(actionContext.context)) ||
                    escapedPath
                actionFullPath = actionPath + "." + actionContext.name + "()"
            }
            return (
                "You are trying to read or write to an object that is no longer part of a state tree. (Object type: '" +
                this.type.name +
                "', Path upon death: '" +
                escapedPath +
                "', Subpath: '" +
                subpath +
                "', Action: '" +
                actionFullPath +
                "'). Either detach nodes first, or don't use objects after removing / replacing them in the tree."
            )
        }
    })
    Object.defineProperty(ObjectNode.prototype, "getChildNode", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (subpath) {
            this.assertAlive({
                subpath: subpath
            })
            this._autoUnbox = false
            try {
                return this._observableInstanceState === 2 /* CREATED */
                    ? this.type.getChildNode(this, subpath)
                    : this._childNodes[subpath]
            } finally {
                this._autoUnbox = true
            }
        }
    })
    Object.defineProperty(ObjectNode.prototype, "getChildren", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.assertAlive(EMPTY_OBJECT)
            this._autoUnbox = false
            try {
                return this._observableInstanceState === 2 /* CREATED */
                    ? this.type.getChildren(this)
                    : convertChildNodesToArray(this._childNodes)
            } finally {
                this._autoUnbox = true
            }
        }
    })
    Object.defineProperty(ObjectNode.prototype, "getChildType", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (propertyName) {
            return this.type.getChildType(propertyName)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "isProtected", {
        get: function () {
            return this.root.isProtectionEnabled
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(ObjectNode.prototype, "assertWritable", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (context) {
            this.assertAlive(context)
            if (!this.isRunningAction() && this.isProtected) {
                throw fail(
                    "Cannot modify '" +
                        this +
                        "', the object is protected and can only be modified by using an action."
                )
            }
        }
    })
    Object.defineProperty(ObjectNode.prototype, "removeChild", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (subpath) {
            this.type.removeChild(this, subpath)
        }
    })
    // bound on the constructor
    Object.defineProperty(ObjectNode.prototype, "unbox", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (childNode) {
            if (!childNode) return childNode
            this.assertAlive({
                subpath: childNode.subpath || childNode.subpathUponDeath
            })
            return this._autoUnbox ? childNode.value : childNode
        }
    })
    Object.defineProperty(ObjectNode.prototype, "toString", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var path = (this.isAlive ? this.path : this.pathUponDeath) || "<root>"
            var identifier = this.identifier ? "(id: " + this.identifier + ")" : ""
            return this.type.name + "@" + path + identifier + (this.isAlive ? "" : " [dead]")
        }
    })
    Object.defineProperty(ObjectNode.prototype, "finalizeCreation", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _this = this
            this.baseFinalizeCreation(function () {
                var e_2, _a
                try {
                    for (
                        var _b = __values(_this.getChildren()), _c = _b.next();
                        !_c.done;
                        _c = _b.next()
                    ) {
                        var child = _c.value
                        child.finalizeCreation()
                    }
                } catch (e_2_1) {
                    e_2 = { error: e_2_1 }
                } finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b)
                    } finally {
                        if (e_2) throw e_2.error
                    }
                }
                _this.fireInternalHook(Hook.afterCreationFinalization)
            })
        }
    })
    Object.defineProperty(ObjectNode.prototype, "detach", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (!this.isAlive) throw fail("Error while detaching, node is not alive.")
            this.clearParent()
        }
    })
    Object.defineProperty(ObjectNode.prototype, "preboot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var self = this
            this._applyPatches = createActionInvoker(
                this.storedValue,
                "@APPLY_PATCHES",
                function (patches) {
                    patches.forEach(function (patch) {
                        if (!patch.path) {
                            self.type.applySnapshot(self, patch.value)
                            return
                        }
                        var parts = splitJsonPath(patch.path)
                        var node = resolveNodeByPathParts(self, parts.slice(0, -1))
                        node.applyPatchLocally(parts[parts.length - 1], patch)
                    })
                }
            )
            this._applySnapshot = createActionInvoker(
                this.storedValue,
                "@APPLY_SNAPSHOT",
                function (snapshot) {
                    // if the snapshot is the same as the current one, avoid performing a reconcile
                    if (snapshot === self.snapshot) return
                    // else, apply it by calling the type logic
                    return self.type.applySnapshot(self, snapshot)
                }
            )
            addHiddenFinalProp(this.storedValue, "$treenode", this)
            addHiddenFinalProp(this.storedValue, "toJSON", toJSON)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "die", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (!this.isAlive || this.state === NodeLifeCycle.DETACHING) return
            this.aboutToDie()
            this.finalizeDeath()
        }
    })
    Object.defineProperty(ObjectNode.prototype, "aboutToDie", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (this._observableInstanceState === 0 /* UNINITIALIZED */) {
                return
            }
            this.getChildren().forEach(function (node) {
                node.aboutToDie()
            })
            // beforeDestroy should run before the disposers since else we could end up in a situation where
            // a disposer added with addDisposer at this stage (beforeDestroy) is actually never released
            this.baseAboutToDie()
            this._internalEventsEmit("dispose" /* Dispose */)
            this._internalEventsClear("dispose" /* Dispose */)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "finalizeDeath", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            // invariant: not called directly but from "die"
            this.getChildren().forEach(function (node) {
                node.finalizeDeath()
            })
            this.root.identifierCache.notifyDied(this)
            // "kill" the computed prop and just store the last snapshot
            var snapshot = this.snapshot
            this._snapshotUponDeath = snapshot
            this._internalEventsClearAll()
            this.baseFinalizeDeath()
        }
    })
    Object.defineProperty(ObjectNode.prototype, "onSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (onChange) {
            this._addSnapshotReaction()
            return this._internalEventsRegister("snapshot" /* Snapshot */, onChange)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "emitSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (snapshot) {
            this._internalEventsEmit("snapshot" /* Snapshot */, snapshot)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "onPatch", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (handler) {
            return this._internalEventsRegister("patch" /* Patch */, handler)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "emitPatch", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (basePatch, source) {
            if (this._internalEventsHasSubscribers("patch" /* Patch */)) {
                var localizedPatch = extend({}, basePatch, {
                    path: source.path.substr(this.path.length) + "/" + basePatch.path // calculate the relative path of the patch
                })
                var _a = __read(splitPatch(localizedPatch), 2),
                    patch = _a[0],
                    reversePatch = _a[1]
                this._internalEventsEmit("patch" /* Patch */, patch, reversePatch)
            }
            if (this.parent) this.parent.emitPatch(basePatch, source)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "hasDisposer", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (disposer) {
            return this._internalEventsHas("dispose" /* Dispose */, disposer)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "addDisposer", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (disposer) {
            if (!this.hasDisposer(disposer)) {
                this._internalEventsRegister("dispose" /* Dispose */, disposer, true)
                return
            }
            throw fail("cannot add a disposer when it is already registered for execution")
        }
    })
    Object.defineProperty(ObjectNode.prototype, "removeDisposer", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (disposer) {
            if (!this._internalEventsHas("dispose" /* Dispose */, disposer)) {
                throw fail("cannot remove a disposer which was never registered for execution")
            }
            this._internalEventsUnregister("dispose" /* Dispose */, disposer)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "removeMiddleware", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (middleware) {
            if (this.middlewares) {
                var index = this.middlewares.indexOf(middleware)
                if (index >= 0) {
                    this.middlewares.splice(index, 1)
                }
            }
        }
    })
    Object.defineProperty(ObjectNode.prototype, "addMiddleWare", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (handler, includeHooks) {
            var _this = this
            if (includeHooks === void 0) {
                includeHooks = true
            }
            var middleware = { handler: handler, includeHooks: includeHooks }
            if (!this.middlewares) this.middlewares = [middleware]
            else this.middlewares.push(middleware)
            return function () {
                _this.removeMiddleware(middleware)
            }
        }
    })
    Object.defineProperty(ObjectNode.prototype, "applyPatchLocally", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (subpath, patch) {
            this.assertWritable({
                subpath: subpath
            })
            this.createObservableInstanceIfNeeded()
            this.type.applyPatchLocally(this, subpath, patch)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "_addSnapshotReaction", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _this = this
            if (!this._hasSnapshotReaction) {
                var snapshotDisposer = mobx.reaction(
                    function () {
                        return _this.snapshot
                    },
                    function (snapshot) {
                        return _this.emitSnapshot(snapshot)
                    },
                    snapshotReactionOptions
                )
                this.addDisposer(snapshotDisposer)
                this._hasSnapshotReaction = true
            }
        }
    })
    // we proxy the methods to avoid creating an EventHandlers instance when it is not needed
    Object.defineProperty(ObjectNode.prototype, "_internalEventsHasSubscribers", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event) {
            return !!this._internalEvents && this._internalEvents.hasSubscribers(event)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "_internalEventsRegister", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event, eventHandler, atTheBeginning) {
            if (atTheBeginning === void 0) {
                atTheBeginning = false
            }
            if (!this._internalEvents) {
                this._internalEvents = new EventHandlers()
            }
            return this._internalEvents.register(event, eventHandler, atTheBeginning)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "_internalEventsHas", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event, eventHandler) {
            return !!this._internalEvents && this._internalEvents.has(event, eventHandler)
        }
    })
    Object.defineProperty(ObjectNode.prototype, "_internalEventsUnregister", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event, eventHandler) {
            if (this._internalEvents) {
                this._internalEvents.unregister(event, eventHandler)
            }
        }
    })
    Object.defineProperty(ObjectNode.prototype, "_internalEventsEmit", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event) {
            var _a
            var args = []
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i]
            }
            if (this._internalEvents) {
                ;(_a = this._internalEvents).emit.apply(_a, __spread([event], args))
            }
        }
    })
    Object.defineProperty(ObjectNode.prototype, "_internalEventsClear", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event) {
            if (this._internalEvents) {
                this._internalEvents.clear(event)
            }
        }
    })
    Object.defineProperty(ObjectNode.prototype, "_internalEventsClearAll", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (this._internalEvents) {
                this._internalEvents.clearAll()
            }
        }
    })
    return ObjectNode
})(BaseNode)
ObjectNode.prototype.createObservableInstance = mobx.action(
    ObjectNode.prototype.createObservableInstance
)
ObjectNode.prototype.detach = mobx.action(ObjectNode.prototype.detach)
ObjectNode.prototype.die = mobx.action(ObjectNode.prototype.die)

var _a
/**
 * @internal
 * @hidden
 */
var TypeFlags
;(function (TypeFlags) {
    TypeFlags[(TypeFlags["String"] = 1)] = "String"
    TypeFlags[(TypeFlags["Number"] = 2)] = "Number"
    TypeFlags[(TypeFlags["Boolean"] = 4)] = "Boolean"
    TypeFlags[(TypeFlags["Date"] = 8)] = "Date"
    TypeFlags[(TypeFlags["Literal"] = 16)] = "Literal"
    TypeFlags[(TypeFlags["Array"] = 32)] = "Array"
    TypeFlags[(TypeFlags["Map"] = 64)] = "Map"
    TypeFlags[(TypeFlags["Object"] = 128)] = "Object"
    TypeFlags[(TypeFlags["Frozen"] = 256)] = "Frozen"
    TypeFlags[(TypeFlags["Optional"] = 512)] = "Optional"
    TypeFlags[(TypeFlags["Reference"] = 1024)] = "Reference"
    TypeFlags[(TypeFlags["Identifier"] = 2048)] = "Identifier"
    TypeFlags[(TypeFlags["Late"] = 4096)] = "Late"
    TypeFlags[(TypeFlags["Refinement"] = 8192)] = "Refinement"
    TypeFlags[(TypeFlags["Union"] = 16384)] = "Union"
    TypeFlags[(TypeFlags["Null"] = 32768)] = "Null"
    TypeFlags[(TypeFlags["Undefined"] = 65536)] = "Undefined"
    TypeFlags[(TypeFlags["Integer"] = 131072)] = "Integer"
    TypeFlags[(TypeFlags["Custom"] = 262144)] = "Custom"
    TypeFlags[(TypeFlags["SnapshotProcessor"] = 524288)] = "SnapshotProcessor"
})(TypeFlags || (TypeFlags = {}))
/**
 * @internal
 * @hidden
 */
var cannotDetermineSubtype = "cannotDetermine"
/** @hidden */
var $type = Symbol("$type")
/**
 * A base type produces a MST node (Node in the state tree)
 *
 * @internal
 * @hidden
 */
var BaseType = /** @class */ (function () {
    function BaseType(name) {
        Object.defineProperty(this, _a, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        // these are just to make inner types avaialable to inherited classes
        Object.defineProperty(this, "C", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(this, "S", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(this, "T", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(this, "N", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(this, "isType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        })
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        this.name = name
    }
    Object.defineProperty(BaseType.prototype, "create", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (snapshot, environment) {
            return this.instantiate(null, "", environment, snapshot).value
        }
    })
    Object.defineProperty(BaseType.prototype, "getSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, applyPostProcess) {
            // istanbul ignore next
            throw fail("unimplemented method")
        }
    })
    Object.defineProperty(BaseType.prototype, "isAssignableFrom", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (type) {
            return type === this
        }
    })
    Object.defineProperty(BaseType.prototype, "validate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            var node = getStateTreeNodeSafe(value)
            if (node) {
                var valueType = getType(value)
                return this.isAssignableFrom(valueType)
                    ? typeCheckSuccess()
                    : typeCheckFailure(context, value)
                // it is tempting to compare snapshots, but in that case we should always clone on assignments...
            }
            return this.isValidSnapshot(value, context)
        }
    })
    Object.defineProperty(BaseType.prototype, "is", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (thing) {
            return this.validate(thing, [{ path: "", type: this }]).length === 0
        }
    })
    Object.defineProperty(BaseType.prototype, "Type", {
        get: function () {
            // istanbul ignore next
            throw fail(
                "Factory.Type should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.Type`"
            )
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseType.prototype, "TypeWithoutSTN", {
        get: function () {
            // istanbul ignore next
            throw fail(
                "Factory.TypeWithoutSTN should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.TypeWithoutSTN`"
            )
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseType.prototype, "SnapshotType", {
        get: function () {
            // istanbul ignore next
            throw fail(
                "Factory.SnapshotType should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.SnapshotType`"
            )
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(BaseType.prototype, "CreationType", {
        get: function () {
            // istanbul ignore next
            throw fail(
                "Factory.CreationType should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.CreationType`"
            )
        },
        enumerable: false,
        configurable: true
    })
    return BaseType
})()
_a = $type
BaseType.prototype.create = mobx.action(BaseType.prototype.create)
/**
 * A complex type produces a MST node (Node in the state tree)
 *
 * @internal
 * @hidden
 */
var ComplexType = /** @class */ (function (_super) {
    __extends(ComplexType, _super)
    function ComplexType(name) {
        var _this = _super.call(this, name) || this
        Object.defineProperty(_this, "identifierAttribute", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        return _this
    }
    Object.defineProperty(ComplexType.prototype, "create", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (snapshot, environment) {
            if (snapshot === void 0) {
                snapshot = this.getDefaultSnapshot()
            }
            return _super.prototype.create.call(this, snapshot, environment)
        }
    })
    Object.defineProperty(ComplexType.prototype, "getValue", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            node.createObservableInstanceIfNeeded()
            return node.storedValue
        }
    })
    Object.defineProperty(ComplexType.prototype, "isMatchingSnapshotId", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, snapshot) {
            return (
                !current.identifierAttribute ||
                current.identifier === normalizeIdentifier(snapshot[current.identifierAttribute])
            )
        }
    })
    Object.defineProperty(ComplexType.prototype, "tryToReconcileNode", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, newValue) {
            if (current.isDetaching) return false
            if (current.snapshot === newValue) {
                // newValue is the current snapshot of the node, noop
                return true
            }
            if (isStateTreeNode(newValue) && getStateTreeNode(newValue) === current) {
                // the current node is the same as the new one
                return true
            }
            if (
                current.type === this &&
                isMutable(newValue) &&
                !isStateTreeNode(newValue) &&
                this.isMatchingSnapshotId(current, newValue)
            ) {
                // the newValue has no node, so can be treated like a snapshot
                // we can reconcile
                current.applySnapshot(newValue)
                return true
            }
            return false
        }
    })
    Object.defineProperty(ComplexType.prototype, "reconcile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, newValue, parent, subpath) {
            var nodeReconciled = this.tryToReconcileNode(current, newValue)
            if (nodeReconciled) {
                current.setParent(parent, subpath)
                return current
            }
            // current node cannot be recycled in any way
            current.die() // noop if detaching
            // attempt to reuse the new one
            if (isStateTreeNode(newValue) && this.isAssignableFrom(getType(newValue))) {
                // newValue is a Node as well, move it here..
                var newNode = getStateTreeNode(newValue)
                newNode.setParent(parent, subpath)
                return newNode
            }
            // nothing to do, we have to create a new node
            return this.instantiate(parent, subpath, undefined, newValue)
        }
    })
    Object.defineProperty(ComplexType.prototype, "getSubTypes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return null
        }
    })
    return ComplexType
})(BaseType)
ComplexType.prototype.create = mobx.action(ComplexType.prototype.create)
/**
 * @internal
 * @hidden
 */
var SimpleType = /** @class */ (function (_super) {
    __extends(SimpleType, _super)
    function SimpleType() {
        return (_super !== null && _super.apply(this, arguments)) || this
    }
    Object.defineProperty(SimpleType.prototype, "createNewInstance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (snapshot) {
            return snapshot
        }
    })
    Object.defineProperty(SimpleType.prototype, "getValue", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            // if we ever find a case where scalar nodes can be accessed without iterating through its parent
            // uncomment this to make sure the parent chain is created when this is accessed
            // if (node.parent) {
            //     node.parent.createObservableInstanceIfNeeded()
            // }
            return node.storedValue
        }
    })
    Object.defineProperty(SimpleType.prototype, "getSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            return node.storedValue
        }
    })
    Object.defineProperty(SimpleType.prototype, "reconcile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, newValue, parent, subpath) {
            // reconcile only if type and value are still the same, and only if the node is not detaching
            if (!current.isDetaching && current.type === this && current.storedValue === newValue) {
                return current
            }
            var res = this.instantiate(parent, subpath, undefined, newValue)
            current.die() // noop if detaching
            return res
        }
    })
    Object.defineProperty(SimpleType.prototype, "getSubTypes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return null
        }
    })
    return SimpleType
})(BaseType)
/**
 * Returns if a given value represents a type.
 *
 * @param value Value to check.
 * @returns `true` if the value is a type.
 */
function isType(value) {
    return typeof value === "object" && value && value.isType === true
}

var runningActions = new Map()
/**
 * Note: Consider migrating to `createActionTrackingMiddleware2`, it is easier to use.
 *
 * Convenience utility to create action based middleware that supports async processes more easily.
 * All hooks are called for both synchronous and asynchronous actions. Except that either `onSuccess` or `onFail` is called
 *
 * The create middleware tracks the process of an action (assuming it passes the `filter`).
 * `onResume` can return any value, which will be passed as second argument to any other hook. This makes it possible to keep state during a process.
 *
 * See the `atomic` middleware for an example
 *
 * @param hooks
 * @returns
 */
function createActionTrackingMiddleware(hooks) {
    return function actionTrackingMiddleware(call, next, abort) {
        switch (call.type) {
            case "action": {
                if (!hooks.filter || hooks.filter(call) === true) {
                    var context = hooks.onStart(call)
                    hooks.onResume(call, context)
                    runningActions.set(call.id, {
                        call: call,
                        context: context,
                        async: false
                    })
                    try {
                        var res = next(call)
                        hooks.onSuspend(call, context)
                        if (runningActions.get(call.id).async === false) {
                            runningActions.delete(call.id)
                            hooks.onSuccess(call, context, res)
                        }
                        return res
                    } catch (e) {
                        runningActions.delete(call.id)
                        hooks.onFail(call, context, e)
                        throw e
                    }
                } else {
                    return next(call)
                }
            }
            case "flow_spawn": {
                var root = runningActions.get(call.rootId)
                root.async = true
                return next(call)
            }
            case "flow_resume":
            case "flow_resume_error": {
                var root = runningActions.get(call.rootId)
                hooks.onResume(call, root.context)
                try {
                    return next(call)
                } finally {
                    hooks.onSuspend(call, root.context)
                }
            }
            case "flow_throw": {
                var root = runningActions.get(call.rootId)
                runningActions.delete(call.rootId)
                hooks.onFail(call, root.context, call.args[0])
                return next(call)
            }
            case "flow_return": {
                var root = runningActions.get(call.rootId)
                runningActions.delete(call.rootId)
                hooks.onSuccess(call, root.context, call.args[0])
                return next(call)
            }
        }
    }
}

var RunningAction = /** @class */ (function () {
    function RunningAction(hooks, call) {
        Object.defineProperty(this, "hooks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: hooks
        })
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: call
        })
        Object.defineProperty(this, "flowsPending", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        })
        Object.defineProperty(this, "running", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        })
        if (hooks) {
            hooks.onStart(call)
        }
    }
    Object.defineProperty(RunningAction.prototype, "finish", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (error) {
            if (this.running) {
                this.running = false
                if (this.hooks) {
                    this.hooks.onFinish(this.call, error)
                }
            }
        }
    })
    Object.defineProperty(RunningAction.prototype, "incFlowsPending", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.flowsPending++
        }
    })
    Object.defineProperty(RunningAction.prototype, "decFlowsPending", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.flowsPending--
        }
    })
    Object.defineProperty(RunningAction.prototype, "hasFlowsPending", {
        get: function () {
            return this.flowsPending > 0
        },
        enumerable: false,
        configurable: true
    })
    return RunningAction
})()
/**
 * Convenience utility to create action based middleware that supports async processes more easily.
 * The flow is like this:
 * - for each action: if filter passes -> `onStart` -> (inner actions recursively) -> `onFinish`
 *
 * Example: if we had an action `a` that called inside an action `b1`, then `b2` the flow would be:
 * - `filter(a)`
 * - `onStart(a)`
 *   - `filter(b1)`
 *   - `onStart(b1)`
 *   - `onFinish(b1)`
 *   - `filter(b2)`
 *   - `onStart(b2)`
 *   - `onFinish(b2)`
 * - `onFinish(a)`
 *
 * The flow is the same no matter if the actions are sync or async.
 *
 * See the `atomic` middleware for an example
 *
 * @param hooks
 * @returns
 */
function createActionTrackingMiddleware2(middlewareHooks) {
    var runningActions = new WeakMap()
    return function actionTrackingMiddleware(call, next) {
        // find parentRunningAction
        var parentRunningAction = call.parentActionEvent
            ? runningActions.get(call.parentActionEvent)
            : undefined
        if (call.type === "action") {
            var newCall = __assign(__assign({}, call), {
                // make a shallow copy of the parent action env
                env: parentRunningAction && parentRunningAction.call.env,
                parentCall: parentRunningAction && parentRunningAction.call
            })
            var passesFilter = !middlewareHooks.filter || middlewareHooks.filter(newCall)
            var hooks = passesFilter ? middlewareHooks : undefined
            var runningAction = new RunningAction(hooks, newCall)
            runningActions.set(call, runningAction)
            var res = void 0
            try {
                res = next(call)
            } catch (e) {
                runningAction.finish(e)
                throw e
            }
            if (!runningAction.hasFlowsPending) {
                // sync action finished
                runningAction.finish()
            }
            return res
        } else {
            if (!parentRunningAction) {
                return next(call)
            }
            switch (call.type) {
                case "flow_spawn": {
                    parentRunningAction.incFlowsPending()
                    return next(call)
                }
                case "flow_resume":
                case "flow_resume_error": {
                    return next(call)
                }
                case "flow_throw": {
                    var error = call.args[0]
                    try {
                        return next(call)
                    } finally {
                        parentRunningAction.decFlowsPending()
                        if (!parentRunningAction.hasFlowsPending) {
                            parentRunningAction.finish(error)
                        }
                    }
                }
                case "flow_return": {
                    try {
                        return next(call)
                    } finally {
                        parentRunningAction.decFlowsPending()
                        if (!parentRunningAction.hasFlowsPending) {
                            parentRunningAction.finish()
                        }
                    }
                }
            }
        }
    }
}

function serializeArgument(node, actionName, index, arg) {
    if (arg instanceof Date) return { $MST_DATE: arg.getTime() }
    if (isPrimitive(arg)) return arg
    // We should not serialize MST nodes, even if we can, because we don't know if the receiving party can handle a raw snapshot instead of an
    // MST type instance. So if one wants to serialize a MST node that was pass in, either explitly pass: 1: an id, 2: a (relative) path, 3: a snapshot
    if (isStateTreeNode(arg))
        return serializeTheUnserializable("[MSTNode: " + getType(arg).name + "]")
    if (typeof arg === "function") return serializeTheUnserializable("[function]")
    if (typeof arg === "object" && !isPlainObject(arg) && !isArray(arg))
        return serializeTheUnserializable(
            "[object " +
                ((arg && arg.constructor && arg.constructor.name) || "Complex Object") +
                "]"
        )
    try {
        // Check if serializable, cycle free etc...
        // MWE: there must be a better way....
        JSON.stringify(arg) // or throws
        return arg
    } catch (e) {
        return serializeTheUnserializable("" + e)
    }
}
function deserializeArgument(adm, value) {
    if (value && typeof value === "object" && "$MST_DATE" in value)
        return new Date(value["$MST_DATE"])
    return value
}
function serializeTheUnserializable(baseType) {
    return {
        $MST_UNSERIALIZABLE: true,
        type: baseType
    }
}
/**
 * Applies an action or a series of actions in a single MobX transaction.
 * Does not return any value
 * Takes an action description as produced by the `onAction` middleware.
 *
 * @param target
 * @param actions
 */
function applyAction(target, actions) {
    mobx.runInAction(function () {
        asArray(actions).forEach(function (action) {
            return baseApplyAction(target, action)
        })
    })
}
function baseApplyAction(target, action) {
    var resolvedTarget = tryResolve(target, action.path || "")
    if (!resolvedTarget) throw fail("Invalid action path: " + (action.path || ""))
    var node = getStateTreeNode(resolvedTarget)
    // Reserved functions
    if (action.name === "@APPLY_PATCHES") {
        return applyPatch.call(null, resolvedTarget, action.args[0])
    }
    if (action.name === "@APPLY_SNAPSHOT") {
        return applySnapshot.call(null, resolvedTarget, action.args[0])
    }
    if (!(typeof resolvedTarget[action.name] === "function"))
        throw fail("Action '" + action.name + "' does not exist in '" + node.path + "'")
    return resolvedTarget[action.name].apply(
        resolvedTarget,
        action.args
            ? action.args.map(function (v) {
                  return deserializeArgument(node, v)
              })
            : []
    )
}
/**
 * Small abstraction around `onAction` and `applyAction`, attaches an action listener to a tree and records all the actions emitted.
 * Returns an recorder object with the following signature:
 *
 * Example:
 * ```ts
 * export interface IActionRecorder {
 *      // the recorded actions
 *      actions: ISerializedActionCall[]
 *      // true if currently recording
 *      recording: boolean
 *      // stop recording actions
 *      stop(): void
 *      // resume recording actions
 *      resume(): void
 *      // apply all the recorded actions on the given object
 *      replay(target: IAnyStateTreeNode): void
 * }
 * ```
 *
 * The optional filter function allows to skip recording certain actions.
 *
 * @param subject
 * @returns
 */
function recordActions(subject, filter) {
    var actions = []
    var listener = function (call) {
        var recordThis = filter ? filter(call, getRunningActionContext()) : true
        if (recordThis) {
            actions.push(call)
        }
    }
    var disposer
    var recorder = {
        actions: actions,
        get recording() {
            return !!disposer
        },
        stop: function () {
            if (disposer) {
                disposer()
                disposer = undefined
            }
        },
        resume: function () {
            if (disposer) return
            disposer = onAction(subject, listener)
        },
        replay: function (target) {
            applyAction(target, actions)
        }
    }
    recorder.resume()
    return recorder
}
/**
 * Registers a function that will be invoked for each action that is called on the provided model instance, or to any of its children.
 * See [actions](https://github.com/mobxjs/mobx-state-tree#actions) for more details. onAction events are emitted only for the outermost called action in the stack.
 * Action can also be intercepted by middleware using addMiddleware to change the function call before it will be run.
 *
 * Not all action arguments might be serializable. For unserializable arguments, a struct like `{ $MST_UNSERIALIZABLE: true, type: "someType" }` will be generated.
 * MST Nodes are considered non-serializable as well (they could be serialized as there snapshot, but it is uncertain whether an replaying party will be able to handle such a non-instantiated snapshot).
 * Rather, when using `onAction` middleware, one should consider in passing arguments which are 1: an id, 2: a (relative) path, or 3: a snapshot. Instead of a real MST node.
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   task: types.string
 * })
 *
 * const TodoStore = types.model({
 *   todos: types.array(Todo)
 * }).actions(self => ({
 *   add(todo) {
 *     self.todos.push(todo);
 *   }
 * }))
 *
 * const s = TodoStore.create({ todos: [] })
 *
 * let disposer = onAction(s, (call) => {
 *   console.log(call);
 * })
 *
 * s.add({ task: "Grab a coffee" })
 * // Logs: { name: "add", path: "", args: [{ task: "Grab a coffee" }] }
 * ```
 *
 * @param target
 * @param listener
 * @param attachAfter (default false) fires the listener *after* the action has executed instead of before.
 * @returns
 */
function onAction(target, listener, attachAfter) {
    if (attachAfter === void 0) {
        attachAfter = false
    }
    return addMiddleware(target, function handler(rawCall, next) {
        if (rawCall.type === "action" && rawCall.id === rawCall.rootId) {
            var sourceNode_1 = getStateTreeNode(rawCall.context)
            var info = {
                name: rawCall.name,
                path: getRelativePathBetweenNodes(getStateTreeNode(target), sourceNode_1),
                args: rawCall.args.map(function (arg, index) {
                    return serializeArgument(sourceNode_1, rawCall.name, index, arg)
                })
            }
            if (attachAfter) {
                var res = next(rawCall)
                listener(info)
                return res
            } else {
                listener(info)
                return next(rawCall)
            }
        } else {
            return next(rawCall)
        }
    })
}

var nextActionId = 1
var currentActionContext
/**
 * @internal
 * @hidden
 */
function getCurrentActionContext() {
    return currentActionContext
}
/**
 * @internal
 * @hidden
 */
function getNextActionId() {
    return nextActionId++
}
// TODO: optimize away entire action context if there is no middleware in tree?
/**
 * @internal
 * @hidden
 */
function runWithActionContext(context, fn) {
    var node = getStateTreeNode(context.context)
    if (context.type === "action") {
        node.assertAlive({
            actionContext: context
        })
    }
    var baseIsRunningAction = node._isRunningAction
    node._isRunningAction = true
    var previousContext = currentActionContext
    currentActionContext = context
    try {
        return runMiddleWares(node, context, fn)
    } finally {
        currentActionContext = previousContext
        node._isRunningAction = baseIsRunningAction
    }
}
/**
 * @internal
 * @hidden
 */
function getParentActionContext(parentContext) {
    if (!parentContext) return undefined
    if (parentContext.type === "action") return parentContext
    return parentContext.parentActionEvent
}
/**
 * @internal
 * @hidden
 */
function createActionInvoker(target, name, fn) {
    var res = function () {
        var id = getNextActionId()
        var parentContext = currentActionContext
        var parentActionContext = getParentActionContext(parentContext)
        return runWithActionContext(
            {
                type: "action",
                name: name,
                id: id,
                args: argsToArray(arguments),
                context: target,
                tree: getRoot(target),
                rootId: parentContext ? parentContext.rootId : id,
                parentId: parentContext ? parentContext.id : 0,
                allParentIds: parentContext
                    ? __spread(parentContext.allParentIds, [parentContext.id])
                    : [],
                parentEvent: parentContext,
                parentActionEvent: parentActionContext
            },
            fn
        )
    }
    res._isMSTAction = true
    return res
}
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
function addMiddleware(target, handler, includeHooks) {
    if (includeHooks === void 0) {
        includeHooks = true
    }
    var node = getStateTreeNode(target)
    return node.addMiddleWare(handler, includeHooks)
}
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
function decorate(handler, fn, includeHooks) {
    if (includeHooks === void 0) {
        includeHooks = true
    }
    var middleware = { handler: handler, includeHooks: includeHooks }
    fn.$mst_middleware = fn.$mst_middleware || []
    fn.$mst_middleware.push(middleware)
    return fn
}
var CollectedMiddlewares = /** @class */ (function () {
    function CollectedMiddlewares(node, fn) {
        Object.defineProperty(this, "arrayIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        })
        Object.defineProperty(this, "inArrayIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        })
        Object.defineProperty(this, "middlewares", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        })
        // we just push middleware arrays into an array of arrays to avoid making copies
        if (fn.$mst_middleware) {
            this.middlewares.push(fn.$mst_middleware)
        }
        var n = node
        // Find all middlewares. Optimization: cache this?
        while (n) {
            if (n.middlewares) this.middlewares.push(n.middlewares)
            n = n.parent
        }
    }
    Object.defineProperty(CollectedMiddlewares.prototype, "isEmpty", {
        get: function () {
            return this.middlewares.length <= 0
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(CollectedMiddlewares.prototype, "getNextMiddleware", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var array = this.middlewares[this.arrayIndex]
            if (!array) return undefined
            var item = array[this.inArrayIndex++]
            if (!item) {
                this.arrayIndex++
                this.inArrayIndex = 0
                return this.getNextMiddleware()
            }
            return item
        }
    })
    return CollectedMiddlewares
})()
function runMiddleWares(node, baseCall, originalFn) {
    var middlewares = new CollectedMiddlewares(node, originalFn)
    // Short circuit
    if (middlewares.isEmpty) return mobx.action(originalFn).apply(null, baseCall.args)
    var result = null
    function runNextMiddleware(call) {
        var middleware = middlewares.getNextMiddleware()
        var handler = middleware && middleware.handler
        if (!handler) {
            return mobx.action(originalFn).apply(null, call.args)
        }
        // skip hooks if asked to
        if (!middleware.includeHooks && Hook[call.name]) {
            return runNextMiddleware(call)
        }
        function next(call2, callback) {
            // the result can contain
            // - the non manipulated return value from an action
            // - the non manipulated abort value
            // - one of the above but manipulated through the callback function
            result = runNextMiddleware(call2)
            if (callback) {
                result = callback(result)
            }
        }
        function abort(value) {
            // overwrite the result
            // can be manipulated through middlewares earlier in the queue using the callback fn
            result = value
        }
        handler(call, next, abort)
        return result
    }
    return runNextMiddleware(baseCall)
}

/**
 * Returns the currently executing MST action context, or undefined if none.
 */
function getRunningActionContext() {
    var current = getCurrentActionContext()
    while (current && current.type !== "action") {
        current = current.parentActionEvent
    }
    return current
}
function _isActionContextThisOrChildOf(actionContext, sameOrParent, includeSame) {
    var parentId = typeof sameOrParent === "number" ? sameOrParent : sameOrParent.id
    var current = includeSame ? actionContext : actionContext.parentActionEvent
    while (current) {
        if (current.id === parentId) {
            return true
        }
        current = current.parentActionEvent
    }
    return false
}
/**
 * Returns if the given action context is a parent of this action context.
 */
function isActionContextChildOf(actionContext, parent) {
    return _isActionContextThisOrChildOf(actionContext, parent, false)
}
/**
 * Returns if the given action context is this or a parent of this action context.
 */
function isActionContextThisOrChildOf(actionContext, parentOrThis) {
    return _isActionContextThisOrChildOf(actionContext, parentOrThis, true)
}

function safeStringify(value) {
    try {
        return JSON.stringify(value)
    } catch (e) {
        // istanbul ignore next
        return "<Unserializable: " + e + ">"
    }
}
/**
 * @internal
 * @hidden
 */
function prettyPrintValue(value) {
    return typeof value === "function"
        ? "<function" + (value.name ? " " + value.name : "") + ">"
        : isStateTreeNode(value)
        ? "<" + value + ">"
        : "`" + safeStringify(value) + "`"
}
function shortenPrintValue(valueInString) {
    return valueInString.length < 280
        ? valueInString
        : valueInString.substring(0, 272) +
              "......" +
              valueInString.substring(valueInString.length - 8)
}
function toErrorString(error) {
    var value = error.value
    var type = error.context[error.context.length - 1].type
    var fullPath = error.context
        .map(function (_a) {
            var path = _a.path
            return path
        })
        .filter(function (path) {
            return path.length > 0
        })
        .join("/")
    var pathPrefix = fullPath.length > 0 ? 'at path "/' + fullPath + '" ' : ""
    var currentTypename = isStateTreeNode(value)
        ? "value of type " + getStateTreeNode(value).type.name + ":"
        : isPrimitive(value)
        ? "value"
        : "snapshot"
    var isSnapshotCompatible =
        type && isStateTreeNode(value) && type.is(getStateTreeNode(value).snapshot)
    return (
        "" +
        pathPrefix +
        currentTypename +
        " " +
        prettyPrintValue(value) +
        " is not assignable " +
        (type ? "to type: `" + type.name + "`" : "") +
        (error.message ? " (" + error.message + ")" : "") +
        (type
            ? isPrimitiveType(type) || isPrimitive(value)
                ? "."
                : ", expected an instance of `" +
                  type.name +
                  "` or a snapshot like `" +
                  type.describe() +
                  "` instead." +
                  (isSnapshotCompatible
                      ? " (Note that a snapshot of the provided value is compatible with the targeted type)"
                      : "")
            : ".")
    )
}
/**
 * @internal
 * @hidden
 */
function getContextForPath(context, path, type) {
    return context.concat([{ path: path, type: type }])
}
/**
 * @internal
 * @hidden
 */
function typeCheckSuccess() {
    return EMPTY_ARRAY
}
/**
 * @internal
 * @hidden
 */
function typeCheckFailure(context, value, message) {
    return [{ context: context, value: value, message: message }]
}
/**
 * @internal
 * @hidden
 */
function flattenTypeErrors(errors) {
    return errors.reduce(function (a, i) {
        return a.concat(i)
    }, [])
}
// TODO; doublecheck: typecheck should only needed to be invoked from: type.create and array / map / value.property will change
/**
 * @internal
 * @hidden
 */
function typecheckInternal(type, value) {}
/**
 * Run's the typechecker for the given type on the given value, which can be a snapshot or an instance.
 * Throws if the given value is not according the provided type specification.
 * Use this if you need typechecks even in a production build (by default all automatic runtime type checks will be skipped in production builds)
 *
 * @param type Type to check against.
 * @param value Value to be checked, either a snapshot or an instance.
 */
function typecheck(type, value) {
    var errors = type.validate(value, [{ path: "", type: type }])
    if (errors.length > 0) {
        throw fail(validationErrorsToString(type, value, errors))
    }
}
function validationErrorsToString(type, value, errors) {
    if (errors.length === 0) {
        return undefined
    }
    return (
        "Error while converting " +
        shortenPrintValue(prettyPrintValue(value)) +
        " to `" +
        type.name +
        "`:\n\n    " +
        errors.map(toErrorString).join("\n    ")
    )
}

var identifierCacheId = 0
/**
 * @internal
 * @hidden
 */
var IdentifierCache = /** @class */ (function () {
    function IdentifierCache() {
        Object.defineProperty(this, "cacheId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: identifierCacheId++
        })
        // n.b. in cache all identifiers are normalized to strings
        Object.defineProperty(this, "cache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: mobx.observable.map()
        })
        // last time the cache (array) for a given time changed
        // n.b. it is not really the time, but just an integer that gets increased after each modification to the array
        Object.defineProperty(this, "lastCacheModificationPerId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: mobx.observable.map()
        })
    }
    Object.defineProperty(IdentifierCache.prototype, "updateLastCacheModificationPerId", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (identifier) {
            var lcm = this.lastCacheModificationPerId.get(identifier)
            // we start at 1 since 0 means no update since cache creation
            this.lastCacheModificationPerId.set(identifier, lcm === undefined ? 1 : lcm + 1)
        }
    })
    Object.defineProperty(IdentifierCache.prototype, "getLastCacheModificationPerId", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (identifier) {
            var modificationId = this.lastCacheModificationPerId.get(identifier) || 0
            return this.cacheId + "-" + modificationId
        }
    })
    Object.defineProperty(IdentifierCache.prototype, "addNodeToCache", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, lastCacheUpdate) {
            if (lastCacheUpdate === void 0) {
                lastCacheUpdate = true
            }
            if (node.identifierAttribute) {
                var identifier = node.identifier
                if (!this.cache.has(identifier)) {
                    this.cache.set(identifier, mobx.observable.array([], mobxShallow))
                }
                var set = this.cache.get(identifier)
                if (set.indexOf(node) !== -1) throw fail("Already registered")
                set.push(node)
                if (lastCacheUpdate) {
                    this.updateLastCacheModificationPerId(identifier)
                }
            }
        }
    })
    Object.defineProperty(IdentifierCache.prototype, "mergeCache", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            var _this = this
            mobx.values(node.identifierCache.cache).forEach(function (nodes) {
                return nodes.forEach(function (child) {
                    _this.addNodeToCache(child)
                })
            })
        }
    })
    Object.defineProperty(IdentifierCache.prototype, "notifyDied", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            if (node.identifierAttribute) {
                var id = node.identifier
                var set = this.cache.get(id)
                if (set) {
                    set.remove(node)
                    // remove empty sets from cache
                    if (!set.length) {
                        this.cache.delete(id)
                    }
                    this.updateLastCacheModificationPerId(node.identifier)
                }
            }
        }
    })
    Object.defineProperty(IdentifierCache.prototype, "splitCache", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            var _this = this
            var res = new IdentifierCache()
            var basePath = node.path
            mobx.entries(this.cache).forEach(function (_a) {
                var _b = __read(_a, 2),
                    id = _b[0],
                    nodes = _b[1]
                var modified = false
                for (var i = nodes.length - 1; i >= 0; i--) {
                    if (nodes[i].path.indexOf(basePath) === 0) {
                        res.addNodeToCache(nodes[i], false) // no need to update lastUpdated since it is a whole new cache
                        nodes.splice(i, 1)
                        modified = true
                    }
                }
                if (modified) {
                    _this.updateLastCacheModificationPerId(id)
                }
            })
            return res
        }
    })
    Object.defineProperty(IdentifierCache.prototype, "has", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (type, identifier) {
            var set = this.cache.get(identifier)
            if (!set) return false
            return set.some(function (candidate) {
                return type.isAssignableFrom(candidate.type)
            })
        }
    })
    Object.defineProperty(IdentifierCache.prototype, "resolve", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (type, identifier) {
            var set = this.cache.get(identifier)
            if (!set) return null
            var matches = set.filter(function (candidate) {
                return type.isAssignableFrom(candidate.type)
            })
            switch (matches.length) {
                case 0:
                    return null
                case 1:
                    return matches[0]
                default:
                    throw fail(
                        "Cannot resolve a reference to type '" +
                            type.name +
                            "' with id: '" +
                            identifier +
                            "' unambigously, there are multiple candidates: " +
                            matches
                                .map(function (n) {
                                    return n.path
                                })
                                .join(", ")
                    )
            }
        }
    })
    return IdentifierCache
})()

/**
 * @internal
 * @hidden
 */
function createObjectNode(type, parent, subpath, environment, initialValue) {
    var existingNode = getStateTreeNodeSafe(initialValue)
    if (existingNode) {
        if (existingNode.parent) {
            // istanbul ignore next
            throw fail(
                "Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '" +
                    (parent ? parent.path : "") +
                    "/" +
                    subpath +
                    "', but it lives already at '" +
                    existingNode.path +
                    "'"
            )
        }
        if (parent) {
            existingNode.setParent(parent, subpath)
        }
        // else it already has no parent since it is a pre-requisite
        return existingNode
    }
    // not a node, a snapshot
    return new ObjectNode(type, parent, subpath, environment, initialValue)
}
/**
 * @internal
 * @hidden
 */
function createScalarNode(type, parent, subpath, environment, initialValue) {
    return new ScalarNode(type, parent, subpath, environment, initialValue)
}
/**
 * @internal
 * @hidden
 */
function isNode(value) {
    return value instanceof ScalarNode || value instanceof ObjectNode
}

/**
 * @internal
 * @hidden
 */
var NodeLifeCycle
;(function (NodeLifeCycle) {
    NodeLifeCycle[(NodeLifeCycle["INITIALIZING"] = 0)] = "INITIALIZING"
    NodeLifeCycle[(NodeLifeCycle["CREATED"] = 1)] = "CREATED"
    NodeLifeCycle[(NodeLifeCycle["FINALIZED"] = 2)] = "FINALIZED"
    NodeLifeCycle[(NodeLifeCycle["DETACHING"] = 3)] = "DETACHING"
    NodeLifeCycle[(NodeLifeCycle["DEAD"] = 4)] = "DEAD" // no coming back from this one
})(NodeLifeCycle || (NodeLifeCycle = {}))
/**
 * Returns true if the given value is a node in a state tree.
 * More precisely, that is, if the value is an instance of a
 * `types.model`, `types.array` or `types.map`.
 *
 * @param value
 * @returns true if the value is a state tree node.
 */
function isStateTreeNode(value) {
    return !!(value && value.$treenode)
}
/**
 * @internal
 * @hidden
 */
function getStateTreeNode(value) {
    if (!isStateTreeNode(value)) {
        // istanbul ignore next
        throw fail("Value " + value + " is no MST Node")
    }
    return value.$treenode
}
/**
 * @internal
 * @hidden
 */
function getStateTreeNodeSafe(value) {
    return (value && value.$treenode) || null
}
/**
 * @internal
 * @hidden
 */
function toJSON() {
    return getStateTreeNode(this).snapshot
}
var doubleDot = function (_) {
    return ".."
}
/**
 * @internal
 * @hidden
 */
function getRelativePathBetweenNodes(base, target) {
    // PRE condition target is (a child of) base!
    if (base.root !== target.root) {
        throw fail(
            "Cannot calculate relative path: objects '" +
                base +
                "' and '" +
                target +
                "' are not part of the same object tree"
        )
    }
    var baseParts = splitJsonPath(base.path)
    var targetParts = splitJsonPath(target.path)
    var common = 0
    for (; common < baseParts.length; common++) {
        if (baseParts[common] !== targetParts[common]) break
    }
    // TODO: assert that no targetParts paths are "..", "." or ""!
    return (
        baseParts.slice(common).map(doubleDot).join("/") + joinJsonPath(targetParts.slice(common))
    )
}
/**
 * @internal
 * @hidden
 */
function resolveNodeByPath(base, path, failIfResolveFails) {
    if (failIfResolveFails === void 0) {
        failIfResolveFails = true
    }
    return resolveNodeByPathParts(base, splitJsonPath(path), failIfResolveFails)
}
/**
 * @internal
 * @hidden
 */
function resolveNodeByPathParts(base, pathParts, failIfResolveFails) {
    if (failIfResolveFails === void 0) {
        failIfResolveFails = true
    }
    var current = base
    for (var i = 0; i < pathParts.length; i++) {
        var part = pathParts[i]
        if (part === "..") {
            current = current.parent
            if (current) continue // not everything has a parent
        } else if (part === ".") {
            continue
        } else if (current) {
            if (current instanceof ScalarNode) {
                // check if the value of a scalar resolves to a state tree node (e.g. references)
                // then we can continue resolving...
                try {
                    var value = current.value
                    if (isStateTreeNode(value)) {
                        current = getStateTreeNode(value)
                        // fall through
                    }
                } catch (e) {
                    if (!failIfResolveFails) {
                        return undefined
                    }
                    throw e
                }
            }
            if (current instanceof ObjectNode) {
                var subType = current.getChildType(part)
                if (subType) {
                    current = current.getChildNode(part)
                    if (current) continue
                }
            }
        }
        if (failIfResolveFails)
            throw fail(
                "Could not resolve '" +
                    part +
                    "' in path '" +
                    (joinJsonPath(pathParts.slice(0, i)) || "/") +
                    "' while resolving '" +
                    joinJsonPath(pathParts) +
                    "'"
            )
        else return undefined
    }
    return current
}
/**
 * @internal
 * @hidden
 */
function convertChildNodesToArray(childNodes) {
    if (!childNodes) return EMPTY_ARRAY
    var keys = Object.keys(childNodes)
    if (!keys.length) return EMPTY_ARRAY
    var result = new Array(keys.length)
    keys.forEach(function (key, index) {
        result[index] = childNodes[key]
    })
    return result
}

// based on: https://github.com/mobxjs/mobx-utils/blob/master/src/async-action.ts
/*
    All contents of this file are deprecated.

    The term `process` has been replaced with `flow` to avoid conflicts with the
    global `process` object.

    Refer to `flow.ts` for any further changes to this implementation.
*/
var DEPRECATION_MESSAGE =
    "See https://github.com/mobxjs/mobx-state-tree/issues/399 for more information. " +
    "Note that the middleware event types starting with `process` now start with `flow`."
/**
 * @hidden
 *
 * @deprecated has been renamed to `flow()`.
 * See https://github.com/mobxjs/mobx-state-tree/issues/399 for more information.
 * Note that the middleware event types starting with `process` now start with `flow`.
 *
 * @returns {Promise}
 */
function process(asyncAction) {
    deprecated("process", "`process()` has been renamed to `flow()`. " + DEPRECATION_MESSAGE)
    return flow(asyncAction)
}

var plainObjectString = Object.toString()
/**
 * @internal
 * @hidden
 */
var EMPTY_ARRAY = Object.freeze([])
/**
 * @internal
 * @hidden
 */
var EMPTY_OBJECT = Object.freeze({})
/**
 * @internal
 * @hidden
 */
var mobxShallow = mobx._getGlobalState().useProxies
    ? { deep: false }
    : { deep: false, proxy: false }
Object.freeze(mobxShallow)
/**
 * @internal
 * @hidden
 */
function fail(message) {
    if (message === void 0) {
        message = "Illegal state"
    }
    return new Error("[mobx-state-tree] " + message)
}
/**
 * @internal
 * @hidden
 */
function identity(_) {
    return _
}
/**
 * pollyfill (for IE) suggested in MDN:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @internal
 * @hidden
 */
var isInteger =
    Number.isInteger ||
    function (value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value
    }
/**
 * @internal
 * @hidden
 */
function isArray(val) {
    return Array.isArray(val) || mobx.isObservableArray(val)
}
/**
 * @internal
 * @hidden
 */
function asArray(val) {
    if (!val) return EMPTY_ARRAY
    if (isArray(val)) return val
    return [val]
}
/**
 * @internal
 * @hidden
 */
function extend(a) {
    var b = []
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i]
    }
    for (var i = 0; i < b.length; i++) {
        var current = b[i]
        for (var key in current) a[key] = current[key]
    }
    return a
}
/**
 * @internal
 * @hidden
 */
function isPlainObject(value) {
    var _a
    if (value === null || typeof value !== "object") return false
    var proto = Object.getPrototypeOf(value)
    if (proto == null) return true
    return (
        ((_a = proto.constructor) === null || _a === void 0 ? void 0 : _a.toString()) ===
        plainObjectString
    )
}
/**
 * @internal
 * @hidden
 */
function isMutable(value) {
    return (
        value !== null &&
        typeof value === "object" &&
        !(value instanceof Date) &&
        !(value instanceof RegExp)
    )
}
/**
 * @internal
 * @hidden
 */
function isPrimitive(value, includeDate) {
    if (includeDate === void 0) {
        includeDate = true
    }
    if (value === null || value === undefined) return true
    if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean" ||
        (includeDate && value instanceof Date)
    )
        return true
    return false
}
/**
 * @internal
 * @hidden
 * Freeze a value and return it (if not in production)
 */
function freeze(value) {
    return value
}
/**
 * @internal
 * @hidden
 * Recursively freeze a value (if not in production)
 */
function deepFreeze(value) {
    return value
}
/**
 * @internal
 * @hidden
 */
function isSerializable(value) {
    return typeof value !== "function"
}
/**
 * @internal
 * @hidden
 */
function defineProperty(object, key, descriptor) {
    mobx.isObservableObject(object)
        ? mobx.defineProperty(object, key, descriptor)
        : Object.defineProperty(object, key, descriptor)
}
/**
 * @internal
 * @hidden
 */
function addHiddenFinalProp(object, propName, value) {
    defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    })
}
/**
 * @internal
 * @hidden
 */
var EventHandler = /** @class */ (function () {
    function EventHandler() {
        Object.defineProperty(this, "handlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        })
    }
    Object.defineProperty(EventHandler.prototype, "hasSubscribers", {
        get: function () {
            return this.handlers.length > 0
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(EventHandler.prototype, "register", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (fn, atTheBeginning) {
            var _this = this
            if (atTheBeginning === void 0) {
                atTheBeginning = false
            }
            if (atTheBeginning) {
                this.handlers.unshift(fn)
            } else {
                this.handlers.push(fn)
            }
            return function () {
                _this.unregister(fn)
            }
        }
    })
    Object.defineProperty(EventHandler.prototype, "has", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (fn) {
            return this.handlers.indexOf(fn) >= 0
        }
    })
    Object.defineProperty(EventHandler.prototype, "unregister", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (fn) {
            var index = this.handlers.indexOf(fn)
            if (index >= 0) {
                this.handlers.splice(index, 1)
            }
        }
    })
    Object.defineProperty(EventHandler.prototype, "clear", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.handlers.length = 0
        }
    })
    Object.defineProperty(EventHandler.prototype, "emit", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var args = []
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i]
            }
            // make a copy just in case it changes
            var handlers = this.handlers.slice()
            handlers.forEach(function (f) {
                return f.apply(void 0, __spread(args))
            })
        }
    })
    return EventHandler
})()
/**
 * @internal
 * @hidden
 */
var EventHandlers = /** @class */ (function () {
    function EventHandlers() {
        Object.defineProperty(this, "eventHandlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
    }
    Object.defineProperty(EventHandlers.prototype, "hasSubscribers", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event) {
            var handler = this.eventHandlers && this.eventHandlers[event]
            return !!handler && handler.hasSubscribers
        }
    })
    Object.defineProperty(EventHandlers.prototype, "register", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event, fn, atTheBeginning) {
            if (atTheBeginning === void 0) {
                atTheBeginning = false
            }
            if (!this.eventHandlers) {
                this.eventHandlers = {}
            }
            var handler = this.eventHandlers[event]
            if (!handler) {
                handler = this.eventHandlers[event] = new EventHandler()
            }
            return handler.register(fn, atTheBeginning)
        }
    })
    Object.defineProperty(EventHandlers.prototype, "has", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event, fn) {
            var handler = this.eventHandlers && this.eventHandlers[event]
            return !!handler && handler.has(fn)
        }
    })
    Object.defineProperty(EventHandlers.prototype, "unregister", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event, fn) {
            var handler = this.eventHandlers && this.eventHandlers[event]
            if (handler) {
                handler.unregister(fn)
            }
        }
    })
    Object.defineProperty(EventHandlers.prototype, "clear", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event) {
            if (this.eventHandlers) {
                delete this.eventHandlers[event]
            }
        }
    })
    Object.defineProperty(EventHandlers.prototype, "clearAll", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.eventHandlers = undefined
        }
    })
    Object.defineProperty(EventHandlers.prototype, "emit", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event) {
            var _a
            var args = []
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i]
            }
            var handler = this.eventHandlers && this.eventHandlers[event]
            if (handler) {
                ;(_a = handler).emit.apply(_a, __spread(args))
            }
        }
    })
    return EventHandlers
})()
/**
 * @internal
 * @hidden
 */
function argsToArray(args) {
    var res = new Array(args.length)
    for (var i = 0; i < args.length; i++) res[i] = args[i]
    return res
}
/**
 * @internal
 * @hidden
 */
function stringStartsWith(str, beginning) {
    return str.indexOf(beginning) === 0
}
/**
 * @internal
 * @hidden
 */
var deprecated = function (id, message) {
    // skip if running production
    return
}
deprecated.ids = {}
/**
 * @internal
 * @hidden
 */
function warnError(msg) {
    console.warn(new Error("[mobx-state-tree] " + msg))
}
/**
 * @internal
 * @hidden
 */
function setImmediateWithFallback(fn) {
    if (typeof queueMicrotask === "function") {
        queueMicrotask(fn)
    } else if (typeof setImmediate === "function") {
        setImmediate(fn)
    } else {
        setTimeout(fn, 1)
    }
}

/**
 * See [asynchronous actions](concepts/async-actions.md).
 *
 * @returns The flow as a promise.
 */
function flow(generator) {
    return createFlowSpawner(generator.name, generator)
}
/**
 * @deprecated Not needed since TS3.6.
 * Used for TypeScript to make flows that return a promise return the actual promise result.
 *
 * @param val
 * @returns
 */
function castFlowReturn(val) {
    return val
}
/**
 * @experimental
 * experimental api - might change on minor/patch releases
 *
 * Convert a promise-returning function to a generator-returning one.
 * This is intended to allow for usage of `yield*` in async actions to
 * retain the promise return type.
 *
 * Example:
 * ```ts
 * function getDataAsync(input: string): Promise<number> { ... }
 * const getDataGen = toGeneratorFunction(getDataAsync);
 *
 * const someModel.actions(self => ({
 *   someAction: flow(function*() {
 *     // value is typed as number
 *     const value = yield* getDataGen("input value");
 *     ...
 *   })
 * }))
 * ```
 */
function toGeneratorFunction(p) {
    return function () {
        var _i
        var args = []
        for (_i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i]
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, p.apply(void 0, __spread(args))]
                case 1:
                    return [2 /*return*/, _a.sent()]
            }
        })
    }
}
/**
 * @experimental
 * experimental api - might change on minor/patch releases
 *
 * Convert a promise to a generator yielding that promise
 * This is intended to allow for usage of `yield*` in async actions to
 * retain the promise return type.
 *
 * Example:
 * ```ts
 * function getDataAsync(input: string): Promise<number> { ... }
 *
 * const someModel.actions(self => ({
 *   someAction: flow(function*() {
 *     // value is typed as number
 *     const value = yield* toGenerator(getDataAsync("input value"));
 *     ...
 *   })
 * }))
 * ```
 */
function toGenerator(p) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                return [4 /*yield*/, p]
            case 1:
                return [2 /*return*/, _a.sent()]
        }
    })
}
/**
 * @internal
 * @hidden
 */
function createFlowSpawner(name, generator) {
    var spawner = function flowSpawner() {
        // Implementation based on https://github.com/tj/co/blob/master/index.js
        var runId = getNextActionId()
        var parentContext = getCurrentActionContext()
        if (!parentContext) {
            throw fail("a mst flow must always have a parent context")
        }
        var parentActionContext = getParentActionContext(parentContext)
        if (!parentActionContext) {
            throw fail("a mst flow must always have a parent action context")
        }
        var contextBase = {
            name: name,
            id: runId,
            tree: parentContext.tree,
            context: parentContext.context,
            parentId: parentContext.id,
            allParentIds: __spread(parentContext.allParentIds, [parentContext.id]),
            rootId: parentContext.rootId,
            parentEvent: parentContext,
            parentActionEvent: parentActionContext
        }
        var args = arguments
        function wrap(fn, type, arg) {
            fn.$mst_middleware = spawner.$mst_middleware // pick up any middleware attached to the flow
            runWithActionContext(
                __assign(__assign({}, contextBase), { type: type, args: [arg] }),
                fn
            )
        }
        return new Promise(function (resolve, reject) {
            var gen
            var init = function asyncActionInit() {
                gen = generator.apply(null, arguments)
                onFulfilled(undefined) // kick off the flow
            }
            init.$mst_middleware = spawner.$mst_middleware
            runWithActionContext(
                __assign(__assign({}, contextBase), {
                    type: "flow_spawn",
                    args: argsToArray(args)
                }),
                init
            )
            function onFulfilled(res) {
                var ret
                try {
                    // prettier-ignore
                    wrap(function (r) { ret = gen.next(r); }, "flow_resume", res);
                } catch (e) {
                    // prettier-ignore
                    setImmediateWithFallback(function () {
                        wrap(function (r) { reject(e); }, "flow_throw", e);
                    });
                    return
                }
                next(ret)
                return
            }
            function onRejected(err) {
                var ret
                try {
                    // prettier-ignore
                    wrap(function (r) { ret = gen.throw(r); }, "flow_resume_error", err); // or yieldError?
                } catch (e) {
                    // prettier-ignore
                    setImmediateWithFallback(function () {
                        wrap(function (r) { reject(e); }, "flow_throw", e);
                    });
                    return
                }
                next(ret)
            }
            function next(ret) {
                if (ret.done) {
                    // prettier-ignore
                    setImmediateWithFallback(function () {
                        wrap(function (r) { resolve(r); }, "flow_return", ret.value);
                    });
                    return
                }
                // TODO: support more type of values? See https://github.com/tj/co/blob/249bbdc72da24ae44076afd716349d2089b31c4c/index.js#L100
                if (!ret.value || typeof ret.value.then !== "function") {
                    // istanbul ignore next
                    throw fail("Only promises can be yielded to `async`, got: " + ret)
                }
                return ret.value.then(onFulfilled, onRejected)
            }
        })
    }
    return spawner
}

/**
 * @internal
 * @hidden
 */
function splitPatch(patch) {
    if (!("oldValue" in patch)) throw fail("Patches without `oldValue` field cannot be inversed")
    return [stripPatch(patch), invertPatch(patch)]
}
/**
 * @internal
 * @hidden
 */
function stripPatch(patch) {
    // strips `oldvalue` information from the patch, so that it becomes a patch conform the json-patch spec
    // this removes the ability to undo the patch
    switch (patch.op) {
        case "add":
            return { op: "add", path: patch.path, value: patch.value }
        case "remove":
            return { op: "remove", path: patch.path }
        case "replace":
            return { op: "replace", path: patch.path, value: patch.value }
    }
}
function invertPatch(patch) {
    switch (patch.op) {
        case "add":
            return {
                op: "remove",
                path: patch.path
            }
        case "remove":
            return {
                op: "add",
                path: patch.path,
                value: patch.oldValue
            }
        case "replace":
            return {
                op: "replace",
                path: patch.path,
                value: patch.oldValue
            }
    }
}
/**
 * Simple simple check to check it is a number.
 */
function isNumber(x) {
    return typeof x === "number"
}
/**
 * Escape slashes and backslashes.
 *
 * http://tools.ietf.org/html/rfc6901
 */
function escapeJsonPath(path) {
    if (isNumber(path) === true) {
        return "" + path
    }
    if (path.indexOf("/") === -1 && path.indexOf("~") === -1) return path
    return path.replace(/~/g, "~0").replace(/\//g, "~1")
}
/**
 * Unescape slashes and backslashes.
 */
function unescapeJsonPath(path) {
    return path.replace(/~1/g, "/").replace(/~0/g, "~")
}
/**
 * Generates a json-path compliant json path from path parts.
 *
 * @param path
 * @returns
 */
function joinJsonPath(path) {
    // `/` refers to property with an empty name, while `` refers to root itself!
    if (path.length === 0) return ""
    var getPathStr = function (p) {
        return p.map(escapeJsonPath).join("/")
    }
    if (path[0] === "." || path[0] === "..") {
        // relative
        return getPathStr(path)
    } else {
        // absolute
        return "/" + getPathStr(path)
    }
}
/**
 * Splits and decodes a json path into several parts.
 *
 * @param path
 * @returns
 */
function splitJsonPath(path) {
    // `/` refers to property with an empty name, while `` refers to root itself!
    var parts = path.split("/").map(unescapeJsonPath)
    var valid =
        path === "" ||
        path === "." ||
        path === ".." ||
        stringStartsWith(path, "/") ||
        stringStartsWith(path, "./") ||
        stringStartsWith(path, "../")
    if (!valid) {
        throw fail("a json path must be either rooted, empty or relative, but got '" + path + "'")
    }
    // '/a/b/c' -> ["a", "b", "c"]
    // '../../b/c' -> ["..", "..", "b", "c"]
    // '' -> []
    // '/' -> ['']
    // './a' -> [".", "a"]
    // /./a' -> [".", "a"] equivalent to './a'
    if (parts[0] === "") {
        parts.shift()
    }
    return parts
}

/** @hidden */
var $preProcessorFailed = Symbol("$preProcessorFailed")
var SnapshotProcessor = /** @class */ (function (_super) {
    __extends(SnapshotProcessor, _super)
    function SnapshotProcessor(_subtype, _processors, name) {
        var _this = _super.call(this, name || _subtype.name) || this
        Object.defineProperty(_this, "_subtype", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _subtype
        })
        Object.defineProperty(_this, "_processors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _processors
        })
        return _this
    }
    Object.defineProperty(SnapshotProcessor.prototype, "flags", {
        get: function () {
            return this._subtype.flags | TypeFlags.SnapshotProcessor
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(SnapshotProcessor.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return "snapshotProcessor(" + this._subtype.describe() + ")"
        }
    })
    Object.defineProperty(SnapshotProcessor.prototype, "preProcessSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (sn) {
            if (this._processors.preProcessor) {
                return this._processors.preProcessor.call(null, sn)
            }
            return sn
        }
    })
    Object.defineProperty(SnapshotProcessor.prototype, "preProcessSnapshotSafe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (sn) {
            try {
                return this.preProcessSnapshot(sn)
            } catch (e) {
                return $preProcessorFailed
            }
        }
    })
    Object.defineProperty(SnapshotProcessor.prototype, "postProcessSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (sn) {
            if (this._processors.postProcessor) {
                return this._processors.postProcessor.call(null, sn)
            }
            return sn
        }
    })
    Object.defineProperty(SnapshotProcessor.prototype, "_fixNode", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            var _this = this
            // the node has to use these methods rather than the original type ones
            proxyNodeTypeMethods(node.type, this, "create")
            var oldGetSnapshot = node.getSnapshot
            node.getSnapshot = function () {
                return _this.postProcessSnapshot(oldGetSnapshot.call(node))
            }
            node.getReconciliationType = function () {
                return _this
            }
        }
    })
    Object.defineProperty(SnapshotProcessor.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, initialValue) {
            var processedInitialValue = isStateTreeNode(initialValue)
                ? initialValue
                : this.preProcessSnapshot(initialValue)
            var node = this._subtype.instantiate(
                parent,
                subpath,
                environment,
                processedInitialValue
            )
            this._fixNode(node)
            return node
        }
    })
    Object.defineProperty(SnapshotProcessor.prototype, "reconcile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, newValue, parent, subpath) {
            var node = this._subtype.reconcile(
                current,
                isStateTreeNode(newValue) ? newValue : this.preProcessSnapshot(newValue),
                parent,
                subpath
            )
            if (node !== current) {
                this._fixNode(node)
            }
            return node
        }
    })
    Object.defineProperty(SnapshotProcessor.prototype, "getSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, applyPostProcess) {
            if (applyPostProcess === void 0) {
                applyPostProcess = true
            }
            var sn = this._subtype.getSnapshot(node)
            return applyPostProcess ? this.postProcessSnapshot(sn) : sn
        }
    })
    Object.defineProperty(SnapshotProcessor.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            var processedSn = this.preProcessSnapshotSafe(value)
            if (processedSn === $preProcessorFailed) {
                return typeCheckFailure(context, value, "Failed to preprocess value")
            }
            return this._subtype.validate(processedSn, context)
        }
    })
    Object.defineProperty(SnapshotProcessor.prototype, "getSubTypes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this._subtype
        }
    })
    Object.defineProperty(SnapshotProcessor.prototype, "is", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (thing) {
            var value = isType(thing)
                ? this._subtype
                : isStateTreeNode(thing)
                ? getSnapshot(thing, false)
                : this.preProcessSnapshotSafe(thing)
            if (value === $preProcessorFailed) {
                return false
            }
            return this._subtype.validate(value, [{ path: "", type: this._subtype }]).length === 0
        }
    })
    Object.defineProperty(SnapshotProcessor.prototype, "isAssignableFrom", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (type) {
            return this._subtype.isAssignableFrom(type)
        }
    })
    Object.defineProperty(SnapshotProcessor.prototype, "isMatchingSnapshotId", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, snapshot) {
            if (!(this._subtype instanceof ComplexType)) {
                return false
            }
            var processedSn = this.preProcessSnapshot(snapshot)
            return this._subtype.isMatchingSnapshotId(current, processedSn)
        }
    })
    return SnapshotProcessor
})(BaseType)
function proxyNodeTypeMethods(nodeType, snapshotProcessorType) {
    var e_1, _a
    var methods = []
    for (var _i = 2; _i < arguments.length; _i++) {
        methods[_i - 2] = arguments[_i]
    }
    try {
        for (
            var methods_1 = __values(methods), methods_1_1 = methods_1.next();
            !methods_1_1.done;
            methods_1_1 = methods_1.next()
        ) {
            var method = methods_1_1.value
            nodeType[method] = snapshotProcessorType[method].bind(snapshotProcessorType)
        }
    } catch (e_1_1) {
        e_1 = { error: e_1_1 }
    } finally {
        try {
            if (methods_1_1 && !methods_1_1.done && (_a = methods_1.return)) _a.call(methods_1)
        } finally {
            if (e_1) throw e_1.error
        }
    }
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
function snapshotProcessor(type, processors, name) {
    return new SnapshotProcessor(type, processors, name)
}

var needsIdentifierError =
    "Map.put can only be used to store complex values that have an identifier type attribute"
function tryCollectModelTypes(type, modelTypes) {
    var e_1, _a
    var subtypes = type.getSubTypes()
    if (subtypes === cannotDetermineSubtype) {
        return false
    }
    if (subtypes) {
        var subtypesArray = asArray(subtypes)
        try {
            for (
                var subtypesArray_1 = __values(subtypesArray),
                    subtypesArray_1_1 = subtypesArray_1.next();
                !subtypesArray_1_1.done;
                subtypesArray_1_1 = subtypesArray_1.next()
            ) {
                var subtype = subtypesArray_1_1.value
                if (!tryCollectModelTypes(subtype, modelTypes)) return false
            }
        } catch (e_1_1) {
            e_1 = { error: e_1_1 }
        } finally {
            try {
                if (subtypesArray_1_1 && !subtypesArray_1_1.done && (_a = subtypesArray_1.return))
                    _a.call(subtypesArray_1)
            } finally {
                if (e_1) throw e_1.error
            }
        }
    }
    if (type instanceof ModelType) {
        modelTypes.push(type)
    }
    return true
}
/**
 * @internal
 * @hidden
 */
var MapIdentifierMode
;(function (MapIdentifierMode) {
    MapIdentifierMode[(MapIdentifierMode["UNKNOWN"] = 0)] = "UNKNOWN"
    MapIdentifierMode[(MapIdentifierMode["YES"] = 1)] = "YES"
    MapIdentifierMode[(MapIdentifierMode["NO"] = 2)] = "NO"
})(MapIdentifierMode || (MapIdentifierMode = {}))
var MSTMap = /** @class */ (function (_super) {
    __extends(MSTMap, _super)
    function MSTMap(initialData) {
        return _super.call(this, initialData, mobx.observable.ref.enhancer) || this
    }
    Object.defineProperty(MSTMap.prototype, "get", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (key) {
            // maybe this is over-enthousiastic? normalize numeric keys to strings
            return _super.prototype.get.call(this, "" + key)
        }
    })
    Object.defineProperty(MSTMap.prototype, "has", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (key) {
            return _super.prototype.has.call(this, "" + key)
        }
    })
    Object.defineProperty(MSTMap.prototype, "delete", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (key) {
            return _super.prototype.delete.call(this, "" + key)
        }
    })
    Object.defineProperty(MSTMap.prototype, "set", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (key, value) {
            return _super.prototype.set.call(this, "" + key, value)
        }
    })
    Object.defineProperty(MSTMap.prototype, "put", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value) {
            if (!value) throw fail("Map.put cannot be used to set empty values")
            if (isStateTreeNode(value)) {
                var node = getStateTreeNode(value)
                if (node.identifier === null) {
                    throw fail(needsIdentifierError)
                }
                this.set(node.identifier, value)
                return value
            } else if (!isMutable(value)) {
                throw fail("Map.put can only be used to store complex values")
            } else {
                var mapNode = getStateTreeNode(this)
                var mapType = mapNode.type
                if (mapType.identifierMode !== MapIdentifierMode.YES) {
                    throw fail(needsIdentifierError)
                }
                var idAttr = mapType.mapIdentifierAttribute
                var id = value[idAttr]
                if (!isValidIdentifier(id)) {
                    // try again but this time after creating a node for the value
                    // since it might be an optional identifier
                    var newNode = this.put(
                        mapType.getChildType().create(value, mapNode.environment)
                    )
                    return this.put(getSnapshot(newNode))
                }
                var key = normalizeIdentifier(id)
                this.set(key, value)
                return this.get(key)
            }
        }
    })
    return MSTMap
})(mobx.ObservableMap)
/**
 * @internal
 * @hidden
 */
var MapType = /** @class */ (function (_super) {
    __extends(MapType, _super)
    function MapType(name, _subType, hookInitializers) {
        if (hookInitializers === void 0) {
            hookInitializers = []
        }
        var _this = _super.call(this, name) || this
        Object.defineProperty(_this, "_subType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _subType
        })
        Object.defineProperty(_this, "identifierMode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: MapIdentifierMode.UNKNOWN
        })
        Object.defineProperty(_this, "mapIdentifierAttribute", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        })
        Object.defineProperty(_this, "flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: TypeFlags.Map
        })
        Object.defineProperty(_this, "hookInitializers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        })
        _this._determineIdentifierMode()
        _this.hookInitializers = hookInitializers
        return _this
    }
    Object.defineProperty(MapType.prototype, "hooks", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (hooks) {
            var hookInitializers =
                this.hookInitializers.length > 0 ? this.hookInitializers.concat(hooks) : [hooks]
            return new MapType(this.name, this._subType, hookInitializers)
        }
    })
    Object.defineProperty(MapType.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, initialValue) {
            this._determineIdentifierMode()
            return createObjectNode(this, parent, subpath, environment, initialValue)
        }
    })
    Object.defineProperty(MapType.prototype, "_determineIdentifierMode", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (this.identifierMode !== MapIdentifierMode.UNKNOWN) {
                return
            }
            var modelTypes = []
            if (tryCollectModelTypes(this._subType, modelTypes)) {
                var identifierAttribute_1 = undefined
                modelTypes.forEach(function (type) {
                    if (type.identifierAttribute) {
                        if (
                            identifierAttribute_1 &&
                            identifierAttribute_1 !== type.identifierAttribute
                        ) {
                            throw fail(
                                "The objects in a map should all have the same identifier attribute, expected '" +
                                    identifierAttribute_1 +
                                    "', but child of type '" +
                                    type.name +
                                    "' declared attribute '" +
                                    type.identifierAttribute +
                                    "' as identifier"
                            )
                        }
                        identifierAttribute_1 = type.identifierAttribute
                    }
                })
                if (identifierAttribute_1) {
                    this.identifierMode = MapIdentifierMode.YES
                    this.mapIdentifierAttribute = identifierAttribute_1
                } else {
                    this.identifierMode = MapIdentifierMode.NO
                }
            }
        }
    })
    Object.defineProperty(MapType.prototype, "initializeChildNodes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (objNode, initialSnapshot) {
            if (initialSnapshot === void 0) {
                initialSnapshot = {}
            }
            var subType = objNode.type._subType
            var result = {}
            Object.keys(initialSnapshot).forEach(function (name) {
                result[name] = subType.instantiate(objNode, name, undefined, initialSnapshot[name])
            })
            return result
        }
    })
    Object.defineProperty(MapType.prototype, "createNewInstance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (childNodes) {
            return new MSTMap(childNodes)
        }
    })
    Object.defineProperty(MapType.prototype, "finalizeNewInstance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, instance) {
            mobx._interceptReads(instance, node.unbox)
            var type = node.type
            type.hookInitializers.forEach(function (initializer) {
                var hooks = initializer(instance)
                Object.keys(hooks).forEach(function (name) {
                    var hook = hooks[name]
                    var actionInvoker = createActionInvoker(instance, name, hook)
                    addHiddenFinalProp(instance, name, actionInvoker)
                })
            })
            mobx.intercept(instance, this.willChange)
            mobx.observe(instance, this.didChange)
        }
    })
    Object.defineProperty(MapType.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return "Map<string, " + this._subType.describe() + ">"
        }
    })
    Object.defineProperty(MapType.prototype, "getChildren", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            // return (node.storedValue as ObservableMap<any>).values()
            return mobx.values(node.storedValue)
        }
    })
    Object.defineProperty(MapType.prototype, "getChildNode", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, key) {
            var childNode = node.storedValue.get("" + key)
            if (!childNode) throw fail("Not a child " + key)
            return childNode
        }
    })
    Object.defineProperty(MapType.prototype, "willChange", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (change) {
            var node = getStateTreeNode(change.object)
            var key = change.name
            node.assertWritable({ subpath: key })
            var mapType = node.type
            var subType = mapType._subType
            switch (change.type) {
                case "update":
                    {
                        var newValue = change.newValue
                        var oldValue = change.object.get(key)
                        if (newValue === oldValue) return null
                        change.newValue = subType.reconcile(
                            node.getChildNode(key),
                            change.newValue,
                            node,
                            key
                        )
                        mapType.processIdentifier(key, change.newValue)
                    }
                    break
                case "add":
                    {
                        typecheckInternal(subType, change.newValue)
                        change.newValue = subType.instantiate(node, key, undefined, change.newValue)
                        mapType.processIdentifier(key, change.newValue)
                    }
                    break
            }
            return change
        }
    })
    Object.defineProperty(MapType.prototype, "processIdentifier", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (expected, node) {
            if (this.identifierMode === MapIdentifierMode.YES && node instanceof ObjectNode) {
                var identifier = node.identifier
                if (identifier !== expected)
                    throw fail(
                        "A map of objects containing an identifier should always store the object under their own identifier. Trying to store key '" +
                            identifier +
                            "', but expected: '" +
                            expected +
                            "'"
                    )
            }
        }
    })
    Object.defineProperty(MapType.prototype, "getSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            var res = {}
            node.getChildren().forEach(function (childNode) {
                res[childNode.subpath] = childNode.snapshot
            })
            return res
        }
    })
    Object.defineProperty(MapType.prototype, "processInitialSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (childNodes) {
            var processed = {}
            Object.keys(childNodes).forEach(function (key) {
                processed[key] = childNodes[key].getSnapshot()
            })
            return processed
        }
    })
    Object.defineProperty(MapType.prototype, "didChange", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (change) {
            var node = getStateTreeNode(change.object)
            switch (change.type) {
                case "update":
                    return void node.emitPatch(
                        {
                            op: "replace",
                            path: escapeJsonPath(change.name),
                            value: change.newValue.snapshot,
                            oldValue: change.oldValue ? change.oldValue.snapshot : undefined
                        },
                        node
                    )
                case "add":
                    return void node.emitPatch(
                        {
                            op: "add",
                            path: escapeJsonPath(change.name),
                            value: change.newValue.snapshot,
                            oldValue: undefined
                        },
                        node
                    )
                case "delete":
                    // a node got deleted, get the old snapshot and make the node die
                    var oldSnapshot = change.oldValue.snapshot
                    change.oldValue.die()
                    // emit the patch
                    return void node.emitPatch(
                        {
                            op: "remove",
                            path: escapeJsonPath(change.name),
                            oldValue: oldSnapshot
                        },
                        node
                    )
            }
        }
    })
    Object.defineProperty(MapType.prototype, "applyPatchLocally", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, subpath, patch) {
            var target = node.storedValue
            switch (patch.op) {
                case "add":
                case "replace":
                    target.set(subpath, patch.value)
                    break
                case "remove":
                    target.delete(subpath)
                    break
            }
        }
    })
    Object.defineProperty(MapType.prototype, "applySnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, snapshot) {
            var target = node.storedValue
            var currentKeys = {}
            Array.from(target.keys()).forEach(function (key) {
                currentKeys[key] = false
            })
            if (snapshot) {
                // Don't use target.replace, as it will throw away all existing items first
                for (var key in snapshot) {
                    target.set(key, snapshot[key])
                    currentKeys["" + key] = true
                }
            }
            Object.keys(currentKeys).forEach(function (key) {
                if (currentKeys[key] === false) target.delete(key)
            })
        }
    })
    Object.defineProperty(MapType.prototype, "getChildType", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this._subType
        }
    })
    Object.defineProperty(MapType.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            var _this = this
            if (!isPlainObject(value)) {
                return typeCheckFailure(context, value, "Value is not a plain object")
            }
            return flattenTypeErrors(
                Object.keys(value).map(function (path) {
                    return _this._subType.validate(
                        value[path],
                        getContextForPath(context, path, _this._subType)
                    )
                })
            )
        }
    })
    Object.defineProperty(MapType.prototype, "getDefaultSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return EMPTY_OBJECT
        }
    })
    Object.defineProperty(MapType.prototype, "removeChild", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, subpath) {
            node.storedValue.delete(subpath)
        }
    })
    return MapType
})(ComplexType)
MapType.prototype.applySnapshot = mobx.action(MapType.prototype.applySnapshot)
/**
 * `types.map` - Creates a key based collection type who's children are all of a uniform declared type.
 * If the type stored in a map has an identifier, it is mandatory to store the child under that identifier in the map.
 *
 * This type will always produce [observable maps](https://mobx.js.org/api.html#observablemap)
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   id: types.identifier,
 *   task: types.string
 * })
 *
 * const TodoStore = types.model({
 *   todos: types.map(Todo)
 * })
 *
 * const s = TodoStore.create({ todos: {} })
 * unprotect(s)
 * s.todos.set(17, { task: "Grab coffee", id: 17 })
 * s.todos.put({ task: "Grab cookie", id: 18 }) // put will infer key from the identifier
 * console.log(s.todos.get(17).task) // prints: "Grab coffee"
 * ```
 *
 * @param subtype
 * @returns
 */
function map(subtype) {
    return new MapType("map<string, " + subtype.name + ">", subtype)
}
/**
 * Returns if a given value represents a map type.
 *
 * @param type
 * @returns `true` if it is a map type.
 */
function isMapType(type) {
    return isType(type) && (type.flags & TypeFlags.Map) > 0
}

/**
 * @internal
 * @hidden
 */
var ArrayType = /** @class */ (function (_super) {
    __extends(ArrayType, _super)
    function ArrayType(name, _subType, hookInitializers) {
        if (hookInitializers === void 0) {
            hookInitializers = []
        }
        var _this = _super.call(this, name) || this
        Object.defineProperty(_this, "_subType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _subType
        })
        Object.defineProperty(_this, "flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: TypeFlags.Array
        })
        Object.defineProperty(_this, "hookInitializers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        })
        _this.hookInitializers = hookInitializers
        return _this
    }
    Object.defineProperty(ArrayType.prototype, "hooks", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (hooks) {
            var hookInitializers =
                this.hookInitializers.length > 0 ? this.hookInitializers.concat(hooks) : [hooks]
            return new ArrayType(this.name, this._subType, hookInitializers)
        }
    })
    Object.defineProperty(ArrayType.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, initialValue) {
            return createObjectNode(this, parent, subpath, environment, initialValue)
        }
    })
    Object.defineProperty(ArrayType.prototype, "initializeChildNodes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (objNode, snapshot) {
            if (snapshot === void 0) {
                snapshot = []
            }
            var subType = objNode.type._subType
            var result = {}
            snapshot.forEach(function (item, index) {
                var subpath = "" + index
                result[subpath] = subType.instantiate(objNode, subpath, undefined, item)
            })
            return result
        }
    })
    Object.defineProperty(ArrayType.prototype, "createNewInstance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (childNodes) {
            return mobx.observable.array(convertChildNodesToArray(childNodes), mobxShallow)
        }
    })
    Object.defineProperty(ArrayType.prototype, "finalizeNewInstance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, instance) {
            mobx._getAdministration(instance).dehancer = node.unbox
            var type = node.type
            type.hookInitializers.forEach(function (initializer) {
                var hooks = initializer(instance)
                Object.keys(hooks).forEach(function (name) {
                    var hook = hooks[name]
                    var actionInvoker = createActionInvoker(instance, name, hook)
                    addHiddenFinalProp(instance, name, actionInvoker)
                })
            })
            mobx.intercept(instance, this.willChange)
            mobx.observe(instance, this.didChange)
        }
    })
    Object.defineProperty(ArrayType.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this._subType.describe() + "[]"
        }
    })
    Object.defineProperty(ArrayType.prototype, "getChildren", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            return node.storedValue.slice()
        }
    })
    Object.defineProperty(ArrayType.prototype, "getChildNode", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, key) {
            var index = Number(key)
            if (index < node.storedValue.length) return node.storedValue[index]
            throw fail("Not a child: " + key)
        }
    })
    Object.defineProperty(ArrayType.prototype, "willChange", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (change) {
            var node = getStateTreeNode(change.object)
            node.assertWritable({ subpath: "" + change.index })
            var subType = node.type._subType
            var childNodes = node.getChildren()
            switch (change.type) {
                case "update":
                    {
                        if (change.newValue === change.object[change.index]) return null
                        var updatedNodes = reconcileArrayChildren(
                            node,
                            subType,
                            [childNodes[change.index]],
                            [change.newValue],
                            [change.index]
                        )
                        if (!updatedNodes) {
                            return null
                        }
                        change.newValue = updatedNodes[0]
                    }
                    break
                case "splice":
                    {
                        var index_1 = change.index,
                            removedCount = change.removedCount,
                            added = change.added
                        var addedNodes = reconcileArrayChildren(
                            node,
                            subType,
                            childNodes.slice(index_1, index_1 + removedCount),
                            added,
                            added.map(function (_, i) {
                                return index_1 + i
                            })
                        )
                        if (!addedNodes) {
                            return null
                        }
                        change.added = addedNodes
                        // update paths of remaining items
                        for (var i = index_1 + removedCount; i < childNodes.length; i++) {
                            childNodes[i].setParent(node, "" + (i + added.length - removedCount))
                        }
                    }
                    break
            }
            return change
        }
    })
    Object.defineProperty(ArrayType.prototype, "getSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            return node.getChildren().map(function (childNode) {
                return childNode.snapshot
            })
        }
    })
    Object.defineProperty(ArrayType.prototype, "processInitialSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (childNodes) {
            var processed = []
            Object.keys(childNodes).forEach(function (key) {
                processed.push(childNodes[key].getSnapshot())
            })
            return processed
        }
    })
    Object.defineProperty(ArrayType.prototype, "didChange", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (change) {
            var node = getStateTreeNode(change.object)
            switch (change.type) {
                case "update":
                    return void node.emitPatch(
                        {
                            op: "replace",
                            path: "" + change.index,
                            value: change.newValue.snapshot,
                            oldValue: change.oldValue ? change.oldValue.snapshot : undefined
                        },
                        node
                    )
                case "splice":
                    for (var i = change.removedCount - 1; i >= 0; i--)
                        node.emitPatch(
                            {
                                op: "remove",
                                path: "" + (change.index + i),
                                oldValue: change.removed[i].snapshot
                            },
                            node
                        )
                    for (var i = 0; i < change.addedCount; i++)
                        node.emitPatch(
                            {
                                op: "add",
                                path: "" + (change.index + i),
                                value: node.getChildNode("" + (change.index + i)).snapshot,
                                oldValue: undefined
                            },
                            node
                        )
                    return
            }
        }
    })
    Object.defineProperty(ArrayType.prototype, "applyPatchLocally", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, subpath, patch) {
            var target = node.storedValue
            var index = subpath === "-" ? target.length : Number(subpath)
            switch (patch.op) {
                case "replace":
                    target[index] = patch.value
                    break
                case "add":
                    target.splice(index, 0, patch.value)
                    break
                case "remove":
                    target.splice(index, 1)
                    break
            }
        }
    })
    Object.defineProperty(ArrayType.prototype, "applySnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, snapshot) {
            var target = node.storedValue
            target.replace(snapshot)
        }
    })
    Object.defineProperty(ArrayType.prototype, "getChildType", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this._subType
        }
    })
    Object.defineProperty(ArrayType.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            var _this = this
            if (!isArray(value)) {
                return typeCheckFailure(context, value, "Value is not an array")
            }
            return flattenTypeErrors(
                value.map(function (item, index) {
                    return _this._subType.validate(
                        item,
                        getContextForPath(context, "" + index, _this._subType)
                    )
                })
            )
        }
    })
    Object.defineProperty(ArrayType.prototype, "getDefaultSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return EMPTY_ARRAY
        }
    })
    Object.defineProperty(ArrayType.prototype, "removeChild", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, subpath) {
            node.storedValue.splice(Number(subpath), 1)
        }
    })
    return ArrayType
})(ComplexType)
ArrayType.prototype.applySnapshot = mobx.action(ArrayType.prototype.applySnapshot)
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
function array(subtype) {
    return new ArrayType(subtype.name + "[]", subtype)
}
function reconcileArrayChildren(parent, childType, oldNodes, newValues, newPaths) {
    var nothingChanged = true
    for (var i = 0; ; i++) {
        var hasNewNode = i <= newValues.length - 1
        var oldNode = oldNodes[i]
        var newValue = hasNewNode ? newValues[i] : undefined
        var newPath = "" + newPaths[i]
        // for some reason, instead of newValue we got a node, fallback to the storedValue
        // TODO: https://github.com/mobxjs/mobx-state-tree/issues/340#issuecomment-325581681
        if (isNode(newValue)) newValue = newValue.storedValue
        if (!oldNode && !hasNewNode) {
            // both are empty, end
            break
        } else if (!hasNewNode) {
            // new one does not exists
            nothingChanged = false
            oldNodes.splice(i, 1)
            if (oldNode instanceof ObjectNode) {
                // since it is going to be returned by pop/splice/shift better create it before killing it
                // so it doesn't end up in an undead state
                oldNode.createObservableInstanceIfNeeded()
            }
            oldNode.die()
            i--
        } else if (!oldNode) {
            // there is no old node, create it
            // check if already belongs to the same parent. if so, avoid pushing item in. only swapping can occur.
            if (isStateTreeNode(newValue) && getStateTreeNode(newValue).parent === parent) {
                // this node is owned by this parent, but not in the reconcilable set, so it must be double
                throw fail(
                    "Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '" +
                        parent.path +
                        "/" +
                        newPath +
                        "', but it lives already at '" +
                        getStateTreeNode(newValue).path +
                        "'"
                )
            }
            nothingChanged = false
            var newNode = valueAsNode(childType, parent, newPath, newValue)
            oldNodes.splice(i, 0, newNode)
        } else if (areSame(oldNode, newValue)) {
            // both are the same, reconcile
            oldNodes[i] = valueAsNode(childType, parent, newPath, newValue, oldNode)
        } else {
            // nothing to do, try to reorder
            var oldMatch = undefined
            // find a possible candidate to reuse
            for (var j = i; j < oldNodes.length; j++) {
                if (areSame(oldNodes[j], newValue)) {
                    oldMatch = oldNodes.splice(j, 1)[0]
                    break
                }
            }
            nothingChanged = false
            var newNode = valueAsNode(childType, parent, newPath, newValue, oldMatch)
            oldNodes.splice(i, 0, newNode)
        }
    }
    return nothingChanged ? null : oldNodes
}
/**
 * Convert a value to a node at given parent and subpath. Attempts to reuse old node if possible and given.
 */
function valueAsNode(childType, parent, subpath, newValue, oldNode) {
    function getNewNode() {
        // the new value has a MST node
        if (isStateTreeNode(newValue)) {
            var childNode = getStateTreeNode(newValue)
            childNode.assertAlive(EMPTY_OBJECT)
            // the node lives here
            if (childNode.parent !== null && childNode.parent === parent) {
                childNode.setParent(parent, subpath)
                return childNode
            }
        }
        // there is old node and new one is a value/snapshot
        if (oldNode) {
            return childType.reconcile(oldNode, newValue, parent, subpath)
        }
        // nothing to do, create from scratch
        return childType.instantiate(parent, subpath, undefined, newValue)
    }
    var newNode = getNewNode()
    if (oldNode && oldNode !== newNode) {
        if (oldNode instanceof ObjectNode) {
            // since it is going to be returned by pop/splice/shift better create it before killing it
            // so it doesn't end up in an undead state
            oldNode.createObservableInstanceIfNeeded()
        }
        oldNode.die()
    }
    return newNode
}
/**
 * Check if a node holds a value.
 */
function areSame(oldNode, newValue) {
    // never consider dead old nodes for reconciliation
    if (!oldNode.isAlive) {
        return false
    }
    // the new value has the same node
    if (isStateTreeNode(newValue)) {
        var newNode = getStateTreeNode(newValue)
        return newNode.isAlive && newNode === oldNode
    }
    // the provided value is the snapshot of the old node
    if (oldNode.snapshot === newValue) {
        return true
    }
    // Non object nodes don't get reconciled
    if (!(oldNode instanceof ObjectNode)) {
        return false
    }
    var oldNodeType = oldNode.getReconciliationType()
    // new value is a snapshot with the correct identifier
    return (
        oldNode.identifier !== null &&
        oldNode.identifierAttribute &&
        isPlainObject(newValue) &&
        oldNodeType.is(newValue) &&
        oldNodeType.isMatchingSnapshotId(oldNode, newValue)
    )
}
/**
 * Returns if a given value represents an array type.
 *
 * @param type
 * @returns `true` if the type is an array type.
 */
function isArrayType(type) {
    return isType(type) && (type.flags & TypeFlags.Array) > 0
}

var PRE_PROCESS_SNAPSHOT = "preProcessSnapshot"
var POST_PROCESS_SNAPSHOT = "postProcessSnapshot"
function objectTypeToString() {
    return getStateTreeNode(this).toString()
}
var defaultObjectOptions = {
    name: "AnonymousModel",
    properties: {},
    initializers: EMPTY_ARRAY
}
function toPropertiesObject(declaredProps) {
    // loop through properties and ensures that all items are types
    return Object.keys(declaredProps).reduce(function (props, key) {
        var _a, _b, _c
        // warn if user intended a HOOK
        if (key in Hook)
            throw fail(
                "Hook '" +
                    key +
                    "' was defined as property. Hooks should be defined as part of the actions"
            )
        // the user intended to use a view
        var descriptor = Object.getOwnPropertyDescriptor(props, key)
        if ("get" in descriptor) {
            throw fail("Getters are not supported as properties. Please use views instead")
        }
        // undefined and null are not valid
        var value = descriptor.value
        if (value === null || value === undefined) {
            throw fail(
                "The default value of an attribute cannot be null or undefined as the type cannot be inferred. Did you mean `types.maybe(someType)`?"
            )
            // its a primitive, convert to its type
        } else if (isPrimitive(value)) {
            return Object.assign(
                {},
                props,
                ((_a = {}), (_a[key] = optional(getPrimitiveFactoryFromValue(value), value)), _a)
            )
            // map defaults to empty object automatically for models
        } else if (value instanceof MapType) {
            return Object.assign({}, props, ((_b = {}), (_b[key] = optional(value, {})), _b))
        } else if (value instanceof ArrayType) {
            return Object.assign({}, props, ((_c = {}), (_c[key] = optional(value, [])), _c))
            // its already a type
        } else if (isType(value)) {
            return props
            // its a function, maybe the user wanted a view?
        } else {
            throw fail(
                "Invalid type definition for property '" +
                    key +
                    "', cannot infer a type from a value like '" +
                    value +
                    "' (" +
                    typeof value +
                    ")"
            )
        }
    }, declaredProps)
}
/**
 * @internal
 * @hidden
 */
var ModelType = /** @class */ (function (_super) {
    __extends(ModelType, _super)
    function ModelType(opts) {
        var _this = _super.call(this, opts.name || defaultObjectOptions.name) || this
        Object.defineProperty(_this, "flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: TypeFlags.Object
        })
        /*
         * The original object definition
         */
        Object.defineProperty(_this, "initializers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "properties", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "preProcessor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "postProcessor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "propertyNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "named", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function (name) {
                return _this.cloneAndEnhance({ name: name })
            }
        })
        Object.defineProperty(_this, "props", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function (properties) {
                return _this.cloneAndEnhance({ properties: properties })
            }
        })
        Object.defineProperty(_this, "preProcessSnapshot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function (preProcessor) {
                var currentPreprocessor = _this.preProcessor
                if (!currentPreprocessor)
                    return _this.cloneAndEnhance({ preProcessor: preProcessor })
                else
                    return _this.cloneAndEnhance({
                        preProcessor: function (snapshot) {
                            return currentPreprocessor(preProcessor(snapshot))
                        }
                    })
            }
        })
        Object.defineProperty(_this, "postProcessSnapshot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function (postProcessor) {
                var currentPostprocessor = _this.postProcessor
                if (!currentPostprocessor)
                    return _this.cloneAndEnhance({ postProcessor: postProcessor })
                else
                    return _this.cloneAndEnhance({
                        postProcessor: function (snapshot) {
                            return postProcessor(currentPostprocessor(snapshot))
                        }
                    })
            }
        })
        Object.assign(_this, defaultObjectOptions, opts)
        // ensures that any default value gets converted to its related type
        _this.properties = toPropertiesObject(_this.properties)
        freeze(_this.properties) // make sure nobody messes with it
        _this.propertyNames = Object.keys(_this.properties)
        _this.identifierAttribute = _this._getIdentifierAttribute()
        return _this
    }
    Object.defineProperty(ModelType.prototype, "_getIdentifierAttribute", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var identifierAttribute = undefined
            this.forAllProps(function (propName, propType) {
                if (propType.flags & TypeFlags.Identifier) {
                    if (identifierAttribute)
                        throw fail(
                            "Cannot define property '" +
                                propName +
                                "' as object identifier, property '" +
                                identifierAttribute +
                                "' is already defined as identifier property"
                        )
                    identifierAttribute = propName
                }
            })
            return identifierAttribute
        }
    })
    Object.defineProperty(ModelType.prototype, "cloneAndEnhance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (opts) {
            return new ModelType({
                name: opts.name || this.name,
                properties: Object.assign({}, this.properties, opts.properties),
                initializers: this.initializers.concat(opts.initializers || []),
                preProcessor: opts.preProcessor || this.preProcessor,
                postProcessor: opts.postProcessor || this.postProcessor
            })
        }
    })
    Object.defineProperty(ModelType.prototype, "actions", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (fn) {
            var _this = this
            var actionInitializer = function (self) {
                _this.instantiateActions(self, fn(self))
                return self
            }
            return this.cloneAndEnhance({ initializers: [actionInitializer] })
        }
    })
    Object.defineProperty(ModelType.prototype, "instantiateActions", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (self, actions) {
            // check if return is correct
            if (!isPlainObject(actions))
                throw fail("actions initializer should return a plain object containing actions")
            // bind actions to the object created
            Object.keys(actions).forEach(function (name) {
                // warn if preprocessor was given
                if (name === PRE_PROCESS_SNAPSHOT)
                    throw fail(
                        "Cannot define action '" +
                            PRE_PROCESS_SNAPSHOT +
                            "', it should be defined using 'type.preProcessSnapshot(fn)' instead"
                    )
                // warn if postprocessor was given
                if (name === POST_PROCESS_SNAPSHOT)
                    throw fail(
                        "Cannot define action '" +
                            POST_PROCESS_SNAPSHOT +
                            "', it should be defined using 'type.postProcessSnapshot(fn)' instead"
                    )
                var action2 = actions[name]
                // apply hook composition
                var baseAction = self[name]
                if (name in Hook && baseAction) {
                    var specializedAction_1 = action2
                    action2 = function () {
                        baseAction.apply(null, arguments)
                        specializedAction_1.apply(null, arguments)
                    }
                }
                // the goal of this is to make sure actions using "this" can call themselves,
                // while still allowing the middlewares to register them
                var middlewares = action2.$mst_middleware // make sure middlewares are not lost
                var boundAction = action2.bind(actions)
                boundAction.$mst_middleware = middlewares
                var actionInvoker = createActionInvoker(self, name, boundAction)
                actions[name] = actionInvoker
                addHiddenFinalProp(self, name, actionInvoker)
            })
        }
    })
    Object.defineProperty(ModelType.prototype, "volatile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (fn) {
            var _this = this
            if (typeof fn !== "function") {
                throw fail(
                    "You passed an " +
                        typeof fn +
                        " to volatile state as an argument, when function is expected"
                )
            }
            var stateInitializer = function (self) {
                _this.instantiateVolatileState(self, fn(self))
                return self
            }
            return this.cloneAndEnhance({ initializers: [stateInitializer] })
        }
    })
    Object.defineProperty(ModelType.prototype, "instantiateVolatileState", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (self, state) {
            // check views return
            if (!isPlainObject(state))
                throw fail(
                    "volatile state initializer should return a plain object containing state"
                )
            mobx.set(self, state)
        }
    })
    Object.defineProperty(ModelType.prototype, "extend", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (fn) {
            var _this = this
            var initializer = function (self) {
                var _a = fn(self),
                    actions = _a.actions,
                    views = _a.views,
                    state = _a.state,
                    rest = __rest(_a, ["actions", "views", "state"])
                for (var key in rest)
                    throw fail(
                        "The `extend` function should return an object with a subset of the fields 'actions', 'views' and 'state'. Found invalid key '" +
                            key +
                            "'"
                    )
                if (state) _this.instantiateVolatileState(self, state)
                if (views) _this.instantiateViews(self, views)
                if (actions) _this.instantiateActions(self, actions)
                return self
            }
            return this.cloneAndEnhance({ initializers: [initializer] })
        }
    })
    Object.defineProperty(ModelType.prototype, "views", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (fn) {
            var _this = this
            var viewInitializer = function (self) {
                _this.instantiateViews(self, fn(self))
                return self
            }
            return this.cloneAndEnhance({ initializers: [viewInitializer] })
        }
    })
    Object.defineProperty(ModelType.prototype, "instantiateViews", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (self, views) {
            // check views return
            if (!isPlainObject(views))
                throw fail("views initializer should return a plain object containing views")
            Object.keys(views).forEach(function (key) {
                var _a
                // is this a computed property?
                var descriptor = Object.getOwnPropertyDescriptor(views, key)
                if ("get" in descriptor) {
                    mobx.defineProperty(self, key, descriptor)
                    mobx.makeObservable(self, ((_a = {}), (_a[key] = mobx.computed), _a))
                } else if (typeof descriptor.value === "function") {
                    addHiddenFinalProp(self, key, descriptor.value)
                } else {
                    throw fail("A view member should either be a function or getter based property")
                }
            })
        }
    })
    Object.defineProperty(ModelType.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, initialValue) {
            var value = isStateTreeNode(initialValue)
                ? initialValue
                : this.applySnapshotPreProcessor(initialValue)
            return createObjectNode(this, parent, subpath, environment, value)
            // Optimization: record all prop- view- and action names after first construction, and generate an optimal base class
            // that pre-reserves all these fields for fast object-member lookups
        }
    })
    Object.defineProperty(ModelType.prototype, "initializeChildNodes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (objNode, initialSnapshot) {
            if (initialSnapshot === void 0) {
                initialSnapshot = {}
            }
            var type = objNode.type
            var result = {}
            type.forAllProps(function (name, childType) {
                result[name] = childType.instantiate(
                    objNode,
                    name,
                    undefined,
                    initialSnapshot[name]
                )
            })
            return result
        }
    })
    Object.defineProperty(ModelType.prototype, "createNewInstance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (childNodes) {
            return mobx.observable.object(childNodes, EMPTY_OBJECT, mobxShallow)
        }
    })
    Object.defineProperty(ModelType.prototype, "finalizeNewInstance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, instance) {
            addHiddenFinalProp(instance, "toString", objectTypeToString)
            this.forAllProps(function (name) {
                mobx._interceptReads(instance, name, node.unbox)
            })
            this.initializers.reduce(function (self, fn) {
                return fn(self)
            }, instance)
            mobx.intercept(instance, this.willChange)
            mobx.observe(instance, this.didChange)
        }
    })
    Object.defineProperty(ModelType.prototype, "willChange", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (chg) {
            // TODO: mobx typings don't seem to take into account that newValue can be set even when removing a prop
            var change = chg
            var node = getStateTreeNode(change.object)
            var subpath = change.name
            node.assertWritable({ subpath: subpath })
            var childType = node.type.properties[subpath]
            // only properties are typed, state are stored as-is references
            if (childType) {
                typecheckInternal(childType, change.newValue)
                change.newValue = childType.reconcile(
                    node.getChildNode(subpath),
                    change.newValue,
                    node,
                    subpath
                )
            }
            return change
        }
    })
    Object.defineProperty(ModelType.prototype, "didChange", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (chg) {
            // TODO: mobx typings don't seem to take into account that newValue can be set even when removing a prop
            var change = chg
            var childNode = getStateTreeNode(change.object)
            var childType = childNode.type.properties[change.name]
            if (!childType) {
                // don't emit patches for volatile state
                return
            }
            var oldChildValue = change.oldValue ? change.oldValue.snapshot : undefined
            childNode.emitPatch(
                {
                    op: "replace",
                    path: escapeJsonPath(change.name),
                    value: change.newValue.snapshot,
                    oldValue: oldChildValue
                },
                childNode
            )
        }
    })
    Object.defineProperty(ModelType.prototype, "getChildren", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            var _this = this
            var res = []
            this.forAllProps(function (name) {
                res.push(_this.getChildNode(node, name))
            })
            return res
        }
    })
    Object.defineProperty(ModelType.prototype, "getChildNode", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, key) {
            if (!(key in this.properties)) throw fail("Not a value property: " + key)
            var adm = mobx._getAdministration(node.storedValue, key)
            var childNode = adm.raw()
            if (!childNode) throw fail("Node not available for property " + key)
            return childNode
        }
    })
    Object.defineProperty(ModelType.prototype, "getSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, applyPostProcess) {
            var _this = this
            if (applyPostProcess === void 0) {
                applyPostProcess = true
            }
            var res = {}
            this.forAllProps(function (name, type) {
                mobx.getAtom(node.storedValue, name).reportObserved()
                res[name] = _this.getChildNode(node, name).snapshot
            })
            if (applyPostProcess) {
                return this.applySnapshotPostProcessor(res)
            }
            return res
        }
    })
    Object.defineProperty(ModelType.prototype, "processInitialSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (childNodes) {
            var processed = {}
            Object.keys(childNodes).forEach(function (key) {
                processed[key] = childNodes[key].getSnapshot()
            })
            return this.applySnapshotPostProcessor(processed)
        }
    })
    Object.defineProperty(ModelType.prototype, "applyPatchLocally", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, subpath, patch) {
            if (!(patch.op === "replace" || patch.op === "add")) {
                throw fail("object does not support operation " + patch.op)
            }
            node.storedValue[subpath] = patch.value
        }
    })
    Object.defineProperty(ModelType.prototype, "applySnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, snapshot) {
            var preProcessedSnapshot = this.applySnapshotPreProcessor(snapshot)
            this.forAllProps(function (name) {
                node.storedValue[name] = preProcessedSnapshot[name]
            })
        }
    })
    Object.defineProperty(ModelType.prototype, "applySnapshotPreProcessor", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (snapshot) {
            var processor = this.preProcessor
            return processor ? processor.call(null, snapshot) : snapshot
        }
    })
    Object.defineProperty(ModelType.prototype, "applySnapshotPostProcessor", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (snapshot) {
            var postProcessor = this.postProcessor
            if (postProcessor) return postProcessor.call(null, snapshot)
            return snapshot
        }
    })
    Object.defineProperty(ModelType.prototype, "getChildType", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (propertyName) {
            return this.properties[propertyName]
        }
    })
    Object.defineProperty(ModelType.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            var _this = this
            var snapshot = this.applySnapshotPreProcessor(value)
            if (!isPlainObject(snapshot)) {
                return typeCheckFailure(context, snapshot, "Value is not a plain object")
            }
            return flattenTypeErrors(
                this.propertyNames.map(function (key) {
                    return _this.properties[key].validate(
                        snapshot[key],
                        getContextForPath(context, key, _this.properties[key])
                    )
                })
            )
        }
    })
    Object.defineProperty(ModelType.prototype, "forAllProps", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (fn) {
            var _this = this
            this.propertyNames.forEach(function (key) {
                return fn(key, _this.properties[key])
            })
        }
    })
    Object.defineProperty(ModelType.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _this = this
            // optimization: cache
            return (
                "{ " +
                this.propertyNames
                    .map(function (key) {
                        return key + ": " + _this.properties[key].describe()
                    })
                    .join("; ") +
                " }"
            )
        }
    })
    Object.defineProperty(ModelType.prototype, "getDefaultSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return EMPTY_OBJECT
        }
    })
    Object.defineProperty(ModelType.prototype, "removeChild", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node, subpath) {
            node.storedValue[subpath] = undefined
        }
    })
    return ModelType
})(ComplexType)
ModelType.prototype.applySnapshot = mobx.action(ModelType.prototype.applySnapshot)
/**
 * `types.model` - Creates a new model type by providing a name, properties, volatile state and actions.
 *
 * See the [model type](/concepts/trees#creating-models) description or the [getting started](intro/getting-started.md#getting-started-1) tutorial.
 */
function model() {
    var args = []
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
    }
    var name = typeof args[0] === "string" ? args.shift() : "AnonymousModel"
    var properties = args.shift() || {}
    return new ModelType({ name: name, properties: properties })
}
/**
 * `types.compose` - Composes a new model from one or more existing model types.
 * This method can be invoked in two forms:
 * Given 2 or more model types, the types are composed into a new Type.
 * Given first parameter as a string and 2 or more model types,
 * the types are composed into a new Type with the given name
 */
function compose() {
    var args = []
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
    }
    // TODO: just join the base type names if no name is provided
    var hasTypename = typeof args[0] === "string"
    var typeName = hasTypename ? args[0] : "AnonymousModel"
    if (hasTypename) {
        args.shift()
    }
    return args
        .reduce(function (prev, cur) {
            return prev.cloneAndEnhance({
                name: prev.name + "_" + cur.name,
                properties: cur.properties,
                initializers: cur.initializers,
                preProcessor: function (snapshot) {
                    return cur.applySnapshotPreProcessor(prev.applySnapshotPreProcessor(snapshot))
                },
                postProcessor: function (snapshot) {
                    return cur.applySnapshotPostProcessor(prev.applySnapshotPostProcessor(snapshot))
                }
            })
        })
        .named(typeName)
}
/**
 * Returns if a given value represents a model type.
 *
 * @param type
 * @returns
 */
function isModelType(type) {
    return isType(type) && (type.flags & TypeFlags.Object) > 0
}

// TODO: implement CoreType using types.custom ?
/**
 * @internal
 * @hidden
 */
var CoreType = /** @class */ (function (_super) {
    __extends(CoreType, _super)
    function CoreType(name, flags, checker, initializer) {
        if (initializer === void 0) {
            initializer = identity
        }
        var _this = _super.call(this, name) || this
        Object.defineProperty(_this, "flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: flags
        })
        Object.defineProperty(_this, "checker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: checker
        })
        Object.defineProperty(_this, "initializer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: initializer
        })
        _this.flags = flags
        return _this
    }
    Object.defineProperty(CoreType.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.name
        }
    })
    Object.defineProperty(CoreType.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, initialValue) {
            return createScalarNode(this, parent, subpath, environment, initialValue)
        }
    })
    Object.defineProperty(CoreType.prototype, "createNewInstance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (snapshot) {
            return this.initializer(snapshot)
        }
    })
    Object.defineProperty(CoreType.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            if (isPrimitive(value) && this.checker(value)) {
                return typeCheckSuccess()
            }
            var typeName =
                this.name === "Date" ? "Date or a unix milliseconds timestamp" : this.name
            return typeCheckFailure(context, value, "Value is not a " + typeName)
        }
    })
    return CoreType
})(SimpleType)
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
// tslint:disable-next-line:variable-name
var string = new CoreType("string", TypeFlags.String, function (v) {
    return typeof v === "string"
})
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
// tslint:disable-next-line:variable-name
var number = new CoreType("number", TypeFlags.Number, function (v) {
    return typeof v === "number"
})
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
// tslint:disable-next-line:variable-name
var integer = new CoreType("integer", TypeFlags.Integer, function (v) {
    return isInteger(v)
})
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
// tslint:disable-next-line:variable-name
var boolean = new CoreType("boolean", TypeFlags.Boolean, function (v) {
    return typeof v === "boolean"
})
/**
 * `types.null` - The type of the value `null`
 */
var nullType = new CoreType("null", TypeFlags.Null, function (v) {
    return v === null
})
/**
 * `types.undefined` - The type of the value `undefined`
 */
var undefinedType = new CoreType("undefined", TypeFlags.Undefined, function (v) {
    return v === undefined
})
var _DatePrimitive = new CoreType(
    "Date",
    TypeFlags.Date,
    function (v) {
        return typeof v === "number" || v instanceof Date
    },
    function (v) {
        return v instanceof Date ? v : new Date(v)
    }
)
_DatePrimitive.getSnapshot = function (node) {
    return node.storedValue.getTime()
}
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
var DatePrimitive = _DatePrimitive
/**
 * @internal
 * @hidden
 */
function getPrimitiveFactoryFromValue(value) {
    switch (typeof value) {
        case "string":
            return string
        case "number":
            return number // In the future, isInteger(value) ? integer : number would be interesting, but would be too breaking for now
        case "boolean":
            return boolean
        case "object":
            if (value instanceof Date) return DatePrimitive
    }
    throw fail("Cannot determine primitive type from value " + value)
}
/**
 * Returns if a given value represents a primitive type.
 *
 * @param type
 * @returns
 */
function isPrimitiveType(type) {
    return (
        isType(type) &&
        (type.flags &
            (TypeFlags.String |
                TypeFlags.Number |
                TypeFlags.Integer |
                TypeFlags.Boolean |
                TypeFlags.Date)) >
            0
    )
}

/**
 * @internal
 * @hidden
 */
var Literal = /** @class */ (function (_super) {
    __extends(Literal, _super)
    function Literal(value) {
        var _this = _super.call(this, JSON.stringify(value)) || this
        Object.defineProperty(_this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: TypeFlags.Literal
        })
        _this.value = value
        return _this
    }
    Object.defineProperty(Literal.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, initialValue) {
            return createScalarNode(this, parent, subpath, environment, initialValue)
        }
    })
    Object.defineProperty(Literal.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return JSON.stringify(this.value)
        }
    })
    Object.defineProperty(Literal.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            if (isPrimitive(value) && value === this.value) {
                return typeCheckSuccess()
            }
            return typeCheckFailure(
                context,
                value,
                "Value is not a literal " + JSON.stringify(this.value)
            )
        }
    })
    return Literal
})(SimpleType)
/**
 * `types.literal` - The literal type will return a type that will match only the exact given type.
 * The given value must be a primitive, in order to be serialized to a snapshot correctly.
 * You can use literal to match exact strings for example the exact male or female string.
 *
 * Example:
 * ```ts
 * const Person = types.model({
 *     name: types.string,
 *     gender: types.union(types.literal('male'), types.literal('female'))
 * })
 * ```
 *
 * @param value The value to use in the strict equal check
 * @returns
 */
function literal(value) {
    return new Literal(value)
}
/**
 * Returns if a given value represents a literal type.
 *
 * @param type
 * @returns
 */
function isLiteralType(type) {
    return isType(type) && (type.flags & TypeFlags.Literal) > 0
}

var Refinement = /** @class */ (function (_super) {
    __extends(Refinement, _super)
    function Refinement(name, _subtype, _predicate, _message) {
        var _this = _super.call(this, name) || this
        Object.defineProperty(_this, "_subtype", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _subtype
        })
        Object.defineProperty(_this, "_predicate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _predicate
        })
        Object.defineProperty(_this, "_message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _message
        })
        return _this
    }
    Object.defineProperty(Refinement.prototype, "flags", {
        get: function () {
            return this._subtype.flags | TypeFlags.Refinement
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(Refinement.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.name
        }
    })
    Object.defineProperty(Refinement.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, initialValue) {
            // create the child type
            return this._subtype.instantiate(parent, subpath, environment, initialValue)
        }
    })
    Object.defineProperty(Refinement.prototype, "isAssignableFrom", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (type) {
            return this._subtype.isAssignableFrom(type)
        }
    })
    Object.defineProperty(Refinement.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            var subtypeErrors = this._subtype.validate(value, context)
            if (subtypeErrors.length > 0) return subtypeErrors
            var snapshot = isStateTreeNode(value) ? getStateTreeNode(value).snapshot : value
            if (!this._predicate(snapshot)) {
                return typeCheckFailure(context, value, this._message(value))
            }
            return typeCheckSuccess()
        }
    })
    Object.defineProperty(Refinement.prototype, "reconcile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, newValue, parent, subpath) {
            return this._subtype.reconcile(current, newValue, parent, subpath)
        }
    })
    Object.defineProperty(Refinement.prototype, "getSubTypes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this._subtype
        }
    })
    return Refinement
})(BaseType)
/**
 * `types.refinement` - Creates a type that is more specific than the base type, e.g. `types.refinement(types.string, value => value.length > 5)` to create a type of strings that can only be longer then 5.
 *
 * @param name
 * @param type
 * @param predicate
 * @returns
 */
function refinement() {
    var args = []
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
    }
    var name = typeof args[0] === "string" ? args.shift() : isType(args[0]) ? args[0].name : null
    var type = args[0]
    var predicate = args[1]
    var message = args[2]
        ? args[2]
        : function (v) {
              return "Value does not respect the refinement predicate"
          }
    return new Refinement(name, type, predicate, message)
}
/**
 * Returns if a given value is a refinement type.
 *
 * @param type
 * @returns
 */
function isRefinementType(type) {
    return (type.flags & TypeFlags.Refinement) > 0
}

/**
 * `types.enumeration` - Can be used to create an string based enumeration.
 * (note: this methods is just sugar for a union of string literals)
 *
 * Example:
 * ```ts
 * const TrafficLight = types.model({
 *   color: types.enumeration("Color", ["Red", "Orange", "Green"])
 * })
 * ```
 *
 * @param name descriptive name of the enumeration (optional)
 * @param options possible values this enumeration can have
 * @returns
 */
function enumeration(name, options) {
    var realOptions = typeof name === "string" ? options : name
    var type = union.apply(
        void 0,
        __spread(
            realOptions.map(function (option) {
                return literal("" + option)
            })
        )
    )
    if (typeof name === "string") type.name = name
    return type
}

/**
 * @internal
 * @hidden
 */
var Union = /** @class */ (function (_super) {
    __extends(Union, _super)
    function Union(name, _types, options) {
        var _this = _super.call(this, name) || this
        Object.defineProperty(_this, "_types", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _types
        })
        Object.defineProperty(_this, "_dispatcher", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(_this, "_eager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        })
        options = __assign({ eager: true, dispatcher: undefined }, options)
        _this._dispatcher = options.dispatcher
        if (!options.eager) _this._eager = false
        return _this
    }
    Object.defineProperty(Union.prototype, "flags", {
        get: function () {
            var result = TypeFlags.Union
            this._types.forEach(function (type) {
                result |= type.flags
            })
            return result
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(Union.prototype, "isAssignableFrom", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (type) {
            return this._types.some(function (subType) {
                return subType.isAssignableFrom(type)
            })
        }
    })
    Object.defineProperty(Union.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return (
                "(" +
                this._types
                    .map(function (factory) {
                        return factory.describe()
                    })
                    .join(" | ") +
                ")"
            )
        }
    })
    Object.defineProperty(Union.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, initialValue) {
            var type = this.determineType(initialValue, undefined)
            if (!type) throw fail("No matching type for union " + this.describe()) // can happen in prod builds
            return type.instantiate(parent, subpath, environment, initialValue)
        }
    })
    Object.defineProperty(Union.prototype, "reconcile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, newValue, parent, subpath) {
            var type = this.determineType(newValue, current.getReconciliationType())
            if (!type) throw fail("No matching type for union " + this.describe()) // can happen in prod builds
            return type.reconcile(current, newValue, parent, subpath)
        }
    })
    Object.defineProperty(Union.prototype, "determineType", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, reconcileCurrentType) {
            // try the dispatcher, if defined
            if (this._dispatcher) {
                return this._dispatcher(value)
            }
            // find the most accomodating type
            // if we are using reconciliation try the current node type first (fix for #1045)
            if (reconcileCurrentType) {
                if (reconcileCurrentType.is(value)) {
                    return reconcileCurrentType
                }
                return this._types
                    .filter(function (t) {
                        return t !== reconcileCurrentType
                    })
                    .find(function (type) {
                        return type.is(value)
                    })
            } else {
                return this._types.find(function (type) {
                    return type.is(value)
                })
            }
        }
    })
    Object.defineProperty(Union.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            if (this._dispatcher) {
                return this._dispatcher(value).validate(value, context)
            }
            var allErrors = []
            var applicableTypes = 0
            for (var i = 0; i < this._types.length; i++) {
                var type = this._types[i]
                var errors = type.validate(value, context)
                if (errors.length === 0) {
                    if (this._eager) return typeCheckSuccess()
                    else applicableTypes++
                } else {
                    allErrors.push(errors)
                }
            }
            if (applicableTypes === 1) return typeCheckSuccess()
            return typeCheckFailure(context, value, "No type is applicable for the union").concat(
                flattenTypeErrors(allErrors)
            )
        }
    })
    Object.defineProperty(Union.prototype, "getSubTypes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this._types
        }
    })
    return Union
})(BaseType)
/**
 * `types.union` - Create a union of multiple types. If the correct type cannot be inferred unambiguously from a snapshot, provide a dispatcher function of the form `(snapshot) => Type`.
 *
 * @param optionsOrType
 * @param otherTypes
 * @returns
 */
function union(optionsOrType) {
    var otherTypes = []
    for (var _i = 1; _i < arguments.length; _i++) {
        otherTypes[_i - 1] = arguments[_i]
    }
    var options = isType(optionsOrType) ? undefined : optionsOrType
    var types = isType(optionsOrType) ? __spread([optionsOrType], otherTypes) : otherTypes
    var name =
        "(" +
        types
            .map(function (type) {
                return type.name
            })
            .join(" | ") +
        ")"
    return new Union(name, types, options)
}
/**
 * Returns if a given value represents a union type.
 *
 * @param type
 * @returns
 */
function isUnionType(type) {
    return (type.flags & TypeFlags.Union) > 0
}

/**
 * @hidden
 * @internal
 */
var OptionalValue = /** @class */ (function (_super) {
    __extends(OptionalValue, _super)
    function OptionalValue(_subtype, _defaultValue, optionalValues) {
        var _this = _super.call(this, _subtype.name) || this
        Object.defineProperty(_this, "_subtype", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _subtype
        })
        Object.defineProperty(_this, "_defaultValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _defaultValue
        })
        Object.defineProperty(_this, "optionalValues", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: optionalValues
        })
        return _this
    }
    Object.defineProperty(OptionalValue.prototype, "flags", {
        get: function () {
            return this._subtype.flags | TypeFlags.Optional
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(OptionalValue.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this._subtype.describe() + "?"
        }
    })
    Object.defineProperty(OptionalValue.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, initialValue) {
            if (this.optionalValues.indexOf(initialValue) >= 0) {
                var defaultInstanceOrSnapshot = this.getDefaultInstanceOrSnapshot()
                return this._subtype.instantiate(
                    parent,
                    subpath,
                    environment,
                    defaultInstanceOrSnapshot
                )
            }
            return this._subtype.instantiate(parent, subpath, environment, initialValue)
        }
    })
    Object.defineProperty(OptionalValue.prototype, "reconcile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, newValue, parent, subpath) {
            return this._subtype.reconcile(
                current,
                this.optionalValues.indexOf(newValue) < 0 && this._subtype.is(newValue)
                    ? newValue
                    : this.getDefaultInstanceOrSnapshot(),
                parent,
                subpath
            )
        }
    })
    Object.defineProperty(OptionalValue.prototype, "getDefaultInstanceOrSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var defaultInstanceOrSnapshot =
                typeof this._defaultValue === "function" ? this._defaultValue() : this._defaultValue
            // while static values are already snapshots and checked on types.optional
            // generator functions must always be rechecked just in case
            if (typeof this._defaultValue === "function");
            return defaultInstanceOrSnapshot
        }
    })
    Object.defineProperty(OptionalValue.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            // defaulted values can be skipped
            if (this.optionalValues.indexOf(value) >= 0) {
                return typeCheckSuccess()
            }
            // bounce validation to the sub-type
            return this._subtype.validate(value, context)
        }
    })
    Object.defineProperty(OptionalValue.prototype, "isAssignableFrom", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (type) {
            return this._subtype.isAssignableFrom(type)
        }
    })
    Object.defineProperty(OptionalValue.prototype, "getSubTypes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this._subtype
        }
    })
    return OptionalValue
})(BaseType)
function checkOptionalPreconditions(type, defaultValueOrFunction) {
    // make sure we never pass direct instances
    if (typeof defaultValueOrFunction !== "function" && isStateTreeNode(defaultValueOrFunction)) {
        throw fail(
            "default value cannot be an instance, pass a snapshot or a function that creates an instance/snapshot instead"
        )
    }
}
/**
 * `types.optional` - Can be used to create a property with a default value.
 *
 * Depending on the third argument (`optionalValues`) there are two ways of operation:
 * - If the argument is not provided, then if a value is not provided in the snapshot (`undefined` or missing),
 *   it will default to the provided `defaultValue`
 * - If the argument is provided, then if the value in the snapshot matches one of the optional values inside the array then it will
 *   default to the provided `defaultValue`. Additionally, if one of the optional values inside the array is `undefined` then a missing
 *   property is also valid.
 *
 *   Note that it is also possible to include values of the same type as the intended subtype as optional values,
 *   in this case the optional value will be transformed into the `defaultValue` (e.g. `types.optional(types.string, "unnamed", [undefined, ""])`
 *   will transform the snapshot values `undefined` (and therefore missing) and empty strings into the string `"unnamed"` when it gets
 *   instantiated).
 *
 * If `defaultValue` is a function, the function will be invoked for every new instance.
 * Applying a snapshot in which the optional value is one of the optional values (or `undefined`/_not_ present if none are provided) causes the
 * value to be reset.
 *
 * Example:
 * ```ts
 * const Todo = types.model({
 *   title: types.string,
 *   subtitle1: types.optional(types.string, "", [null]),
 *   subtitle2: types.optional(types.string, "", [null, undefined]),
 *   done: types.optional(types.boolean, false),
 *   created: types.optional(types.Date, () => new Date()),
 * })
 *
 * // if done is missing / undefined it will become false
 * // if created is missing / undefined it will get a freshly generated timestamp
 * // if subtitle1 is null it will default to "", but it cannot be missing or undefined
 * // if subtitle2 is null or undefined it will default to ""; since it can be undefined it can also be missing
 * const todo = Todo.create({ title: "Get coffee", subtitle1: null })
 * ```
 *
 * @param type
 * @param defaultValueOrFunction
 * @param optionalValues an optional array with zero or more primitive values (string, number, boolean, null or undefined)
 *                       that will be converted into the default. `[ undefined ]` is assumed when none is provided
 * @returns
 */
function optional(type, defaultValueOrFunction, optionalValues) {
    checkOptionalPreconditions(type, defaultValueOrFunction)
    return new OptionalValue(
        type,
        defaultValueOrFunction,
        optionalValues ? optionalValues : undefinedAsOptionalValues
    )
}
var undefinedAsOptionalValues = [undefined]
/**
 * Returns if a value represents an optional type.
 *
 * @template IT
 * @param type
 * @returns
 */
function isOptionalType(type) {
    return isType(type) && (type.flags & TypeFlags.Optional) > 0
}

var optionalUndefinedType = optional(undefinedType, undefined)
var optionalNullType = optional(nullType, null)
/**
 * `types.maybe` - Maybe will make a type nullable, and also optional.
 * The value `undefined` will be used to represent nullability.
 *
 * @param type
 * @returns
 */
function maybe(type) {
    return union(type, optionalUndefinedType)
}
/**
 * `types.maybeNull` - Maybe will make a type nullable, and also optional.
 * The value `null` will be used to represent no value.
 *
 * @param type
 * @returns
 */
function maybeNull(type) {
    return union(type, optionalNullType)
}

var Late = /** @class */ (function (_super) {
    __extends(Late, _super)
    function Late(name, _definition) {
        var _this = _super.call(this, name) || this
        Object.defineProperty(_this, "_definition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _definition
        })
        Object.defineProperty(_this, "_subType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        return _this
    }
    Object.defineProperty(Late.prototype, "flags", {
        get: function () {
            return (this._subType ? this._subType.flags : 0) | TypeFlags.Late
        },
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(Late.prototype, "getSubType", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (mustSucceed) {
            if (!this._subType) {
                var t = undefined
                try {
                    t = this._definition()
                } catch (e) {
                    if (e instanceof ReferenceError)
                        // can happen in strict ES5 code when a definition is self refering
                        t = undefined
                    else throw e
                }
                if (mustSucceed && t === undefined)
                    throw fail(
                        "Late type seems to be used too early, the definition (still) returns undefined"
                    )
                if (t) {
                    this._subType = t
                }
            }
            return this._subType
        }
    })
    Object.defineProperty(Late.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, initialValue) {
            return this.getSubType(true).instantiate(parent, subpath, environment, initialValue)
        }
    })
    Object.defineProperty(Late.prototype, "reconcile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, newValue, parent, subpath) {
            return this.getSubType(true).reconcile(current, newValue, parent, subpath)
        }
    })
    Object.defineProperty(Late.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var t = this.getSubType(false)
            return t ? t.name : "<uknown late type>"
        }
    })
    Object.defineProperty(Late.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            var t = this.getSubType(false)
            if (!t) {
                // See #916; the variable the definition closure is pointing to wasn't defined yet, so can't be evaluted yet here
                return typeCheckSuccess()
            }
            return t.validate(value, context)
        }
    })
    Object.defineProperty(Late.prototype, "isAssignableFrom", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (type) {
            var t = this.getSubType(false)
            return t ? t.isAssignableFrom(type) : false
        }
    })
    Object.defineProperty(Late.prototype, "getSubTypes", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var subtype = this.getSubType(false)
            return subtype ? subtype : cannotDetermineSubtype
        }
    })
    return Late
})(BaseType)
/**
 * `types.late` - Defines a type that gets implemented later. This is useful when you have to deal with circular dependencies.
 * Please notice that when defining circular dependencies TypeScript isn't smart enough to inference them.
 *
 * Example:
 * ```ts
 *   // TypeScript isn't smart enough to infer self referencing types.
 *  const Node = types.model({
 *       children: types.array(types.late((): IAnyModelType => Node)) // then typecast each array element to Instance<typeof Node>
 *  })
 * ```
 *
 * @param name The name to use for the type that will be returned.
 * @param type A function that returns the type that will be defined.
 * @returns
 */
function late(nameOrType, maybeType) {
    var name = typeof nameOrType === "string" ? nameOrType : "late(" + nameOrType.toString() + ")"
    var type = typeof nameOrType === "string" ? maybeType : nameOrType
    return new Late(name, type)
}
/**
 * Returns if a given value represents a late type.
 *
 * @param type
 * @returns
 */
function isLateType(type) {
    return isType(type) && (type.flags & TypeFlags.Late) > 0
}

/**
 * @internal
 * @hidden
 */
var Frozen = /** @class */ (function (_super) {
    __extends(Frozen, _super)
    function Frozen(subType) {
        var _this = _super.call(this, subType ? "frozen(" + subType.name + ")" : "frozen") || this
        Object.defineProperty(_this, "subType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: subType
        })
        Object.defineProperty(_this, "flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: TypeFlags.Frozen
        })
        return _this
    }
    Object.defineProperty(Frozen.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return "<any immutable value>"
        }
    })
    Object.defineProperty(Frozen.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, value) {
            // create the node
            return createScalarNode(this, parent, subpath, environment, deepFreeze(value))
        }
    })
    Object.defineProperty(Frozen.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            if (!isSerializable(value)) {
                return typeCheckFailure(
                    context,
                    value,
                    "Value is not serializable and cannot be frozen"
                )
            }
            if (this.subType) return this.subType.validate(value, context)
            return typeCheckSuccess()
        }
    })
    return Frozen
})(SimpleType)
var untypedFrozenInstance = new Frozen()
/**
 * `types.frozen` - Frozen can be used to store any value that is serializable in itself (that is valid JSON).
 * Frozen values need to be immutable or treated as if immutable. They need be serializable as well.
 * Values stored in frozen will snapshotted as-is by MST, and internal changes will not be tracked.
 *
 * This is useful to store complex, but immutable values like vectors etc. It can form a powerful bridge to parts of your application that should be immutable, or that assume data to be immutable.
 *
 * Note: if you want to store free-form state that is mutable, or not serializeable, consider using volatile state instead.
 *
 * Frozen properties can be defined in three different ways
 * 1. `types.frozen(SubType)` - provide a valid MST type and frozen will check if the provided data conforms the snapshot for that type
 * 2. `types.frozen({ someDefaultValue: true})` - provide a primitive value, object or array, and MST will infer the type from that object, and also make it the default value for the field
 * 3. `types.frozen<TypeScriptType>()` - provide a typescript type, to help in strongly typing the field (design time only)
 *
 * Example:
 * ```ts
 * const GameCharacter = types.model({
 *   name: string,
 *   location: types.frozen({ x: 0, y: 0})
 * })
 *
 * const hero = GameCharacter.create({
 *   name: "Mario",
 *   location: { x: 7, y: 4 }
 * })
 *
 * hero.location = { x: 10, y: 2 } // OK
 * hero.location.x = 7 // Not ok!
 * ```
 *
 * ```ts
 * type Point = { x: number, y: number }
 *    const Mouse = types.model({
 *         loc: types.frozen<Point>()
 *    })
 * ```
 *
 * @param defaultValueOrType
 * @returns
 */
function frozen(arg) {
    if (arguments.length === 0) return untypedFrozenInstance
    else if (isType(arg)) return new Frozen(arg)
    else return optional(untypedFrozenInstance, arg)
}
/**
 * Returns if a given value represents a frozen type.
 *
 * @param type
 * @returns
 */
function isFrozenType(type) {
    return isType(type) && (type.flags & TypeFlags.Frozen) > 0
}

function getInvalidationCause(hook) {
    switch (hook) {
        case Hook.beforeDestroy:
            return "destroy"
        case Hook.beforeDetach:
            return "detach"
        default:
            return undefined
    }
}
var StoredReference = /** @class */ (function () {
    function StoredReference(value, targetType) {
        Object.defineProperty(this, "targetType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: targetType
        })
        Object.defineProperty(this, "identifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        Object.defineProperty(this, "resolvedReference", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        })
        if (isValidIdentifier(value)) {
            this.identifier = value
        } else if (isStateTreeNode(value)) {
            var targetNode = getStateTreeNode(value)
            if (!targetNode.identifierAttribute)
                throw fail("Can only store references with a defined identifier attribute.")
            var id = targetNode.unnormalizedIdentifier
            if (id === null || id === undefined) {
                throw fail("Can only store references to tree nodes with a defined identifier.")
            }
            this.identifier = id
        } else {
            throw fail(
                "Can only store references to tree nodes or identifiers, got: '" + value + "'"
            )
        }
    }
    Object.defineProperty(StoredReference.prototype, "updateResolvedReference", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            var normalizedId = normalizeIdentifier(this.identifier)
            var root = node.root
            var lastCacheModification =
                root.identifierCache.getLastCacheModificationPerId(normalizedId)
            if (
                !this.resolvedReference ||
                this.resolvedReference.lastCacheModification !== lastCacheModification
            ) {
                var targetType = this.targetType
                // reference was initialized with the identifier of the target
                var target = root.identifierCache.resolve(targetType, normalizedId)
                if (!target) {
                    throw new InvalidReferenceError(
                        "[mobx-state-tree] Failed to resolve reference '" +
                            this.identifier +
                            "' to type '" +
                            this.targetType.name +
                            "' (from node: " +
                            node.path +
                            ")"
                    )
                }
                this.resolvedReference = {
                    node: target,
                    lastCacheModification: lastCacheModification
                }
            }
        }
    })
    Object.defineProperty(StoredReference.prototype, "resolvedValue", {
        get: function () {
            this.updateResolvedReference(this.node)
            return this.resolvedReference.node.value
        },
        enumerable: false,
        configurable: true
    })
    return StoredReference
})()
/**
 * @internal
 * @hidden
 */
var InvalidReferenceError = /** @class */ (function (_super) {
    __extends(InvalidReferenceError, _super)
    function InvalidReferenceError(m) {
        var _this = _super.call(this, m) || this
        Object.setPrototypeOf(_this, InvalidReferenceError.prototype)
        return _this
    }
    return InvalidReferenceError
})(Error)
/**
 * @internal
 * @hidden
 */
var BaseReferenceType = /** @class */ (function (_super) {
    __extends(BaseReferenceType, _super)
    function BaseReferenceType(targetType, onInvalidated) {
        var _this = _super.call(this, "reference(" + targetType.name + ")") || this
        Object.defineProperty(_this, "targetType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: targetType
        })
        Object.defineProperty(_this, "onInvalidated", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: onInvalidated
        })
        Object.defineProperty(_this, "flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: TypeFlags.Reference
        })
        return _this
    }
    Object.defineProperty(BaseReferenceType.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.name
        }
    })
    Object.defineProperty(BaseReferenceType.prototype, "isAssignableFrom", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (type) {
            return this.targetType.isAssignableFrom(type)
        }
    })
    Object.defineProperty(BaseReferenceType.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            return isValidIdentifier(value)
                ? typeCheckSuccess()
                : typeCheckFailure(
                      context,
                      value,
                      "Value is not a valid identifier, which is a string or a number"
                  )
        }
    })
    Object.defineProperty(BaseReferenceType.prototype, "fireInvalidated", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (cause, storedRefNode, referenceId, refTargetNode) {
            // to actually invalidate a reference we need an alive parent,
            // since it is a scalar value (immutable-ish) and we need to change it
            // from the parent
            var storedRefParentNode = storedRefNode.parent
            if (!storedRefParentNode || !storedRefParentNode.isAlive) {
                return
            }
            var storedRefParentValue = storedRefParentNode.storedValue
            if (!storedRefParentValue) {
                return
            }
            this.onInvalidated({
                cause: cause,
                parent: storedRefParentValue,
                invalidTarget: refTargetNode ? refTargetNode.storedValue : undefined,
                invalidId: referenceId,
                replaceRef: function (newRef) {
                    applyPatch(storedRefNode.root.storedValue, {
                        op: "replace",
                        value: newRef,
                        path: storedRefNode.path
                    })
                },
                removeRef: function () {
                    if (isModelType(storedRefParentNode.type)) {
                        this.replaceRef(undefined)
                    } else {
                        applyPatch(storedRefNode.root.storedValue, {
                            op: "remove",
                            path: storedRefNode.path
                        })
                    }
                }
            })
        }
    })
    Object.defineProperty(BaseReferenceType.prototype, "addTargetNodeWatcher", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (storedRefNode, referenceId) {
            var _this = this
            // this will make sure the target node becomes created
            var refTargetValue = this.getValue(storedRefNode)
            if (!refTargetValue) {
                return undefined
            }
            var refTargetNode = getStateTreeNode(refTargetValue)
            var hookHandler = function (_, refTargetNodeHook) {
                var cause = getInvalidationCause(refTargetNodeHook)
                if (!cause) {
                    return
                }
                _this.fireInvalidated(cause, storedRefNode, referenceId, refTargetNode)
            }
            var refTargetDetachHookDisposer = refTargetNode.registerHook(
                Hook.beforeDetach,
                hookHandler
            )
            var refTargetDestroyHookDisposer = refTargetNode.registerHook(
                Hook.beforeDestroy,
                hookHandler
            )
            return function () {
                refTargetDetachHookDisposer()
                refTargetDestroyHookDisposer()
            }
        }
    })
    Object.defineProperty(BaseReferenceType.prototype, "watchTargetNodeForInvalidations", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (storedRefNode, identifier, customGetSet) {
            var _this = this
            if (!this.onInvalidated) {
                return
            }
            var onRefTargetDestroyedHookDisposer
            // get rid of the watcher hook when the stored ref node is destroyed
            // detached is ignored since scalar nodes (where the reference resides) cannot be detached
            storedRefNode.registerHook(Hook.beforeDestroy, function () {
                if (onRefTargetDestroyedHookDisposer) {
                    onRefTargetDestroyedHookDisposer()
                }
            })
            var startWatching = function (sync) {
                // re-create hook in case the stored ref gets reattached
                if (onRefTargetDestroyedHookDisposer) {
                    onRefTargetDestroyedHookDisposer()
                }
                // make sure the target node is actually there and initialized
                var storedRefParentNode = storedRefNode.parent
                var storedRefParentValue = storedRefParentNode && storedRefParentNode.storedValue
                if (storedRefParentNode && storedRefParentNode.isAlive && storedRefParentValue) {
                    var refTargetNodeExists = void 0
                    if (customGetSet) {
                        refTargetNodeExists = !!customGetSet.get(identifier, storedRefParentValue)
                    } else {
                        refTargetNodeExists = storedRefNode.root.identifierCache.has(
                            _this.targetType,
                            normalizeIdentifier(identifier)
                        )
                    }
                    if (!refTargetNodeExists) {
                        // we cannot change the reference in sync mode
                        // since we are in the middle of a reconciliation/instantiation and the change would be overwritten
                        // for those cases just let the wrong reference be assigned and fail upon usage
                        // (like current references do)
                        // this means that effectively this code will only run when it is created from a snapshot
                        if (!sync) {
                            _this.fireInvalidated(
                                "invalidSnapshotReference",
                                storedRefNode,
                                identifier,
                                null
                            )
                        }
                    } else {
                        onRefTargetDestroyedHookDisposer = _this.addTargetNodeWatcher(
                            storedRefNode,
                            identifier
                        )
                    }
                }
            }
            if (storedRefNode.state === NodeLifeCycle.FINALIZED) {
                // already attached, so the whole tree is ready
                startWatching(true)
            } else {
                if (!storedRefNode.isRoot) {
                    // start watching once the whole tree is ready
                    storedRefNode.root.registerHook(Hook.afterCreationFinalization, function () {
                        // make sure to attach it so it can start listening
                        if (storedRefNode.parent) {
                            storedRefNode.parent.createObservableInstanceIfNeeded()
                        }
                    })
                }
                // start watching once the node is attached somewhere / parent changes
                storedRefNode.registerHook(Hook.afterAttach, function () {
                    startWatching(false)
                })
            }
        }
    })
    return BaseReferenceType
})(SimpleType)
/**
 * @internal
 * @hidden
 */
var IdentifierReferenceType = /** @class */ (function (_super) {
    __extends(IdentifierReferenceType, _super)
    function IdentifierReferenceType(targetType, onInvalidated) {
        return _super.call(this, targetType, onInvalidated) || this
    }
    Object.defineProperty(IdentifierReferenceType.prototype, "getValue", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (storedRefNode) {
            if (!storedRefNode.isAlive) return undefined
            var storedRef = storedRefNode.storedValue
            return storedRef.resolvedValue
        }
    })
    Object.defineProperty(IdentifierReferenceType.prototype, "getSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (storedRefNode) {
            var ref = storedRefNode.storedValue
            return ref.identifier
        }
    })
    Object.defineProperty(IdentifierReferenceType.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, initialValue) {
            var identifier = isStateTreeNode(initialValue)
                ? getIdentifier(initialValue)
                : initialValue
            var storedRef = new StoredReference(initialValue, this.targetType)
            var storedRefNode = createScalarNode(this, parent, subpath, environment, storedRef)
            storedRef.node = storedRefNode
            this.watchTargetNodeForInvalidations(storedRefNode, identifier, undefined)
            return storedRefNode
        }
    })
    Object.defineProperty(IdentifierReferenceType.prototype, "reconcile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, newValue, parent, subpath) {
            if (!current.isDetaching && current.type === this) {
                var compareByValue = isStateTreeNode(newValue)
                var ref = current.storedValue
                if (
                    (!compareByValue && ref.identifier === newValue) ||
                    (compareByValue && ref.resolvedValue === newValue)
                ) {
                    current.setParent(parent, subpath)
                    return current
                }
            }
            var newNode = this.instantiate(parent, subpath, undefined, newValue)
            current.die() // noop if detaching
            return newNode
        }
    })
    return IdentifierReferenceType
})(BaseReferenceType)
/**
 * @internal
 * @hidden
 */
var CustomReferenceType = /** @class */ (function (_super) {
    __extends(CustomReferenceType, _super)
    function CustomReferenceType(targetType, options, onInvalidated) {
        var _this = _super.call(this, targetType, onInvalidated) || this
        Object.defineProperty(_this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: options
        })
        return _this
    }
    Object.defineProperty(CustomReferenceType.prototype, "getValue", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (storedRefNode) {
            if (!storedRefNode.isAlive) return undefined
            var referencedNode = this.options.get(
                storedRefNode.storedValue,
                storedRefNode.parent ? storedRefNode.parent.storedValue : null
            )
            return referencedNode
        }
    })
    Object.defineProperty(CustomReferenceType.prototype, "getSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (storedRefNode) {
            return storedRefNode.storedValue
        }
    })
    Object.defineProperty(CustomReferenceType.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, newValue) {
            var identifier = isStateTreeNode(newValue)
                ? this.options.set(newValue, parent ? parent.storedValue : null)
                : newValue
            var storedRefNode = createScalarNode(this, parent, subpath, environment, identifier)
            this.watchTargetNodeForInvalidations(storedRefNode, identifier, this.options)
            return storedRefNode
        }
    })
    Object.defineProperty(CustomReferenceType.prototype, "reconcile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, newValue, parent, subpath) {
            var newIdentifier = isStateTreeNode(newValue)
                ? this.options.set(newValue, current ? current.storedValue : null)
                : newValue
            if (
                !current.isDetaching &&
                current.type === this &&
                current.storedValue === newIdentifier
            ) {
                current.setParent(parent, subpath)
                return current
            }
            var newNode = this.instantiate(parent, subpath, undefined, newIdentifier)
            current.die() // noop if detaching
            return newNode
        }
    })
    return CustomReferenceType
})(BaseReferenceType)
/**
 * `types.reference` - Creates a reference to another type, which should have defined an identifier.
 * See also the [reference and identifiers](https://github.com/mobxjs/mobx-state-tree#references-and-identifiers) section.
 */
function reference(subType, options) {
    var getSetOptions = options ? options : undefined
    var onInvalidated = options ? options.onInvalidated : undefined
    if (getSetOptions && (getSetOptions.get || getSetOptions.set)) {
        return new CustomReferenceType(
            subType,
            {
                get: getSetOptions.get,
                set: getSetOptions.set
            },
            onInvalidated
        )
    } else {
        return new IdentifierReferenceType(subType, onInvalidated)
    }
}
/**
 * Returns if a given value represents a reference type.
 *
 * @param type
 * @returns
 */
function isReferenceType(type) {
    return (type.flags & TypeFlags.Reference) > 0
}
/**
 * `types.safeReference` - A safe reference is like a standard reference, except that it accepts the undefined value by default
 * and automatically sets itself to undefined (when the parent is a model) / removes itself from arrays and maps
 * when the reference it is pointing to gets detached/destroyed.
 *
 * The optional options parameter object accepts a parameter named `acceptsUndefined`, which is set to true by default, so it is suitable
 * for model properties.
 * When used inside collections (arrays/maps), it is recommended to set this option to false so it can't take undefined as value,
 * which is usually the desired in those cases.
 * Additionally, the optional options parameter object accepts a parameter named `onInvalidated`, which will be called when the reference target node that the reference is pointing to is about to be detached/destroyed
 *
 * Strictly speaking it is a `types.maybe(types.reference(X))` (when `acceptsUndefined` is set to true, the default) and
 * `types.reference(X)` (when `acceptsUndefined` is set to false), both of them with a customized `onInvalidated` option.
 *
 * @param subType
 * @param options
 * @returns
 */
function safeReference(subType, options) {
    var refType = reference(
        subType,
        __assign(__assign({}, options), {
            onInvalidated: function (ev) {
                if (options && options.onInvalidated) {
                    options.onInvalidated(ev)
                }
                ev.removeRef()
            }
        })
    )
    if (options && options.acceptsUndefined === false) {
        return refType
    } else {
        return maybe(refType)
    }
}

var BaseIdentifierType = /** @class */ (function (_super) {
    __extends(BaseIdentifierType, _super)
    function BaseIdentifierType(name, validType) {
        var _this = _super.call(this, name) || this
        Object.defineProperty(_this, "validType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: validType
        })
        Object.defineProperty(_this, "flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: TypeFlags.Identifier
        })
        return _this
    }
    Object.defineProperty(BaseIdentifierType.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, initialValue) {
            if (!parent || !(parent.type instanceof ModelType))
                throw fail(
                    "Identifier types can only be instantiated as direct child of a model type"
                )
            return createScalarNode(this, parent, subpath, environment, initialValue)
        }
    })
    Object.defineProperty(BaseIdentifierType.prototype, "reconcile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, newValue, parent, subpath) {
            // we don't consider detaching here since identifier are scalar nodes, and scalar nodes cannot be detached
            if (current.storedValue !== newValue)
                throw fail(
                    "Tried to change identifier from '" +
                        current.storedValue +
                        "' to '" +
                        newValue +
                        "'. Changing identifiers is not allowed."
                )
            current.setParent(parent, subpath)
            return current
        }
    })
    Object.defineProperty(BaseIdentifierType.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            if (typeof value !== this.validType) {
                return typeCheckFailure(
                    context,
                    value,
                    "Value is not a valid " + this.describe() + ", expected a " + this.validType
                )
            }
            return typeCheckSuccess()
        }
    })
    return BaseIdentifierType
})(SimpleType)
/**
 * @internal
 * @hidden
 */
var IdentifierType = /** @class */ (function (_super) {
    __extends(IdentifierType, _super)
    function IdentifierType() {
        var _this = _super.call(this, "identifier", "string") || this
        Object.defineProperty(_this, "flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: TypeFlags.Identifier
        })
        return _this
    }
    Object.defineProperty(IdentifierType.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return "identifier"
        }
    })
    return IdentifierType
})(BaseIdentifierType)
/**
 * @internal
 * @hidden
 */
var IdentifierNumberType = /** @class */ (function (_super) {
    __extends(IdentifierNumberType, _super)
    function IdentifierNumberType() {
        return _super.call(this, "identifierNumber", "number") || this
    }
    Object.defineProperty(IdentifierNumberType.prototype, "getSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            return node.storedValue
        }
    })
    Object.defineProperty(IdentifierNumberType.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return "identifierNumber"
        }
    })
    return IdentifierNumberType
})(BaseIdentifierType)
/**
 * `types.identifier` - Identifiers are used to make references, lifecycle events and reconciling works.
 * Inside a state tree, for each type can exist only one instance for each given identifier.
 * For example there couldn't be 2 instances of user with id 1. If you need more, consider using references.
 * Identifier can be used only as type property of a model.
 * This type accepts as parameter the value type of the identifier field that can be either string or number.
 *
 * Example:
 * ```ts
 *  const Todo = types.model("Todo", {
 *      id: types.identifier,
 *      title: types.string
 *  })
 * ```
 *
 * @returns
 */
var identifier = new IdentifierType()
/**
 * `types.identifierNumber` - Similar to `types.identifier`. This one will serialize from / to a number when applying snapshots
 *
 * Example:
 * ```ts
 *  const Todo = types.model("Todo", {
 *      id: types.identifierNumber,
 *      title: types.string
 *  })
 * ```
 *
 * @returns
 */
var identifierNumber = new IdentifierNumberType()
/**
 * Returns if a given value represents an identifier type.
 *
 * @param type
 * @returns
 */
function isIdentifierType(type) {
    return isType(type) && (type.flags & TypeFlags.Identifier) > 0
}
/**
 * @internal
 * @hidden
 */
function normalizeIdentifier(id) {
    return "" + id
}
/**
 * @internal
 * @hidden
 */
function isValidIdentifier(id) {
    return typeof id === "string" || typeof id === "number"
}

/**
 * `types.custom` - Creates a custom type. Custom types can be used for arbitrary immutable values, that have a serializable representation. For example, to create your own Date representation, Decimal type etc.
 *
 * The signature of the options is:
 * ```ts
 * export interface CustomTypeOptions<S, T> {
 *     // Friendly name
 *     name: string
 *     // given a serialized value and environment, how to turn it into the target type
 *     fromSnapshot(snapshot: S, env: any): T
 *     // return the serialization of the current value
 *     toSnapshot(value: T): S
 *     // if true, this is a converted value, if false, it's a snapshot
 *     isTargetType(value: T | S): value is T
 *     // a non empty string is assumed to be a validation error
 *     getValidationMessage?(snapshot: S): string
 * }
 * ```
 *
 * Example:
 * ```ts
 * const DecimalPrimitive = types.custom<string, Decimal>({
 *     name: "Decimal",
 *     fromSnapshot(value: string) {
 *         return new Decimal(value)
 *     },
 *     toSnapshot(value: Decimal) {
 *         return value.toString()
 *     },
 *     isTargetType(value: string | Decimal): boolean {
 *         return value instanceof Decimal
 *     },
 *     getValidationMessage(value: string): string {
 *         if (/^-?\d+\.\d+$/.test(value)) return "" // OK
 *         return `'${value}' doesn't look like a valid decimal number`
 *     }
 * })
 *
 * const Wallet = types.model({
 *     balance: DecimalPrimitive
 * })
 * ```
 *
 * @param options
 * @returns
 */
function custom(options) {
    return new CustomType(options)
}
/**
 * @internal
 * @hidden
 */
var CustomType = /** @class */ (function (_super) {
    __extends(CustomType, _super)
    function CustomType(options) {
        var _this = _super.call(this, options.name) || this
        Object.defineProperty(_this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: options
        })
        Object.defineProperty(_this, "flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: TypeFlags.Custom
        })
        return _this
    }
    Object.defineProperty(CustomType.prototype, "describe", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.name
        }
    })
    Object.defineProperty(CustomType.prototype, "isValidSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value, context) {
            if (this.options.isTargetType(value)) return typeCheckSuccess()
            var typeError = this.options.getValidationMessage(value)
            if (typeError) {
                return typeCheckFailure(
                    context,
                    value,
                    "Invalid value for type '" + this.name + "': " + typeError
                )
            }
            return typeCheckSuccess()
        }
    })
    Object.defineProperty(CustomType.prototype, "getSnapshot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (node) {
            return this.options.toSnapshot(node.storedValue)
        }
    })
    Object.defineProperty(CustomType.prototype, "instantiate", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (parent, subpath, environment, initialValue) {
            var valueToStore = this.options.isTargetType(initialValue)
                ? initialValue
                : this.options.fromSnapshot(initialValue, parent && parent.root.environment)
            return createScalarNode(this, parent, subpath, environment, valueToStore)
        }
    })
    Object.defineProperty(CustomType.prototype, "reconcile", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (current, value, parent, subpath) {
            var isSnapshot = !this.options.isTargetType(value)
            // in theory customs use scalar nodes which cannot be detached, but still...
            if (!current.isDetaching) {
                var unchanged =
                    current.type === this &&
                    (isSnapshot ? value === current.snapshot : value === current.storedValue)
                if (unchanged) {
                    current.setParent(parent, subpath)
                    return current
                }
            }
            var valueToStore = isSnapshot
                ? this.options.fromSnapshot(value, parent.root.environment)
                : value
            var newNode = this.instantiate(parent, subpath, undefined, valueToStore)
            current.die() // noop if detaching
            return newNode
        }
    })
    return CustomType
})(SimpleType)

// we import the types to re-export them inside types.
var types = {
    enumeration: enumeration,
    model: model,
    compose: compose,
    custom: custom,
    reference: reference,
    safeReference: safeReference,
    union: union,
    optional: optional,
    literal: literal,
    maybe: maybe,
    maybeNull: maybeNull,
    refinement: refinement,
    string: string,
    boolean: boolean,
    number: number,
    integer: integer,
    Date: DatePrimitive,
    map: map,
    array: array,
    frozen: frozen,
    identifier: identifier,
    identifierNumber: identifierNumber,
    late: late,
    undefined: undefinedType,
    null: nullType,
    snapshotProcessor: snapshotProcessor
}

exports.addDisposer = addDisposer
exports.addMiddleware = addMiddleware
exports.applyAction = applyAction
exports.applyPatch = applyPatch
exports.applySnapshot = applySnapshot
exports.cast = cast
exports.castFlowReturn = castFlowReturn
exports.castToReferenceSnapshot = castToReferenceSnapshot
exports.castToSnapshot = castToSnapshot
exports.clone = clone
exports.createActionTrackingMiddleware = createActionTrackingMiddleware
exports.createActionTrackingMiddleware2 = createActionTrackingMiddleware2
exports.decorate = decorate
exports.destroy = destroy
exports.detach = detach
exports.escapeJsonPath = escapeJsonPath
exports.flow = flow
exports.getChildType = getChildType
exports.getEnv = getEnv
exports.getIdentifier = getIdentifier
exports.getLivelinessChecking = getLivelinessChecking
exports.getMembers = getMembers
exports.getNodeId = getNodeId
exports.getParent = getParent
exports.getParentOfType = getParentOfType
exports.getPath = getPath
exports.getPathParts = getPathParts
exports.getPropertyMembers = getPropertyMembers
exports.getRelativePath = getRelativePath
exports.getRoot = getRoot
exports.getRunningActionContext = getRunningActionContext
exports.getSnapshot = getSnapshot
exports.getType = getType
exports.hasParent = hasParent
exports.hasParentOfType = hasParentOfType
exports.isActionContextChildOf = isActionContextChildOf
exports.isActionContextThisOrChildOf = isActionContextThisOrChildOf
exports.isAlive = isAlive
exports.isArrayType = isArrayType
exports.isFrozenType = isFrozenType
exports.isIdentifierType = isIdentifierType
exports.isLateType = isLateType
exports.isLiteralType = isLiteralType
exports.isMapType = isMapType
exports.isModelType = isModelType
exports.isOptionalType = isOptionalType
exports.isPrimitiveType = isPrimitiveType
exports.isProtected = isProtected
exports.isReferenceType = isReferenceType
exports.isRefinementType = isRefinementType
exports.isRoot = isRoot
exports.isStateTreeNode = isStateTreeNode
exports.isType = isType
exports.isUnionType = isUnionType
exports.isValidReference = isValidReference
exports.joinJsonPath = joinJsonPath
exports.onAction = onAction
exports.onPatch = onPatch
exports.onSnapshot = onSnapshot
exports.process = process
exports.protect = protect
exports.recordActions = recordActions
exports.recordPatches = recordPatches
exports.resolveIdentifier = resolveIdentifier
exports.resolvePath = resolvePath
exports.setLivelinessChecking = setLivelinessChecking
exports.setLivelynessChecking = setLivelynessChecking
exports.splitJsonPath = splitJsonPath
exports.toGenerator = toGenerator
exports.toGeneratorFunction = toGeneratorFunction
exports.tryReference = tryReference
exports.tryResolve = tryResolve
exports.typecheck = typecheck
exports.types = types
exports.unescapeJsonPath = unescapeJsonPath
exports.unprotect = unprotect
exports.walk = walk
