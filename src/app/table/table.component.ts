import { Component, OnInit } from '@angular/core';
import { CryptodataService } from '../services/cryptodata.service';
import { Observable } from 'rxjs/Observable';
import { ITableData } from '../models/ITableData.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  data: ITableData[];
  errorMsg: String;

  constructor(private cryptoService: CryptodataService) { }

  ngOnInit() {
    this.getCryptoData('btc');
  }

  getCryptoData(token: String) {
    this.cryptoService.getCryptoData(token).subscribe(result => {
      this.data = result;
      console.log(this.data);
    },
      error => this.errorMsg = <any>error);
  }



}
