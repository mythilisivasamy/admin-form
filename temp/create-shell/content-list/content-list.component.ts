import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../shared/content.service';
import {Observable} from 'rxjs';
import { QuestionBase } from '../../shared/question-base';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  qbase$!:Observable<QuestionBase[]>;
  constructor(private cs:ContentService) { }

  ngOnInit(): void {
    this.qbase$=this.cs.getQBases();
  }

}
