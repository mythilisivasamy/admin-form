import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import {map } from 'rxjs/operators';
import { QuestionBase,QBASE } from './question-base';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  qbases$!:Observable<QuestionBase[]>;
  constructor( ) {
    this.qbases$=this.getQBases();
   }
 
  setQBase(val:QuestionBase){
      QBASE.push(val);
  }
 getQBase(block:number){
  return this.qbases$.pipe(
    map((qbases)=>qbases.find(qbase=>qbase.block === block)!)
  );
 }
  getQBases(){
    return of(QBASE);
  }
 
}
