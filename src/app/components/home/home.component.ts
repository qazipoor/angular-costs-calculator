import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBaseCurrency, ICategory, ICosts } from 'src/app/interfaces/icosts.model';
import { IPaymentCurrency, IRates, ISourceCurrency } from 'src/app/interfaces/irates.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: ICategory[];
  costsData: ICosts;
  ratesData: IRates;

  baseCurrency: IBaseCurrency;
  sourceCurrency: ISourceCurrency;
  paymentCurrencies: IPaymentCurrency[] = [];

  constructor(private route: ActivatedRoute) {
    this.categories = this.route.snapshot.data['costs'].costs;
    this.costsData = this.route.snapshot.data['costs'];
    this.ratesData = this.route.snapshot.data['rates'];
    this.baseCurrency = this.costsData.baseCurrency;
    this.sourceCurrency = this.ratesData.sourceCurrency;
    this.paymentCurrencies = [...this.route.snapshot.data['rates'].paymentCurrencies];
  }

  ngOnInit(): void {}
}
