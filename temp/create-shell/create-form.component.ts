import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-form',
  template: `
   <div class="row">
      <div class="col-sm-1" style="background-color:lavender;">
       <app-content></app-content>
       </div>
        <div class="col-sm-7" style="background-color:lavenderblush;">
            <router-outlet></router-outlet>
        </div>
        <div class="col-sm-4 " style="background-color:lavender;">
            <app-type></app-type><hr/>
            <div class="row ">
                <div class="col-sm-4">
                    <app-content-list></app-content-list> 
                </div>
            </div>
       </div>
    </div>
    
  `,
  styles: [
  ]
})
export class CreateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
