import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroupDirective,
  FormGroup,
  FormArray,
  FormBuilder,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-q-content',
  templateUrl: './q-content.component.html',
  styleUrls: ['./q-content.component.css'],
})
export class QContentComponent implements OnInit {
  @Input() formGroupName = '';
  contents!: FormGroup;
  answers!: FormArray;
  settings!: FormGroup;
  q_title!:FormControl;
  type: string = '';
  isSaved:boolean=false;

  types = [
    { key: '', value: 'Choose Type' },
    { key: 'short_text', value: 'Short Text' },
    { key: 'long_text', value: 'Long Text' },
    { key: 'multi_choice', value: 'Multi Choice' },
    { key: 'check_box', value: 'Check Box' },
    { key: 'radio', value: 'Radio Button' },
    { key: 'email', value: 'Email' },
  ];

  constructor(
    private rootFormGroup: FormGroupDirective,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.contents = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
    this.answers = this.contents?.get('answers') as FormArray;
    this.settings = this.contents?.get('settings') as FormGroup;
    this.q_title=this.contents?.get('q_title') as FormControl;
  }
  get max_level() {
    return this.rootFormGroup.control.get('max_level')?.value;
  }

  get content_type() {
    return this.contents.get('content_type')?.value;
  }
 
  onTypeChange() {
    this.type = this.content_type;
    if((this.type ==='short_text') || (this.type==='long_text') || (this.type==='email')){
     while(this.answers.controls.length!=0){
        this.answers.removeAt(0);
      }
    }
  }

  addChoice() {
    let _level: FormArray = new FormArray([]);
    for (let i = 0; i < this.max_level; i++) {
      _level.push(new FormControl(''));
    }
    this.answers.push(
      this.fb.group({
        key: [''],
        value: [''],
        levels: _level,
      })
    );
  }
  setKey(idx: number) {
    let _fGroup = this.answers.at(idx) as FormGroup;
    _fGroup.get('key')?.patchValue(_fGroup.get('value')?.value);
  }

  getLevels(idx: number) {
    return this.answers.at(idx).get('levels') as FormArray;
  }

  onClickDel(idx: number) {
    this.answers.removeAt(idx);
  }
 
}
