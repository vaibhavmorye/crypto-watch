import { Component, OnInit } from '@angular/core';
import { currency } from '../models/currency.model';
import { CryptodataService } from '../services/cryptodata.service';

@Component({
  selector: 'app-dropsearchbar',
  templateUrl: './dropsearchbar.component.html',
  styleUrls: ['./dropsearchbar.component.css']
})
export class DropsearchbarComponent implements OnInit {

  _listFilter:String;
  filteredCurrency: currency[];
  currencys:currency[];

  constructor(private CryptodataService: CryptodataService) { this.listFilter = ''; }

  ngOnInit() {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCurrency = this._listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): Currency[] {
    filterBy = filterBy.toLocaleLowerCase();
    console.log(this.products.filter((currency: Currency) => currency.productName.toLocaleLowerCase().indexOf(filterBy) != -1));
    return this.products.filter((product: Currency) => product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);

  }
}
