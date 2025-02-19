import {
    IType,
    IAnyType,
    IModelType,
    ModelProperties,
    ModelInstanceType,
    ModelSnapshotType2,
    ModelCreationType2,
    _NotCustomized
} from "../../internal"
export declare type ITypeDispatcher = (snapshot: any) => IAnyType
export interface UnionOptions {
    eager?: boolean
    dispatcher?: ITypeDispatcher
}
/**
 * Transform _NotCustomized | _NotCustomized... to _NotCustomized, _NotCustomized | A | B to A | B
 * @hidden
 */
export declare type _CustomCSProcessor<T> = Exclude<T, _NotCustomized> extends never
    ? _NotCustomized
    : Exclude<T, _NotCustomized>
/** @hidden */
export interface ITypeUnion<C, S, T>
    extends IType<_CustomCSProcessor<C>, _CustomCSProcessor<S>, T> {}
export declare function union<
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
): ITypeUnion<
    ModelCreationType2<PA, FCA> | ModelCreationType2<PB, FCB>,
    ModelSnapshotType2<PA, FSA> | ModelSnapshotType2<PB, FSB>,
    ModelInstanceType<PA, OA> | ModelInstanceType<PB, OB>
>
export declare function union<
    PA extends ModelProperties,
    OA,
    FCA,
    FSA,
    PB extends ModelProperties,
    OB,
    FCB,
    FSB
>(
    options: UnionOptions,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>
): ITypeUnion<
    ModelCreationType2<PA, FCA> | ModelCreationType2<PB, FCB>,
    ModelSnapshotType2<PA, FSA> | ModelSnapshotType2<PB, FSB>,
    ModelInstanceType<PA, OA> | ModelInstanceType<PB, OB>
>
export declare function union<
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
): ITypeUnion<
    ModelCreationType2<PA, FCA> | ModelCreationType2<PB, FCB> | ModelCreationType2<PC, FCC>,
    ModelSnapshotType2<PA, FSA> | ModelSnapshotType2<PB, FSB> | ModelSnapshotType2<PC, FSC>,
    ModelInstanceType<PA, OA> | ModelInstanceType<PB, OB> | ModelInstanceType<PC, OC>
>
export declare function union<
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
    options: UnionOptions,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>
): ITypeUnion<
    ModelCreationType2<PA, FCA> | ModelCreationType2<PB, FCB> | ModelCreationType2<PC, FCC>,
    ModelSnapshotType2<PA, FSA> | ModelSnapshotType2<PB, FSB> | ModelSnapshotType2<PC, FSC>,
    ModelInstanceType<PA, OA> | ModelInstanceType<PB, OB> | ModelInstanceType<PC, OC>
>
export declare function union<
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
): ITypeUnion<
    | ModelCreationType2<PA, FCA>
    | ModelCreationType2<PB, FCB>
    | ModelCreationType2<PC, FCC>
    | ModelCreationType2<PD, FCD>,
    | ModelSnapshotType2<PA, FSA>
    | ModelSnapshotType2<PB, FSB>
    | ModelSnapshotType2<PC, FSC>
    | ModelSnapshotType2<PD, FSD>,
    | ModelInstanceType<PA, OA>
    | ModelInstanceType<PB, OB>
    | ModelInstanceType<PC, OC>
    | ModelInstanceType<PD, OD>
>
export declare function union<
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
    options: UnionOptions,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>
): ITypeUnion<
    | ModelCreationType2<PA, FCA>
    | ModelCreationType2<PB, FCB>
    | ModelCreationType2<PC, FCC>
    | ModelCreationType2<PD, FCD>,
    | ModelSnapshotType2<PA, FSA>
    | ModelSnapshotType2<PB, FSB>
    | ModelSnapshotType2<PC, FSC>
    | ModelSnapshotType2<PD, FSD>,
    | ModelInstanceType<PA, OA>
    | ModelInstanceType<PB, OB>
    | ModelInstanceType<PC, OC>
    | ModelInstanceType<PD, OD>
>
export declare function union<
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
): ITypeUnion<
    | ModelCreationType2<PA, FCA>
    | ModelCreationType2<PB, FCB>
    | ModelCreationType2<PC, FCC>
    | ModelCreationType2<PD, FCD>
    | ModelCreationType2<PE, FCE>,
    | ModelSnapshotType2<PA, FSA>
    | ModelSnapshotType2<PB, FSB>
    | ModelSnapshotType2<PC, FSC>
    | ModelSnapshotType2<PD, FSD>
    | ModelSnapshotType2<PE, FSE>,
    | ModelInstanceType<PA, OA>
    | ModelInstanceType<PB, OB>
    | ModelInstanceType<PC, OC>
    | ModelInstanceType<PD, OD>
    | ModelInstanceType<PE, OE>
>
export declare function union<
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
    options: UnionOptions,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>
): ITypeUnion<
    | ModelCreationType2<PA, FCA>
    | ModelCreationType2<PB, FCB>
    | ModelCreationType2<PC, FCC>
    | ModelCreationType2<PD, FCD>
    | ModelCreationType2<PE, FCE>,
    | ModelSnapshotType2<PA, FSA>
    | ModelSnapshotType2<PB, FSB>
    | ModelSnapshotType2<PC, FSC>
    | ModelSnapshotType2<PD, FSD>
    | ModelSnapshotType2<PE, FSE>,
    | ModelInstanceType<PA, OA>
    | ModelInstanceType<PB, OB>
    | ModelInstanceType<PC, OC>
    | ModelInstanceType<PD, OD>
    | ModelInstanceType<PE, OE>
>
export declare function union<
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
): ITypeUnion<
    | ModelCreationType2<PA, FCA>
    | ModelCreationType2<PB, FCB>
    | ModelCreationType2<PC, FCC>
    | ModelCreationType2<PD, FCD>
    | ModelCreationType2<PE, FCE>
    | ModelCreationType2<PF, FCF>,
    | ModelSnapshotType2<PA, FSA>
    | ModelSnapshotType2<PB, FSB>
    | ModelSnapshotType2<PC, FSC>
    | ModelSnapshotType2<PD, FSD>
    | ModelSnapshotType2<PE, FSE>
    | ModelSnapshotType2<PF, FSF>,
    | ModelInstanceType<PA, OA>
    | ModelInstanceType<PB, OB>
    | ModelInstanceType<PC, OC>
    | ModelInstanceType<PD, OD>
    | ModelInstanceType<PE, OE>
    | ModelInstanceType<PF, OF>
>
export declare function union<
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
    options: UnionOptions,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>,
    F: IModelType<PF, OF, FCF, FSF>
): ITypeUnion<
    | ModelCreationType2<PA, FCA>
    | ModelCreationType2<PB, FCB>
    | ModelCreationType2<PC, FCC>
    | ModelCreationType2<PD, FCD>
    | ModelCreationType2<PE, FCE>
    | ModelCreationType2<PF, FCF>,
    | ModelSnapshotType2<PA, FSA>
    | ModelSnapshotType2<PB, FSB>
    | ModelSnapshotType2<PC, FSC>
    | ModelSnapshotType2<PD, FSD>
    | ModelSnapshotType2<PE, FSE>
    | ModelSnapshotType2<PF, FSF>,
    | ModelInstanceType<PA, OA>
    | ModelInstanceType<PB, OB>
    | ModelInstanceType<PC, OC>
    | ModelInstanceType<PD, OD>
    | ModelInstanceType<PE, OE>
    | ModelInstanceType<PF, OF>
>
export declare function union<
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
): ITypeUnion<
    | ModelCreationType2<PA, FCA>
    | ModelCreationType2<PB, FCB>
    | ModelCreationType2<PC, FCC>
    | ModelCreationType2<PD, FCD>
    | ModelCreationType2<PE, FCE>
    | ModelCreationType2<PF, FCF>
    | ModelCreationType2<PG, FCG>,
    | ModelSnapshotType2<PA, FSA>
    | ModelSnapshotType2<PB, FSB>
    | ModelSnapshotType2<PC, FSC>
    | ModelSnapshotType2<PD, FSD>
    | ModelSnapshotType2<PE, FSE>
    | ModelSnapshotType2<PF, FSF>
    | ModelSnapshotType2<PG, FSG>,
    | ModelInstanceType<PA, OA>
    | ModelInstanceType<PB, OB>
    | ModelInstanceType<PC, OC>
    | ModelInstanceType<PD, OD>
    | ModelInstanceType<PE, OE>
    | ModelInstanceType<PF, OF>
    | ModelInstanceType<PG, OG>
>
export declare function union<
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
    options: UnionOptions,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>,
    F: IModelType<PF, OF, FCF, FSF>,
    G: IModelType<PG, OG, FCG, FSG>
): ITypeUnion<
    | ModelCreationType2<PA, FCA>
    | ModelCreationType2<PB, FCB>
    | ModelCreationType2<PC, FCC>
    | ModelCreationType2<PD, FCD>
    | ModelCreationType2<PE, FCE>
    | ModelCreationType2<PF, FCF>
    | ModelCreationType2<PG, FCG>,
    | ModelSnapshotType2<PA, FSA>
    | ModelSnapshotType2<PB, FSB>
    | ModelSnapshotType2<PC, FSC>
    | ModelSnapshotType2<PD, FSD>
    | ModelSnapshotType2<PE, FSE>
    | ModelSnapshotType2<PF, FSF>
    | ModelSnapshotType2<PG, FSG>,
    | ModelInstanceType<PA, OA>
    | ModelInstanceType<PB, OB>
    | ModelInstanceType<PC, OC>
    | ModelInstanceType<PD, OD>
    | ModelInstanceType<PE, OE>
    | ModelInstanceType<PF, OF>
    | ModelInstanceType<PG, OG>
>
export declare function union<
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
): ITypeUnion<
    | ModelCreationType2<PA, FCA>
    | ModelCreationType2<PB, FCB>
    | ModelCreationType2<PC, FCC>
    | ModelCreationType2<PD, FCD>
    | ModelCreationType2<PE, FCE>
    | ModelCreationType2<PF, FCF>
    | ModelCreationType2<PG, FCG>
    | ModelCreationType2<PH, FCH>,
    | ModelSnapshotType2<PA, FSA>
    | ModelSnapshotType2<PB, FSB>
    | ModelSnapshotType2<PC, FSC>
    | ModelSnapshotType2<PD, FSD>
    | ModelSnapshotType2<PE, FSE>
    | ModelSnapshotType2<PF, FSF>
    | ModelSnapshotType2<PG, FSG>
    | ModelSnapshotType2<PH, FSH>,
    | ModelInstanceType<PA, OA>
    | ModelInstanceType<PB, OB>
    | ModelInstanceType<PC, OC>
    | ModelInstanceType<PD, OD>
    | ModelInstanceType<PE, OE>
    | ModelInstanceType<PF, OF>
    | ModelInstanceType<PG, OG>
    | ModelInstanceType<PH, OH>
>
export declare function union<
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
    options: UnionOptions,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>,
    F: IModelType<PF, OF, FCF, FSF>,
    G: IModelType<PG, OG, FCG, FSG>,
    H: IModelType<PH, OH, FCH, FSH>
): ITypeUnion<
    | ModelCreationType2<PA, FCA>
    | ModelCreationType2<PB, FCB>
    | ModelCreationType2<PC, FCC>
    | ModelCreationType2<PD, FCD>
    | ModelCreationType2<PE, FCE>
    | ModelCreationType2<PF, FCF>
    | ModelCreationType2<PG, FCG>
    | ModelCreationType2<PH, FCH>,
    | ModelSnapshotType2<PA, FSA>
    | ModelSnapshotType2<PB, FSB>
    | ModelSnapshotType2<PC, FSC>
    | ModelSnapshotType2<PD, FSD>
    | ModelSnapshotType2<PE, FSE>
    | ModelSnapshotType2<PF, FSF>
    | ModelSnapshotType2<PG, FSG>
    | ModelSnapshotType2<PH, FSH>,
    | ModelInstanceType<PA, OA>
    | ModelInstanceType<PB, OB>
    | ModelInstanceType<PC, OC>
    | ModelInstanceType<PD, OD>
    | ModelInstanceType<PE, OE>
    | ModelInstanceType<PF, OF>
    | ModelInstanceType<PG, OG>
    | ModelInstanceType<PH, OH>
>
export declare function union<
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
): ITypeUnion<
    | ModelCreationType2<PA, FCA>
    | ModelCreationType2<PB, FCB>
    | ModelCreationType2<PC, FCC>
    | ModelCreationType2<PD, FCD>
    | ModelCreationType2<PE, FCE>
    | ModelCreationType2<PF, FCF>
    | ModelCreationType2<PG, FCG>
    | ModelCreationType2<PH, FCH>
    | ModelCreationType2<PI, FCI>,
    | ModelSnapshotType2<PA, FSA>
    | ModelSnapshotType2<PB, FSB>
    | ModelSnapshotType2<PC, FSC>
    | ModelSnapshotType2<PD, FSD>
    | ModelSnapshotType2<PE, FSE>
    | ModelSnapshotType2<PF, FSF>
    | ModelSnapshotType2<PG, FSG>
    | ModelSnapshotType2<PH, FSH>
    | ModelSnapshotType2<PI, FSI>,
    | ModelInstanceType<PA, OA>
    | ModelInstanceType<PB, OB>
    | ModelInstanceType<PC, OC>
    | ModelInstanceType<PD, OD>
    | ModelInstanceType<PE, OE>
    | ModelInstanceType<PF, OF>
    | ModelInstanceType<PG, OG>
    | ModelInstanceType<PH, OH>
    | ModelInstanceType<PI, OI>
>
export declare function union<
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
    options: UnionOptions,
    A: IModelType<PA, OA, FCA, FSA>,
    B: IModelType<PB, OB, FCB, FSB>,
    C: IModelType<PC, OC, FCC, FSC>,
    D: IModelType<PD, OD, FCD, FSD>,
    E: IModelType<PE, OE, FCE, FSE>,
    F: IModelType<PF, OF, FCF, FSF>,
    G: IModelType<PG, OG, FCG, FSG>,
    H: IModelType<PH, OH, FCH, FSH>,
    I: IModelType<PI, OI, FCI, FSI>
): ITypeUnion<
    | ModelCreationType2<PA, FCA>
    | ModelCreationType2<PB, FCB>
    | ModelCreationType2<PC, FCC>
    | ModelCreationType2<PD, FCD>
    | ModelCreationType2<PE, FCE>
    | ModelCreationType2<PF, FCF>
    | ModelCreationType2<PG, FCG>
    | ModelCreationType2<PH, FCH>
    | ModelCreationType2<PI, FCI>,
    | ModelSnapshotType2<PA, FSA>
    | ModelSnapshotType2<PB, FSB>
    | ModelSnapshotType2<PC, FSC>
    | ModelSnapshotType2<PD, FSD>
    | ModelSnapshotType2<PE, FSE>
    | ModelSnapshotType2<PF, FSF>
    | ModelSnapshotType2<PG, FSG>
    | ModelSnapshotType2<PH, FSH>
    | ModelSnapshotType2<PI, FSI>,
    | ModelInstanceType<PA, OA>
    | ModelInstanceType<PB, OB>
    | ModelInstanceType<PC, OC>
    | ModelInstanceType<PD, OD>
    | ModelInstanceType<PE, OE>
    | ModelInstanceType<PF, OF>
    | ModelInstanceType<PG, OG>
    | ModelInstanceType<PH, OH>
    | ModelInstanceType<PI, OI>
>
export declare function union<CA, SA, TA, CB, SB, TB>(
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>
): ITypeUnion<CA | CB, SA | SB, TA | TB>
export declare function union<CA, SA, TA, CB, SB, TB>(
    options: UnionOptions,
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>
): ITypeUnion<CA | CB, SA | SB, TA | TB>
export declare function union<CA, SA, TA, CB, SB, TB, CC, SC, TC>(
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>
): ITypeUnion<CA | CB | CC, SA | SB | SC, TA | TB | TC>
export declare function union<CA, SA, TA, CB, SB, TB, CC, SC, TC>(
    options: UnionOptions,
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>
): ITypeUnion<CA | CB | CC, SA | SB | SC, TA | TB | TC>
export declare function union<CA, SA, TA, CB, SB, TB, CC, SC, TC, CD, SD, TD>(
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>,
    D: IType<CD, SD, TD>
): ITypeUnion<CA | CB | CC | CD, SA | SB | SC | SD, TA | TB | TC | TD>
export declare function union<CA, SA, TA, CB, SB, TB, CC, SC, TC, CD, SD, TD>(
    options: UnionOptions,
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>,
    D: IType<CD, SD, TD>
): ITypeUnion<CA | CB | CC | CD, SA | SB | SC | SD, TA | TB | TC | TD>
export declare function union<CA, SA, TA, CB, SB, TB, CC, SC, TC, CD, SD, TD, CE, SE, TE>(
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>,
    D: IType<CD, SD, TD>,
    E: IType<CE, SE, TE>
): ITypeUnion<CA | CB | CC | CD | CE, SA | SB | SC | SD | SE, TA | TB | TC | TD | TE>
export declare function union<CA, SA, TA, CB, SB, TB, CC, SC, TC, CD, SD, TD, CE, SE, TE>(
    options: UnionOptions,
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>,
    D: IType<CD, SD, TD>,
    E: IType<CE, SE, TE>
): ITypeUnion<CA | CB | CC | CD | CE, SA | SB | SC | SD | SE, TA | TB | TC | TD | TE>
export declare function union<
    CA,
    SA,
    TA,
    CB,
    SB,
    TB,
    CC,
    SC,
    TC,
    CD,
    SD,
    TD,
    CE,
    SE,
    TE,
    CF,
    SF,
    TF
>(
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>,
    D: IType<CD, SD, TD>,
    E: IType<CE, SE, TE>,
    F: IType<CF, SF, TF>
): ITypeUnion<CA | CB | CC | CD | CE | CF, SA | SB | SC | SD | SE | SF, TA | TB | TC | TD | TE | TF>
export declare function union<
    CA,
    SA,
    TA,
    CB,
    SB,
    TB,
    CC,
    SC,
    TC,
    CD,
    SD,
    TD,
    CE,
    SE,
    TE,
    CF,
    SF,
    TF
>(
    options: UnionOptions,
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>,
    D: IType<CD, SD, TD>,
    E: IType<CE, SE, TE>,
    F: IType<CF, SF, TF>
): ITypeUnion<CA | CB | CC | CD | CE | CF, SA | SB | SC | SD | SE | SF, TA | TB | TC | TD | TE | TF>
export declare function union<
    CA,
    SA,
    TA,
    CB,
    SB,
    TB,
    CC,
    SC,
    TC,
    CD,
    SD,
    TD,
    CE,
    SE,
    TE,
    CF,
    SF,
    TF,
    CG,
    SG,
    TG
>(
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>,
    D: IType<CD, SD, TD>,
    E: IType<CE, SE, TE>,
    F: IType<CF, SF, TF>,
    G: IType<CG, SG, TG>
): ITypeUnion<
    CA | CB | CC | CD | CE | CF | CG,
    SA | SB | SC | SD | SE | SF | SG,
    TA | TB | TC | TD | TE | TF | TG
>
export declare function union<
    CA,
    SA,
    TA,
    CB,
    SB,
    TB,
    CC,
    SC,
    TC,
    CD,
    SD,
    TD,
    CE,
    SE,
    TE,
    CF,
    SF,
    TF,
    CG,
    SG,
    TG
>(
    options: UnionOptions,
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>,
    D: IType<CD, SD, TD>,
    E: IType<CE, SE, TE>,
    F: IType<CF, SF, TF>,
    G: IType<CG, SG, TG>
): ITypeUnion<
    CA | CB | CC | CD | CE | CF | CG,
    SA | SB | SC | SD | SE | SF | SG,
    TA | TB | TC | TD | TE | TF | TG
>
export declare function union<
    CA,
    SA,
    TA,
    CB,
    SB,
    TB,
    CC,
    SC,
    TC,
    CD,
    SD,
    TD,
    CE,
    SE,
    TE,
    CF,
    SF,
    TF,
    CG,
    SG,
    TG,
    CH,
    SH,
    TH
>(
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>,
    D: IType<CD, SD, TD>,
    E: IType<CE, SE, TE>,
    F: IType<CF, SF, TF>,
    G: IType<CG, SG, TG>,
    H: IType<CH, SH, TH>
): ITypeUnion<
    CA | CB | CC | CD | CE | CF | CG | CH,
    SA | SB | SC | SD | SE | SF | SG | SH,
    TA | TB | TC | TD | TE | TF | TG | TH
>
export declare function union<
    CA,
    SA,
    TA,
    CB,
    SB,
    TB,
    CC,
    SC,
    TC,
    CD,
    SD,
    TD,
    CE,
    SE,
    TE,
    CF,
    SF,
    TF,
    CG,
    SG,
    TG,
    CH,
    SH,
    TH
>(
    options: UnionOptions,
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>,
    D: IType<CD, SD, TD>,
    E: IType<CE, SE, TE>,
    F: IType<CF, SF, TF>,
    G: IType<CG, SG, TG>,
    H: IType<CH, SH, TH>
): ITypeUnion<
    CA | CB | CC | CD | CE | CF | CG | CH,
    SA | SB | SC | SD | SE | SF | SG | SH,
    TA | TB | TC | TD | TE | TF | TG | TH
>
export declare function union<
    CA,
    SA,
    TA,
    CB,
    SB,
    TB,
    CC,
    SC,
    TC,
    CD,
    SD,
    TD,
    CE,
    SE,
    TE,
    CF,
    SF,
    TF,
    CG,
    SG,
    TG,
    CH,
    SH,
    TH,
    CI,
    SI,
    TI
>(
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>,
    D: IType<CD, SD, TD>,
    E: IType<CE, SE, TE>,
    F: IType<CF, SF, TF>,
    G: IType<CG, SG, TG>,
    H: IType<CH, SH, TH>,
    I: IType<CI, SI, TI>
): ITypeUnion<
    CA | CB | CC | CD | CE | CF | CG | CH | CI,
    SA | SB | SC | SD | SE | SF | SG | SH | SI,
    TA | TB | TC | TD | TE | TF | TG | TH | TI
>
export declare function union<
    CA,
    SA,
    TA,
    CB,
    SB,
    TB,
    CC,
    SC,
    TC,
    CD,
    SD,
    TD,
    CE,
    SE,
    TE,
    CF,
    SF,
    TF,
    CG,
    SG,
    TG,
    CH,
    SH,
    TH,
    CI,
    SI,
    TI
>(
    options: UnionOptions,
    A: IType<CA, SA, TA>,
    B: IType<CB, SB, TB>,
    C: IType<CC, SC, TC>,
    D: IType<CD, SD, TD>,
    E: IType<CE, SE, TE>,
    F: IType<CF, SF, TF>,
    G: IType<CG, SG, TG>,
    H: IType<CH, SH, TH>,
    I: IType<CI, SI, TI>
): ITypeUnion<
    CA | CB | CC | CD | CE | CF | CG | CH | CI,
    SA | SB | SC | SD | SE | SF | SG | SH | SI,
    TA | TB | TC | TD | TE | TF | TG | TH | TI
>
export declare function union(...types: IAnyType[]): IAnyType
export declare function union(
    dispatchOrType: UnionOptions | IAnyType,
    ...otherTypes: IAnyType[]
): IAnyType
/**
 * Returns if a given value represents a union type.
 *
 * @param type
 * @returns
 */
export declare function isUnionType<IT extends IAnyType>(type: IT): type is IT
