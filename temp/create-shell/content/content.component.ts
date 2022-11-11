import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../shared/content.service';
import { QuestionBase } from '../../shared/question-base';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  qbase$:Observable<QuestionBase[]>;
  constructor(private cs:ContentService) {
   this.qbase$=cs.getQBases();
   }

  ngOnInit(): void {
  }

}
