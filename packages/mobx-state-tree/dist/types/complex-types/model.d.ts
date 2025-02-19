import { IAnyType, IType, _CustomOrOther, _NotCustomized, Instance } from "../../internal"
/** @hidden */
export interface ModelProperties {
    [key: string]: IAnyType
}
/** @hidden */
export declare type ModelPrimitive = string | number | boolean | Date
/** @hidden */
export interface ModelPropertiesDeclaration {
    [key: string]: ModelPrimitive | IAnyType
}
/**
 * Unmaps syntax property declarations to a map of { propName: IType }
 *
 * @hidden
 */
export declare type ModelPropertiesDeclarationToProperties<T extends ModelPropertiesDeclaration> =
    T extends {
        [k: string]: IAnyType
    }
        ? T
        : {
              [K in keyof T]: T[K] extends IAnyType
                  ? T[K]
                  : T[K] extends string
                  ? IType<string | undefined, string, string>
                  : T[K] extends number
                  ? IType<number | undefined, number, number>
                  : T[K] extends boolean
                  ? IType<boolean | undefined, boolean, boolean>
                  : T[K] extends Date
                  ? IType<number | Date | undefined, number, Date>
                  : never
          }
/**
 * Checks if a value is optional (undefined, any or unknown).
 * @hidden
 *
 * Examples:
 * - string = false
 * - undefined = true
 * - string | undefined = true
 * - string & undefined = false, but we don't care
 * - any = true
 * - unknown = true
 */
declare type IsOptionalValue<C, TV, FV> = undefined extends C ? TV : FV
/**
 * Name of the properties of an object that can't be set to undefined, any or unknown
 * @hidden
 */
declare type DefinablePropsNames<T> = {
    [K in keyof T]: IsOptionalValue<T[K], never, K>
}[keyof T]
/** @hidden */
export declare const $nonEmptyObject: unique symbol
/** @hidden */
export interface NonEmptyObject {
    [$nonEmptyObject]?: any
}
/** @hidden */
export declare type ExtractCFromProps<P extends ModelProperties> = {
    [k in keyof P]: P[k]["CreationType"]
}
/** @hidden */
export declare type ModelCreationType<PC> = {
    [P in DefinablePropsNames<PC>]: PC[P]
} & Partial<PC> &
    NonEmptyObject
/** @hidden */
export declare type ModelCreationType2<P extends ModelProperties, CustomC> = _CustomOrOther<
    CustomC,
    ModelCreationType<ExtractCFromProps<P>>
>
/** @hidden */
export declare type ModelSnapshotType<P extends ModelProperties> = {
    [K in keyof P]: P[K]["SnapshotType"]
} & NonEmptyObject
/** @hidden */
export declare type ModelSnapshotType2<P extends ModelProperties, CustomS> = _CustomOrOther<
    CustomS,
    ModelSnapshotType<P>
>
/**
 * @hidden
 * we keep this separate from ModelInstanceType to shorten model instance types generated declarations
 */
export declare type ModelInstanceTypeProps<P extends ModelProperties> = {
    [K in keyof P]: P[K]["Type"]
} & NonEmptyObject
/**
 * @hidden
 * do not transform this to an interface or model instance type generated declarations will be longer
 */
export declare type ModelInstanceType<P extends ModelProperties, O> = ModelInstanceTypeProps<P> & O
/** @hidden */
export interface ModelActions {
    [key: string]: Function
}
export interface IModelType<
    PROPS extends ModelProperties,
    OTHERS,
    CustomC = _NotCustomized,
    CustomS = _NotCustomized
> extends IType<
        ModelCreationType2<PROPS, CustomC>,
        ModelSnapshotType2<PROPS, CustomS>,
        ModelInstanceType<PROPS, OTHERS>
    > {
    readonly properties: PROPS
    named(newName: string): IModelType<PROPS, OTHERS, CustomC, CustomS>
    props<PROPS2 extends ModelPropertiesDeclaration>(
        props: PROPS2
    ): IModelType<PROPS & ModelPropertiesDeclarationToProperties<PROPS2>, OTHERS, CustomC, CustomS>
    views<V extends Object>(
        fn: (self: Instance<this>) => V
    ): IModelType<PROPS, OTHERS & V, CustomC, CustomS>
    actions<A extends ModelActions>(
        fn: (self: Instance<this>) => A
    ): IModelType<PROPS, OTHERS & A, CustomC, CustomS>
    volatile<TP extends object>(
        fn: (self: Instance<this>) => TP
    ): IModelType<PROPS, OTHERS & TP, CustomC, CustomS>
    extend<A extends ModelActions = {}, V extends Object = {}, VS extends Object = {}>(
        fn: (self: Instance<this>) => {
            actions?: A
            views?: V
            state?: VS
        }
    ): IModelType<PROPS, OTHERS & A & V & VS, CustomC, CustomS>
    /** @deprecated See `types.snapshotProcessor` */
    preProcessSnapshot<NewC = ModelCreationType2<PROPS, CustomC>>(
        fn: (snapshot: NewC) => ModelCreationType2<PROPS, CustomC>
    ): IModelType<PROPS, OTHERS, NewC, CustomS>
    /** @deprecated See `types.snapshotProcessor` */
    postProcessSnapshot<NewS = ModelSnapshotType2<PROPS, CustomS>>(
        fn: (snapshot: ModelSnapshotType2<PROPS, CustomS>) => NewS
    ): IModelType<PROPS, OTHERS, CustomC, NewS>
}
/**
 * Any model type.
 */
export interface IAnyModelType extends IModelType<any, any, any, any> {}
/** @hidden */
export declare type ExtractProps<T extends IAnyModelType> = T extends IModelType<
    infer P,
    any,
    any,
    any
>
    ? P
    : never
/** @hidden */
export declare type ExtractOthers<T extends IAnyModelType> = T extends IModelType<
    any,
    infer O,
    any,
    any
>
    ? O
    : never
export declare function model<P extends ModelPropertiesDeclaration = {}>(
    name: string,
    properties?: P
): IModelType<ModelPropertiesDeclarationToProperties<P>, {}>
export declare function model<P extends ModelPropertiesDeclaration = {}>(
    properties?: P
): IModelType<ModelPropertiesDeclarationToProperties<P>, {}>
/** @hidden */
export declare type _CustomJoin<A, B> = A extends _NotCustomized ? B : A & B
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB
>(
    name: string,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>
): IModelType<PA & PB, OA & OB, _CustomJoin<FCA, FCB>, _CustomJoin<FSA, FSB>>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB
>(
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>
): IModelType<PA & PB, OA & OB, _CustomJoin<FCA, FCB>, _CustomJoin<FSA, FSB>>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC
>(
    name: string,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>
): IModelType<
    PA & PB & PC,
    OA & OB & OC,
    _CustomJoin<FCA, _CustomJoin<FCB, FCC>>,
    _CustomJoin<FSA, _CustomJoin<FSB, FSC>>
>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC
>(
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>
): IModelType<
    PA & PB & PC,
    OA & OB & OC,
    _CustomJoin<FCA, _CustomJoin<FCB, FCC>>,
    _CustomJoin<FSA, _CustomJoin<FSB, FSC>>
>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC,
    PD extends ModelProperties,
    OD,
    FCD,
    FSD
>(
    name: string,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>
): IModelType<
    PA & PB & PC & PD,
    OA & OB & OC & OD,
    _CustomJoin<FCA, _CustomJoin<FCB, _CustomJoin<FCC, FCD>>>,
    _CustomJoin<FSA, _CustomJoin<FSB, _CustomJoin<FSC, FSD>>>
>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC,
    PD extends ModelProperties,
    OD,
    FCD,
    FSD
>(
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>
): IModelType<
    PA & PB & PC & PD,
    OA & OB & OC & OD,
    _CustomJoin<FCA, _CustomJoin<FCB, _CustomJoin<FCC, FCD>>>,
    _CustomJoin<FSA, _CustomJoin<FSB, _CustomJoin<FSC, FSD>>>
>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC,
    PD extends ModelProperties,
    OD,
    FCD,
    FSD,
    PE extends ModelProperties,
    OE,
    FCE,
    FSE
>(
    name: string,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>
): IModelType<
    PA & PB & PC & PD & PE,
    OA & OB & OC & OD & OE,
    _CustomJoin<FCA, _CustomJoin<FCB, _CustomJoin<FCC, _CustomJoin<FCD, FCE>>>>,
    _CustomJoin<FSA, _CustomJoin<FSB, _CustomJoin<FSC, _CustomJoin<FSD, FSE>>>>
>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC,
    PD extends ModelProperties,
    OD,
    FCD,
    FSD,
    PE extends ModelProperties,
    OE,
    FCE,
    FSE
>(
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>
): IModelType<
    PA & PB & PC & PD & PE,
    OA & OB & OC & OD & OE,
    _CustomJoin<FCA, _CustomJoin<FCB, _CustomJoin<FCC, _CustomJoin<FCD, FCE>>>>,
    _CustomJoin<FSA, _CustomJoin<FSB, _CustomJoin<FSC, _CustomJoin<FSD, FSE>>>>
>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC,
    PD extends ModelProperties,
    OD,
    FCD,
    FSD,
    PE extends ModelProperties,
    OE,
    FCE,
    FSE,
    PF extends ModelProperties,
    OF,
    FCF,
    FSF
>(
    name: string,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>,
    F: IModelType<PF, OF, FCF, FSF>
): IModelType<
    PA & PB & PC & PD & PE & PF,
    OA & OB & OC & OD & OE & OF,
    _CustomJoin<FCA, _CustomJoin<FCB, _CustomJoin<FCC, _CustomJoin<FCD, _CustomJoin<FCE, FCF>>>>>,
    _CustomJoin<FSA, _CustomJoin<FSB, _CustomJoin<FSC, _CustomJoin<FSD, _CustomJoin<FSE, FSF>>>>>
>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC,
    PD extends ModelProperties,
    OD,
    FCD,
    FSD,
    PE extends ModelProperties,
    OE,
    FCE,
    FSE,
    PF extends ModelProperties,
    OF,
    FCF,
    FSF
>(
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>,
    F: IModelType<PF, OF, FCF, FSF>
): IModelType<
    PA & PB & PC & PD & PE & PF,
    OA & OB & OC & OD & OE & OF,
    _CustomJoin<FCA, _CustomJoin<FCB, _CustomJoin<FCC, _CustomJoin<FCD, _CustomJoin<FCE, FCF>>>>>,
    _CustomJoin<FSA, _CustomJoin<FSB, _CustomJoin<FSC, _CustomJoin<FSD, _CustomJoin<FSE, FSF>>>>>
>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC,
    PD extends ModelProperties,
    OD,
    FCD,
    FSD,
    PE extends ModelProperties,
    OE,
    FCE,
    FSE,
    PF extends ModelProperties,
    OF,
    FCF,
    FSF,
    PG extends ModelProperties,
    OG,
    FCG,
    FSG
>(
    name: string,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>,
    F: IModelType<PF, OF, FCF, FSF>,
    G: IModelType<PG, OG, FCG, FSG>
): IModelType<
    PA & PB & PC & PD & PE & PF & PG,
    OA & OB & OC & OD & OE & OF & OG,
    _CustomJoin<
        FCA,
        _CustomJoin<
            FCB,
            _CustomJoin<FCC, _CustomJoin<FCD, _CustomJoin<FCE, _CustomJoin<FCF, FCG>>>>
        >
    >,
    _CustomJoin<
        FSA,
        _CustomJoin<
            FSB,
            _CustomJoin<FSC, _CustomJoin<FSD, _CustomJoin<FSE, _CustomJoin<FSF, FSG>>>>
        >
    >
>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC,
    PD extends ModelProperties,
    OD,
    FCD,
    FSD,
    PE extends ModelProperties,
    OE,
    FCE,
    FSE,
    PF extends ModelProperties,
    OF,
    FCF,
    FSF,
    PG extends ModelProperties,
    OG,
    FCG,
    FSG
>(
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>,
    F: IModelType<PF, OF, FCF, FSF>,
    G: IModelType<PG, OG, FCG, FSG>
): IModelType<
    PA & PB & PC & PD & PE & PF & PG,
    OA & OB & OC & OD & OE & OF & OG,
    _CustomJoin<
        FCA,
        _CustomJoin<
            FCB,
            _CustomJoin<FCC, _CustomJoin<FCD, _CustomJoin<FCE, _CustomJoin<FCF, FCG>>>>
        >
    >,
    _CustomJoin<
        FSA,
        _CustomJoin<
            FSB,
            _CustomJoin<FSC, _CustomJoin<FSD, _CustomJoin<FSE, _CustomJoin<FSF, FSG>>>>
        >
    >
>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC,
    PD extends ModelProperties,
    OD,
    FCD,
    FSD,
    PE extends ModelProperties,
    OE,
    FCE,
    FSE,
    PF extends ModelProperties,
    OF,
    FCF,
    FSF,
    PG extends ModelProperties,
    OG,
    FCG,
    FSG,
    PH extends ModelProperties,
    OH,
    FCH,
    FSH
>(
    name: string,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>,
    F: IModelType<PF, OF, FCF, FSF>,
    G: IModelType<PG, OG, FCG, FSG>,
    H: IModelType<PH, OH, FCH, FSH>
): IModelType<
    PA & PB & PC & PD & PE & PF & PG & PH,
    OA & OB & OC & OD & OE & OF & OG & OH,
    _CustomJoin<
        FCA,
        _CustomJoin<
            FCB,
            _CustomJoin<
                FCC,
                _CustomJoin<FCD, _CustomJoin<FCE, _CustomJoin<FCF, _CustomJoin<FCG, FCH>>>>
            >
        >
    >,
    _CustomJoin<
        FSA,
        _CustomJoin<
            FSB,
            _CustomJoin<
                FSC,
                _CustomJoin<FSD, _CustomJoin<FSE, _CustomJoin<FSF, _CustomJoin<FSG, FSH>>>>
            >
        >
    >
>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC,
    PD extends ModelProperties,
    OD,
    FCD,
    FSD,
    PE extends ModelProperties,
    OE,
    FCE,
    FSE,
    PF extends ModelProperties,
    OF,
    FCF,
    FSF,
    PG extends ModelProperties,
    OG,
    FCG,
    FSG,
    PH extends ModelProperties,
    OH,
    FCH,
    FSH
>(
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>,
    F: IModelType<PF, OF, FCF, FSF>,
    G: IModelType<PG, OG, FCG, FSG>,
    H: IModelType<PH, OH, FCH, FSH>
): IModelType<
    PA & PB & PC & PD & PE & PF & PG & PH,
    OA & OB & OC & OD & OE & OF & OG & OH,
    _CustomJoin<
        FCA,
        _CustomJoin<
            FCB,
            _CustomJoin<
                FCC,
                _CustomJoin<FCD, _CustomJoin<FCE, _CustomJoin<FCF, _CustomJoin<FCG, FCH>>>>
            >
        >
    >,
    _CustomJoin<
        FSA,
        _CustomJoin<
            FSB,
            _CustomJoin<
                FSC,
                _CustomJoin<FSD, _CustomJoin<FSE, _CustomJoin<FSF, _CustomJoin<FSG, FSH>>>>
            >
        >
    >
>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC,
    PD extends ModelProperties,
    OD,
    FCD,
    FSD,
    PE extends ModelProperties,
    OE,
    FCE,
    FSE,
    PF extends ModelProperties,
    OF,
    FCF,
    FSF,
    PG extends ModelProperties,
    OG,
    FCG,
    FSG,
    PH extends ModelProperties,
    OH,
    FCH,
    FSH,
    PI extends ModelProperties,
    OI,
    FCI,
    FSI
>(
    name: string,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>,
    F: IModelType<PF, OF, FCF, FSF>,
    G: IModelType<PG, OG, FCG, FSG>,
    H: IModelType<PH, OH, FCH, FSH>,
    I: IModelType<PI, OI, FCI, FSI>
): IModelType<
    PA & PB & PC & PD & PE & PF & PG & PH & PI,
    OA & OB & OC & OD & OE & OF & OG & OH & OI,
    _CustomJoin<
        FCA,
        _CustomJoin<
            FCB,
            _CustomJoin<
                FCC,
                _CustomJoin<
                    FCD,
                    _CustomJoin<FCE, _CustomJoin<FCF, _CustomJoin<FCG, _CustomJoin<FCH, FCI>>>>
                >
            >
        >
    >,
    _CustomJoin<
        FSA,
        _CustomJoin<
            FSB,
            _CustomJoin<
                FSC,
                _CustomJoin<
                    FSD,
                    _CustomJoin<FSE, _CustomJoin<FSF, _CustomJoin<FSG, _CustomJoin<FSH, FSI>>>>
                >
            >
        >
    >
>
export declare function compose<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB,
    PC extends ModelProperties,
    OC,
    FCC,
    FSC,
    PD extends ModelProperties,
    OD,
    FCD,
    FSD,
    PE extends ModelProperties,
    OE,
    FCE,
    FSE,
    PF extends ModelProperties,
    OF,
    FCF,
    FSF,
    PG extends ModelProperties,
    OG,
    FCG,
    FSG,
    PH extends ModelProperties,
    OH,
    FCH,
    FSH,
    PI extends ModelProperties,
    OI,
    FCI,
    FSI
>(
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>,
    F: IModelType<PF, OF, FCF, FSF>,
    G: IModelType<PG, OG, FCG, FSG>,
    H: IModelType<PH, OH, FCH, FSH>,
    I: IModelType<PI, OI, FCI, FSI>
): IModelType<
    PA & PB & PC & PD & PE & PF & PG & PH & PI,
    OA & OB & OC & OD & OE & OF & OG & OH & OI,
    _CustomJoin<
        FCA,
        _CustomJoin<
            FCB,
            _CustomJoin<
                FCC,
                _CustomJoin<
                    FCD,
                    _CustomJoin<FCE, _CustomJoin<FCF, _CustomJoin<FCG, _CustomJoin<FCH, FCI>>>>
                >
            >
        >
    >,
    _CustomJoin<
        FSA,
        _CustomJoin<
            FSB,
            _CustomJoin<
                FSC,
                _CustomJoin<
                    FSD,
                    _CustomJoin<FSE, _CustomJoin<FSF, _CustomJoin<FSG, _CustomJoin<FSH, FSI>>>>
                >
            >
        >
    >
>
/**
 * Returns if a given value represents a model type.
 *
 * @param type
 * @returns
 */
export declare function isModelType<IT extends IAnyModelType = IAnyModelType>(
    type: IAnyType
): type is IT
export {}
