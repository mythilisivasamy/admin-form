import {Type} from '@angular/core';

export class ShellType{
    constructor(public component:Type<any>,
        public data:any){}
}