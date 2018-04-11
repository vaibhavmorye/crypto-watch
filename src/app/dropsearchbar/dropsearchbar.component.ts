import { Component, OnInit } from '@angular/core';
import { ICurrency } from '../models/ICurrency.model';
import { CryptodataService } from '../services/cryptodata.service';

@Component({
  selector: 'app-dropsearchbar',
  templateUrl: './dropsearchbar.component.html',
  styleUrls: ['./dropsearchbar.component.css']
})
export class DropsearchbarComponent implements OnInit {

  _listFilter: string;
  filteredCurrency: ICurrency[];
  currencys: ICurrency[];
  errorMsg: String;

  constructor(private cryptodataService: CryptodataService) { this.listFilter = ''; }

  ngOnInit() {
    this.cryptodataService.getCryptoCur().subscribe(result => {
      this.currencys =result;
      console.log(typeof( this.currencys));
    },
      error => this.errorMsg = <any>error);
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCurrency = this._listFilter ? this.performFilter(this.listFilter) : this.currencys;
  }

  performFilter(filterBy: string): ICurrency[] {
    filterBy = filterBy.toLocaleLowerCase();
    console.log(this.currencys.filter((currency: ICurrency) => currency.name.toLocaleLowerCase().indexOf(filterBy) != -1));
    return this.currencys.filter((currency: ICurrency) => currency.name.toLocaleLowerCase().indexOf(filterBy) != -1);

  }
}
