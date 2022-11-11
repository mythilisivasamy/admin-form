import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable,throwError,of} from 'rxjs';
import {catchError,map } from 'rxjs/operators';
import { Form,Content} from '../_models/form';

@Injectable({
  providedIn: 'root'
})

export class ContentService {
  FORM:Form={};
  form$!:Observable<Form[]>;
  contents$!:Observable<Content[]>;
  qTitle:string[]=[];
  constructor( private http:HttpClient) {  }

  private uri='http://localhost:8000'; 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  private handleError(errorResponse : HttpErrorResponse){

    if(errorResponse instanceof ErrorEvent){
      console.error(`client error,${errorResponse}`)
    }
    else{
     console.error(`server side error`)
    }
   return throwError(()=>'there is a error with service');
  }
 
  setTitle(qTitle:string){
    this.qTitle.push(qTitle);
  }

  addForm(form:Form,form_id:string):Observable<unknown>{
    return this.http.post(`${this.uri}/addForm/${form_id}`,form,this.httpOptions)
    
  }

 getForm(_form_id:number | string){
  return this.form$.pipe(
    map((forms)=>forms.find(form=>form.form_id === _form_id)!)
  );
 }

 getForms():Observable<any>{
  return  this.http.get(`${this.uri}/forms`)
  .pipe( //tap(forms => this.forms$!=of(forms)),
    catchError(this.handleError)
  )
  }

 getQTitles(){
    return of(this.qTitle);
  }
 
}
