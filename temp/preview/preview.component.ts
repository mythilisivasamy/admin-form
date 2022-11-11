import { Component, OnInit } from '@angular/core';
import { QuestionBase,Condition} from '../shared/question-base';
import { ContentService } from '../shared/content.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  qbases:QuestionBase[]=[];
  temp:QuestionBase[]=[];
  _options:Condition[]=[];
  conditions:QuestionBase[]=[];
  form!:FormGroup;
  constructor(private cs:ContentService) {
    const group:any={};
    this.cs.getQBases().subscribe(
      val=>{
        val.forEach(item=>{
          this.qbases.push(item);
          group[item.content.key!]=new FormControl('')
       });
      }
    )
   this.form=new FormGroup(group); 
   }
  
  ngOnInit(): void {
    this.temp=this.qbases.splice(0,1)
  }

  next(){
    //let indexes:number[]=[];
      if((this.temp[0].content.type==='dropdown') && this.temp[0].content.condition?.options?.length){
      this._options=this.temp[0].content.condition?.options?.splice(0);
      console.table(this._options);
      this._options.forEach(
        opt=>{
              this.qbases.forEach(
              qbase=>{
                if(opt.block === qbase.block) this.conditions.push(qbase);
              })
        })
        console.log("conditions");
        console.table(this.conditions);
        this.temp=this.qbases.splice(0,1);
     }

      else this.temp=this.qbases.splice(0,1);
    
  }

 

}

/*
console.log("condition",this.isSetCondition);
     if(this.isSetCondition && this._options.length){
       this.qbases=this.qbases.filter(this.isMatchOption);
       console.table(this.qbases);
       
     }
    else{
    console.log(this.form.get(this.temp[0].content.key!)?.value);
    
    else{
      this.isSetCondition=false;
      this._options=[];
    }
  }

if((this.form.get(this.temp[0].content.key!)?.value) === opt.option ){
          this.temp[0]=qbase;
        }

 
       qbases.splice(index,0)
      }
    })
    return this.temp;
     isMatchOption(qbase:QuestionBase){
    this._options.forEach(
    opt=>qbase.block !== opt.block
    )
  }
    */