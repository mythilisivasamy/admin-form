export interface QuestionBase{
    block:number,
    content:{
    key?:string,
    qTitle?:string,
    value?:string,
    required?:boolean,
    order?:number,
    controlType?:string,
    type?:string,
    options?:Option[],
    condition?:{options?:Condition[]}
}
}

export interface Option{
    key:string,
    value:string
}
export interface Condition{
    option:string,
    block:number
}

export const QBASE:QuestionBase[]=[];