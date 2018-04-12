import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ITableData } from '../models/ITableData.model';
import { ICurrency } from '../models/ICurrency.model';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class CryptodataService {

  constructor(private http: HttpClient) { }

  getCryptoData(token: String): Observable<ITableData[]> {
    var serviceUrl = 'https://infinite-depths.herokuapp.com/forecast?code=' + token;
    return this.http.get<ITableData[]>(serviceUrl)
      .do(data => { }) // console.log('All' + JSON.stringify(data))
      .catch(this.handleError);
  }

  getCryptoCur(): Observable<any> {
    var serviceUrl = 'https://infinite-depths.herokuapp.com/coins';
    return this.http.get<any>(serviceUrl)
      .do(data => { }) //console.log('All' + JSON.stringify(data))
      .catch(this.handleError);
  }


  handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getColumns(): string[]{
    return ["timestamp", "usd"];
  }

}
