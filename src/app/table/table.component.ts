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
  coloums: String[];
  data: ITableData[];
  errorMsg: String;

  constructor(private cryptoService: CryptodataService) { }

  ngOnInit() {
    this.getCryptoData('btc');
    this.coloums = this.cryptoService.getColumns();
  }

  getCryptoData(token: String) {
    this.cryptoService.getCryptoData(token).subscribe(result => {
      this.data = Array.from(result);
    },
      error => this.errorMsg = <any>error);
  }



}
