import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { QuestionBase} from 'src/app/shared/question-base';
import { FormArray, FormControl, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { ContentService } from 'src/app/shared/content.service';

@Component({
  selector: 'app-multi-choice',
  templateUrl: './multi-choice.component.html',
  styleUrls: ['./multi-choice.component.css']
})
export class MultiChoiceComponent implements OnInit,OnChanges {
  @Input() qbase!:QuestionBase;
  qbases$!:Observable<QuestionBase[]>;
  isCondition:boolean=false;
  isContent:boolean=false;
  questionbase=new FormGroup({
    qtitle:new FormControl(''),
    option:new FormControl(''),
    block:new FormControl(''),
    choice:new FormArray([])
  })
  constructor(public cs:ContentService) {
    
   }

  ngOnInit(): void {
    this.qbase.content.type="dropdown";
  }

  get block(){
    return this.questionbase.get('block');
  }
  get option(){
    return this.questionbase.get('option');
  }
 get qtitle(){
  return this.questionbase.get('qtitle');
 }

 get choice(){
  return this.questionbase.get('choice') as FormArray;
 }

 saveChange(){
  this.qbase.content.options=[];
  let key=this.qtitle?.value;
  this.qbase.content.key=key.split(" ").splice(-1);
  this.qbase.content.qTitle=this.qtitle?.value;
  this.choice.controls.forEach((ctrl)=>{
    this.qbase.content.options?.push({key:ctrl.value,value:ctrl.value});
  })
 }

 addChoice(){
    this.choice.push(new FormControl(''));
 }

 showCondition(){
  this.isCondition=true;
 }

 showContent(){
  this.isContent=true;
 }

 saveCondition(){
  let cond=this.qbase.content.condition?.options;
  cond?.length==0?
  cond.push({option:this.option?.value,block:parseInt(this.block?.value,10)}):
  cond?.forEach(item=>{
    if(item.option!=this.option?.value){
      cond?.push({option:this.option?.value,block:parseInt(this.block?.value,10)});
    }
  })
  this.isCondition=this.isContent=false;
 }
 remove(idx:number){
  this.choice.removeAt(idx);
 }

 ngOnChanges(){
  this.qbase.content.type="dropdown";
  this.choice.controls.splice(0);
  this.qtitle?.patchValue(this.qbase.content.qTitle);
    if(this.qbase.content.options?.length!=0){
      this.qbase.content.options?.forEach(option=>{
        this.choice.push(new FormControl(option.value))
      })
    }
 }
}
