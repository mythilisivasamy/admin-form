import { Component, OnInit} from '@angular/core';
import { QuestionBase} from '../../shared/question-base';
import { ContentService } from '../../shared/content.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  qbase!:QuestionBase;
  cnt:number=0;
  constructor(private cs:ContentService) { }

  ngOnInit(): void {
  }
  createShell(shellType:string){
    this.qbase={ 
      block:++this.cnt,
      content:{
        key:'',
        qTitle:'',
        order:this.cnt,
        controlType:shellType,
        type:'',
        options:[],
        condition:{options:[]}
      }
    }
    this.cs.setQBase(this.qbase)
}
}
