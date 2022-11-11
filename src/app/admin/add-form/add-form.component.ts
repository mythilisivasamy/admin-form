import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import { ContentService } from 'src/app/shared/content.service';
import { Form,Content} from 'src/app/_models/form';
import { stringValidator,numberValidator,dateValidator } from 'src/app/shared/customValidators'
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
  
})
export class AddFormComponent implements OnInit {
    form$!:Form;
    form=this.fb.group({
    form_name:['',[Validators.required,stringValidator(/^[a-zA-Z\s]+$/)]],
    category:['',[Validators.required,stringValidator(/^[a-zA-Z\s]+$/)]],
    max_level:['',[Validators.required,numberValidator(/^[\d+\.\d*]+$/)]],
    contents:this.fb.group({
        q_title:['',[Validators.required,stringValidator(/^[a-zA-Z\s]+$/)]],
        content_type:[''],
        settings:this.fb.group({
          required:[''],
          max_length:['']
        }),
        answers:this.fb.array([])
     })
});
    
  constructor(private fb:FormBuilder,private cs:ContentService) { }

  ngOnInit(): void { }
  get form_name(){
    return this.form.get('form_name');
  }

  get category(){
    return this.form.get('category');
  }
  get max_level(){return this.form.get('max_level')}

  get contents(){
    return this.form.get('contents') as FormGroup;
  }

  onSave(){
    this.cs.setTitle(this.contents.get('q_title')?.value);
    if(this.cs.FORM.form_id === undefined){
      this.cs.FORM.form_id='new';
    }

      this.cs.addForm(this.form.value,this.cs.FORM.form_id).subscribe(
       val=>{
         this.form$=val as Form;
         this.cs.FORM={
           form_id:this.form$.form_id,
           form_name:this.form$.form_name,
           category:this.form$.category,
           max_level:this.form$.max_level,
           }
        
       }
      );
    }
  
  onAddContent(){ 
    this.form.patchValue({'form_name':this.cs.FORM.form_name,'category':this.cs.FORM.category,'max_level':this.cs.FORM.max_level});
  }
}
