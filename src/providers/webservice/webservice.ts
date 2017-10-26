import { Injectable } from '@angular/core';
import { Http, HttpModule, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Posts } from '../../models/posts';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the WebserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class WebserviceProvider {

  constructor(
    public http: Http
  ) {
    console.log('Hello WebserviceProvider Provider');
  }

  getData():Observable<Posts[]>{
    return this.http.get('http://localhost:3000/getposts')
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }

  addData(data:any){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    var options = new RequestOptions({ headers: headers }); 

    return this.http.post('http://localhost:3000/addpost',data,{headers:headers})
    .map(res=>res.json())

  }
}
