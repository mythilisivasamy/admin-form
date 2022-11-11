import { Directive,ViewContainerRef } from '@angular/core';
@Directive({
    selector:'[shellHost]'
})
export class ShellDirective {
    constructor(public viewContainerRef:ViewContainerRef){}
}