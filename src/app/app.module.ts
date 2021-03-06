import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { CryptodataService } from './services/cryptodata.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DropsearchbarComponent } from './dropsearchbar/dropsearchbar.component';
import { MainPipe } from './main-pipe.module';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent,
    DropsearchbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainPipe
  ],
  providers: [CryptodataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
