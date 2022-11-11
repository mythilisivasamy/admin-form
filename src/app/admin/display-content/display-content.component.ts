import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/shared/content.service';

@Component({
  selector: 'app-display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.css']
})
export class DisplayContentComponent implements OnInit {
  
   constructor(public cs:ContentService) { }

  ngOnInit(): void {}
 
  }
