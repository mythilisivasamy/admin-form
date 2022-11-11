import { Component,Input,OnChanges,OnInit} from '@angular/core';
import { QuestionBase } from '../../shared/question-base';


@Component({
  selector: 'app-shorttext',
  templateUrl: './shorttext.component.html',
  styleUrls: ['./shorttext.component.css']
})
export class ShorttextComponent implements OnInit,OnChanges {
 @Input() qbase!:QuestionBase;
 key!:any;

  constructor(){}

  ngOnInit(): void {
    this.qbase.content.type="text";
    this.key=this.qbase.content?.qTitle;
    
   }
  ngOnChanges(){
    this.qbase.content.type="text";
    this.key=this.qbase.content?.qTitle;
    this.qbase.content.key=this.key.split(" ").splice(-1);
   }
  
 }
