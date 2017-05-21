import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {contentHeaders} from "./headers";
import {mainPage} from "./main-page";

@Injectable()
export class mainPageService {
 private url = 'http://localhost:3000/hello';
  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body.data || { };
  // }

  constructor(private http: Http) {}

 getData(): Observable<mainPage[]>  {
    return  this.http.get(this.url, {headers: contentHeaders})
      .map(response => response.json())
  }
}
