import { Component, OnInit } from '@angular/core';
import { ICurrency } from '../models/ICurrency.model';
import { CryptodataService } from '../services/cryptodata.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropsearchbar',
  templateUrl: './dropsearchbar.component.html',
  styleUrls: ['./dropsearchbar.component.css']
})
export class DropsearchbarComponent implements OnInit {
/*   myForm: FormGroup;
  token: String; */
  _listFilter: string;
  filteredCurrency: ICurrency[];
  currencys: ICurrency[];
  errorMsg: String;

  constructor(private cryptodataService: CryptodataService/* , fb: FormBuilder */) { this.listFilter = ''; 
  /* this.myForm = fb.group({
    'token': ''
  }); */}

  ngOnInit() {
    this.cryptodataService.getCryptoCur().subscribe(res => {
      this.currencys = res.coins as ICurrency[];
    },
      error => this.errorMsg = <any>error);



    /* this.cryptodataService.getCryptoCur().subscribe(result => {
      this.currencys = result as ICurrency[]; 
      console.log(this.currencys.forEach(val=>console.log(val.name)));
    },
      error => this.errorMsg = <any>error); */
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
