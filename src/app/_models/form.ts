export interface Form{
    form_id?:string,
    form_name?:string;
    category?:string;
    max_level?:number;
    contents?:Content;
   
}

export interface Content{
        q_title?:string;
        content_type?:string;
            setting?:{
                required:string;
                max_length:number;
            },
            answer?:{key:string;value:string;levels?:number[]}[];
        
}

export const FORM:Form={};
export const CONTENTS:Content[]=[];





