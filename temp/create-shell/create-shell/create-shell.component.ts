import { Component,OnInit} from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { ContentService } from '../../shared/content.service';
import { QuestionBase } from '../../shared/question-base';

@Component({
  selector: 'app-create-shell',
  templateUrl: './create-shell.component.html',
  styleUrls: ['./create-shell.component.css']
})
export class CreateShellComponent implements OnInit {
  qbase$!:Observable<QuestionBase>;
  _qbase!:QuestionBase;
  shellType:string='';
  constructor(
    private route:ActivatedRoute,
    private cs:ContentService) {
      
     }

  ngOnInit(): void {
   this.qbase$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cs.getQBase(parseInt(params.get('id')!,10)))
    );
    this.qbase$.subscribe(qbase=>this._qbase=qbase!);
  }
}
